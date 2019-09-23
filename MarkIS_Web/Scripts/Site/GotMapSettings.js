GotMapEngine.Options.TileLayerDefinitions.push(GotMapEngine.TileLayerDefinitions.Cycle);
GotMapEngine.Options.TileLayerDefinitions.push(GotMapEngine.TileLayerDefinitions.Transport);
GotMapEngine.Options.TileLayerDefinitions.push(GotMapEngine.TileLayerDefinitions.Landscape);
GotMapEngine.Options.TileLayerDefinitions.push(GotMapEngine.TileLayerDefinitions.Outdoors);
GotMapEngine.Options.TileLayerDefinitions.push(GotMapEngine.TileLayerDefinitions.TransportDark);



var tkOpenAccWms = GotMapEngine.OGCServerManager.CreateServer(
    '//10.42.25.36/wms'
    , GotMapEngine.Enums.OGCServerTypes.WMS
    , {
        version: '1.1.1'
        , useProxy: true
        , isCorsEnabled: false
    }
);

var tkOpenWmsGWC = GotMapEngine.OGCServerManager.CreateServer(
    '//open.geodata.tkgbg.se/gwc/service/wms'
    , GotMapEngine.Enums.OGCServerTypes.WMS
    , {
        version: '1.1.1'
        , useProxy: true
    }
);

var tkOpenWms = GotMapEngine.OGCServerManager.CreateServer(
    '//open.geodata.tkgbg.se/wms'
    , GotMapEngine.Enums.OGCServerTypes.WMS
    , {
        version: '1.1.1'
        , useProxy: true
    }
);

var tkOpenWfs = GotMapEngine.OGCServerManager.CreateServer(
    '//open.geodata.tkgbg.se/wfs'
    , GotMapEngine.Enums.OGCServerTypes.WFS
    , {
        version: '1.1.0'
        , useProxy: true
    }
);

var tkInternalWms = GotMapEngine.OGCServerManager.CreateServer(
    '//internal.geodata.tkgbg.se/wms'
    , GotMapEngine.Enums.OGCServerTypes.WMS
    , {
        version: '1.1.1'
        , useProxy: true
    }
);

var tkInternalWmsGWC = GotMapEngine.OGCServerManager.CreateServer(
    '//internal.geodata.tkgbg.se/gwc/service/wms'
    , GotMapEngine.Enums.OGCServerTypes.WMS
    , {
        version: '1.1.1'
        , useProxy: true
        , altUrl: '//internal.geodata.tkgbg.se/wms'
    }
);

var tkInternalWfs = GotMapEngine.OGCServerManager.CreateServer(
    '//internal.geodata.tkgbg.se/wfs'
    , GotMapEngine.Enums.OGCServerTypes.WFS
    , {
        version: '1.3.0'
        , useProxy: true
    }
);

var orebroWMS = GotMapEngine.OGCServerManager.CreateServer(
    '//karta2.orebro.se/mywms1/BakgrundskartaTile.wms'
    , GotMapEngine.Enums.OGCServerTypes.WMS
    , {
        version: '1.3.0'
        , useProxy: true
    }
);


//var nasaWMS = GotMapEngine.OGCServerManager.CreateServer(
//    '//sedac.ciesin.columbia.edu/geoserver/wms'
//    , GotMapEngine.Enums.OGCServerTypes.WMS
//    , {
//        version: '1.3.0'
//        , useProxy: false
//        , isCorsEnabled: true
//    }
//);

var testWMS = GotMapEngine.OGCServerManager.CreateServer(
    '//10.42.21.151/wms'
    , GotMapEngine.Enums.OGCServerTypes.WMS
    , {
        version: '1.3.0'
        , useProxy: false
    }
);



/*GotMapEngine.Options.GeoServerDefinitions.push({
    Name: 'TK-Open'
    , WMSUrl: '//open.geodata.tkgbg.se/wms'
    , WMSCacheUrl: '//open.geodata.tkgbg.se/gwc/service/wms'
    , WFSUrl: '//open.geodata.tkgbg.se/wfs'
    , UseProxy: false
});*/

//GotMapEngine.Options.GeoServerDefinitions.push({
//    Name: 'TK-Internal'
//    , WMSUrl: '//internal.geodata.tkgbg.se/wms'
//    , WMSCacheUrl: '//internal.geodata.tkgbg.se/gwc/service/wms'
//    , WFSUrl: '//internal.geodata.tkgbg.se/wfs'
//    , UseProxy: true
//});

//GotMapEngine.Options.GeoServerDefinitions.push({
//    Name: 'SBK-Orto'
//    , WMSUrl: '//geodata.goteborg.se/kartor/sbk/ortofoto/wms/v2'
//    , WMSCacheUrl: ''
//    , WFSUrl: ''
//    , UseProxy: true
//});

//GotMapEngine.Options.GeoServerDefinitions.push({
//    Name: 'SBK-Stadskarta'
//    , WMSUrl: '//geodata.goteborg.se/kartor/sbk/stadskarta/wms/v2'
//    , WMSCacheUrl: ''
//    , WFSUrl: ''
//    , UseProxy: true
//});

//GotMapEngine.Options.GeoServerDefinitions.push({
//    Name: 'TK-ACC'
//    , WMSUrl: '//10.42.25.36/wms'
//    , WMSCacheUrl: '//10.42.25.36/gwc/service/wms'
//    , WFSUrl: '//10.42.25.36/wfs'
//    , UseProxy: true
//});

//GotMapEngine.Options.GeoServerDefinitions.push({
//    Name: 'Nasa'
//    , WMSUrl: '//sedac.ciesin.columbia.edu/geoserver/wms'
//    , WMSCacheUrl: ''
//    , WFSUrl: ''
//    , UseProxy: false
//});


GotMapEngine.Options.LayerInfoButton = true;
GotMapEngine.Options.Language = 'English';
//GotMapEngine.Options.Language = 'sv-SE';

GotMapEngine.Options.ContextMenuOptions.Map.MenuOptions.push({ text: 'Center map here', callback: function (e) { this.map.panTo(e.latlng); } });
GotMapEngine.Options.ContextMenuOptions.Feature.MenuOptions.push({
    text: 'Properties', 
    callback: function (e) {
        if (!e.relatedTarget)
        var content = '<table>';
        content += '<tr> <td>Leaflet id: </td><td>' + e.relatedTarget._leaflet_id + '</td> </tr>';

        if (e.relatedTarget.feature && e.relatedTarget.feature.properties) {
            var properties = e.relatedTarget.feature.properties;
            for (var key in properties) {
                if (properties.hasOwnProperty(key)) {
                    content += '<tr><td>' + key + ': </td><td>' + properties[key] + '</td> </tr>';
                }
            }

        }
        content += '</table>';
        var popup = L.popup().setLatLng({ lat: e.latlng.lat, lng: e.latlng.lng }).openOn(this.map);
        popup.setContent(content);
    }
});