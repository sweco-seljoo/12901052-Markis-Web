MarkisHandler = function (gotmap, options) {

    this.connectedToMarkis = false;
    this.searchHandler = new SearchHandler(options, gotmap);

    this.getUrlParams = function () {
        $.urlParam = function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results == null) {
                return null;
            }
            else {
                return decodeURI(results[1]) || 0;
            }
        }

        var username = $.urlParam('username');
        var config = $.urlParam('config');

        return {
            'username': username,
            'config': config
        };
    };

    this.connectToHub = function (connectionParams) {

        if (connectionParams.username !== null) {
            var connection = new signalR.HubConnectionBuilder().withUrl(options.baseConnectionUrl + connectionParams.username + "").build();

            connection.start()
                .then(function () {
                    this.connectedToMarkis = true;
                    console.log("Connected to hub!");
                }.bind(this))
                .catch(function () {
                    console.log("Connection to hub failed");
                    this._createInformationWindow("Uppkoppling misslyckades", "Uppkoppling mot MarkIS har misslyckats, kontakta systemadministratören.");
                }.bind(this));

            connection.on("ShowContractFromMarkis", function (_, contractString) {
                this.searchHandler.queryWfs(contractString);
            }.bind(this));

            gotmap.map.on('zoom', function (e) {
                connection.invoke("Zoom", "markis_" + connectionParams.username, "Zoom");
            });

        }
    };

    this._createInformationWindow = function (title, windowContent) {
        windowContent = '<p>' + windowContent + '</p>';
        this.informationWindow = L.control.gotmapwindow(gotmap.map, { title: title, content: windowContent, modal: true, visible: true, position: 'top' });
        $(this.informationWindow._container).find('.promptButtons').remove();
    };
};

SearchHandler = function (options, gotmap) {
    this.options = options;
    this._getServer = function () {

        if (!this._server) {
            if (GotMapEngine.OGCServerManager.ServerExists(options.wfsSearchUrl, GotMapEngine.Enums.OGCServerTypes.WFS)) {
                this._server = GotMapEngine.OGCServerManager.GetServer(this.options.wfsSearchUrl, GotMapEngine.Enums.OGCServerTypes.WFS);
            }
            else {
                //create a temporary server to maka the getfeatureinfo call, if layer uses proxy the server will not be corsenabled->useproxy
                this._server = new GotMapEngine.Classes.OGCServer(this.options.wfsSearchUrl, GotMapEngine.Enums.OGCServerTypes.WFS,
                    { isCorsEnabled: false }
                );
            }

        }
        return this._server;
    };

    this.queryWfs = function (searchTerm) {
        this._lastSearchTerm = searchTerm;
        var cql_filter = '';
        for (var i = 0; i < this.options.properties.length; i++) {
            cql_filter = cql_filter.length > 0 ? cql_filter + ' OR ' : cql_filter;
            cql_filter += "strIndexOf(strToLowerCase(" + this.options.properties[i] + "), '" + searchTerm.toLowerCase() + "') > -1";

        }
        var wfsOptions = {};
        wfsOptions.cql_filter = cql_filter;
        wfsOptions.crs = 'EPSG:4326';

        this._getServer().GetFeatureAsync(this.options.layer, wfsOptions, false).done(
            this._onSearchDone.bind(this)
        ).fail(function (err) {
            this._createInformationWindow("Inga träffar", "Sökningen gav inga träffar");

        });
    };

    this._createInformationWindow = function (title, windowContent) {
        windowContent = '<p>' + windowContent + '</p>';
        this.informationWindow = L.control.gotmapwindow(gotmap.map, { title: title, content: windowContent, modal: true, visible: true, position: 'top' });
        $(this.informationWindow._container).find('.promptButtons').remove();
    };

    this._onSearchDone = function (data) {
        if (data && data.features && data.features.length > 0) {
            if (!this._searchResultLayer) {
                this._setUpSearchResultLayer();
            }

            var arrayContains = function (arr, val) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] === val) {
                        return true;
                    }
                }
                return false;
            };

            var matches = [];
            for (var i = 0; i < data.features.length; i++) {
                var exactSearchvalueMatch = false;
                var feature = data.features[i];

                for (var key in feature.properties) {
                    if (feature.properties.hasOwnProperty(key)) {
                        if (this.options.properties !== undefined && arrayContains(this.options.properties, key)) {
                            var property = feature.properties[key];
                            if (this._lastSearchTerm.toLowerCase() === property.toString().toLowerCase()) {
                                exactSearchvalueMatch = true;
                            }
                        }
                    }
                }

                if (exactSearchvalueMatch) {
                    matches.push(feature);
                }
            }

            if (matches.length > 0) {
                data.features = matches;
                data.numberMatched = matches.length;
                data.numberReturned = matches.length;
                data.totalFeatures = matches.length;
            }

            this.showSearchResultOnMap(data);

        }
        else {
            this._createInformationWindow("Inga träffar", "Sökningen gav inga träffar");
            this.clearSearchResult();
        }
    };

    this.showSearchResultOnMap = function (geoJSON) {
        if (!this._searchResultLayer)
            this._initSearchResultLayer();
        this.clearSearchResult();

        this._searchResultLayer.addData(geoJSON);

        //Zoom pan to features
        var bounds = this._searchResultLayer.getBounds();
        gotmap.map.fitBounds(bounds, { padding: [20, 20], maxZoom: 18, animate: true });
    };

    this.clearSearchResult = function () {
        if (this._searchResultLayer) {
            this._searchResultLayer.clearLayers();
        }
    };

    this._setUpSearchResultLayer = function () {
        this._initSearchResultLayer();

        if (this.options.properties && Array.isArray(this.options.properties)) {
            this._searchResultLayer.options.onEachFeature = function (feature, layer) {
                var popup = '';
                for (var i = 0; i < this.options.properties.length; i++) {
                    if (feature.properties[this.options.properties[i]])
                        popup += '<div>' + feature.properties[this.options.properties[i]] + '</div>';
                }
                if (popup.length > 0) {
                    layer.bindPopup(popup);
                }
            }.bind(this);
        }
    };

    this._initSearchResultLayer = function () {
        if (!this._searchResultLayer) {
            this._searchResultLayer = L.geoJSON();
            this._searchResultLayer.options.pointToLayer = function (geoJsonPoint, latlng) {
                return L.circle(latlng, { radius: 0.1 });
            };
            this._searchResultLayer.addTo(gotmap.map);
        }
    };

};

GotMapEngine.GotMap.prototype.initializeMarkisConnection = function (gotmap, options) {
    this.markisHandler = new MarkisHandler(gotmap, options);
    var connectionParams = this.markisHandler.getUrlParams();
    this.markisHandler.connectToHub(connectionParams);
};

GotMapEngine.GotMap.prototype.addCustomPrintModule = function (gotmap) {

    L.control.browserPrint({
        title: 'Print the map',
        documentTitle: '',
        closePopupsOnPrint: false,
        printModes: [
            L.control.browserPrint.mode("Portrait", "Portrait", 'A4'),
            L.control.browserPrint.mode("Landscape", "Landscape", 'A4'),
            L.control.browserPrint.mode.custom("Välj ett område", 'A4')
        ],
        manualMode: false
    }).addTo(gotmap.map);

    gotmap.map.on("browser-print-start", function (e) {
        L.control.scale({
            position: 'bottomleft',
            imperial: false,
            maxWidth: 100
        }).addTo(e.printMap);
    }.bind(this));

};