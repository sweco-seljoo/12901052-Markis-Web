 
GotMapEngine.TKWmsLayerDefinitions = {
	open_Cykelbanor: {
	    Url: '//open.geodata.tkgbg.se/gwc/service/wms'
		, Name: 'Cykelbanor'
		, Layer: 'cykel:cykelbanor'
		, Styles: undefined
		, Format: 'image/png'
		, Transparent: true
		, MaxZoom: undefined
        , IsCached: true
	}

	, internal_Bakgrundskarta: {		
	    Url: '//internal.geodata.tkgbg.se/gwc/service/wms'
		, Name: 'Bakgrundskarta'
		, Layer: 'bk:bakgrund'
		, Styles: undefined
		, Format: 'image/png'
		, Transparent: false
        , UseProxy: true
        , IsCached: true
	}

    , internal_Bakgrundskarta_nedtonad: {
        Url: '//internal.geodata.tkgbg.se/gwc/service/wms'
        , Name: 'Bakgrundskartan nedtonad'
        , Layer: 'bk:bakgrund_nedtonad'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: false
        , UseProxy: true
        , IsCached: true
    }

	, internal_Forvaltningskartan: {
	    Url: '//internal.geodata.tkgbg.se/gwc/service/wms'
		, Name: 'Förvaltningskartan'
		, Layer: 'fk:forvaltningskartan'
		, Styles: undefined
		, Format: 'image/png'
		, Transparent: true
        , UseProxy: true
        , IsCached: true
	}

	 , internal_Kanstod: {
         Url: '//internal.geodata.tkgbg.se/gwc/service/wms'
		 , Name: "Kantstöd"
		 , Layer: 'pk:pri_vag_kantstod_3007'
		 , Styles: undefined
		 , Format: 'image/png'
		 , Transparent: true
         , UseProxy: true
         , IsCached: true
	 }

    , internal_Ortofoto: {
        Url: '//internal.geodata.tkgbg.se/gwc/service/wms'
		, Name: "Ortofoto"
		, Layer: 'orto:orto_2010_2011'
		, Styles: undefined
		, Format: 'image/png'
		, Transparent: false
        , UseProxy: true
        , IsCached: true
        , GroupName: 'Ortofoto'
	}

    , internal_Vagkant: {
        Url: '//internal.geodata.tkgbg.se/gwc/service/wms'
	    , Name: "Vägkant"
	    , Layer: 'pk:pri_vag_vagkant_3007'
	    , Styles: undefined
	    , Format: 'image/png'
	    , Transparent: true
        , UseProxy: true
        , IsCached: true
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
    , internal_Forvaltningskartan: {
        Url: '//internal.geodata.tkgbg.se/gwc/service/wms'
        , Name: 'Förvaltningskartan'
        , Layer: 'fk:forvaltningskartan'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , UseProxy: false
    }
    
  
};