 
GotMapEngine.OpenWmsLayerDefinitions = {
	open_Cykelbanor: {
	    Url: '//open.geodata.tkgbg.se/gwc/service/wms'
		, Name: 'Cykelbanor'
		, Layer: 'cykel:cykelbanor'
		, Styles: undefined
		, Format: 'image/png'
		, Transparent: true
		, MaxZoom: undefined
        , IsCached: true
        GroupName: 'Öppna data'
	}
   
    , open_starttillstand: {
        Url: '//open.geodata.tkgbg.se/wms'
        , Name: 'Starttillstånd'
        , Layer: 'mark:starttillstand'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , MaxZoom: undefined
        , Queryable: true
        , GroupName: 'Öppna data'
        , InfoPopUpTemplate: '<div>startpermissionnumber: [startpermissionnumber] <br />address: [address]</div>'
    }
    , open_styrostall: {
        Url: '//open.geodata.tkgbg.se/wms'
        , Name: 'Styr och ställ'
        , Layer: 'cykel:styrostall'
        , Styles: 'styrostall_point_graphic'
        , Format: 'image/png'
        , Transparent: true
        , MaxZoom: undefined
        , Queryable: true
        , GroupName: 'Öppna data'
    }
 
    , population: {
        Url: '//sedac.ciesin.columbia.edu/geoserver/wms'
        , Name: 'Population'
        , Layer: 'gpw-v3:gpw-v3-population-density_2000'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Öppna data'
    }

     
    
};