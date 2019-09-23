 
GotMapEngine.FKWmsLayerDefinitions = {
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

    , Orto_Latest: {
        Url: 'http://geodata.sbk.goteborg.se/service/wms/ortofoto/v2'
        , Name: 'Ortofoto'
        , Layer: 'orto'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , UseProxy: true
        , IsCached: true //guess
        , GroupName: 'Ortofoto'
    }

    , Stadskarta: {
        Url: '//geodata.sbk.goteborg.se/service/wms/stadskarta/v3'
        , Name: 'Stadskarta'
        , Layer: 'stadskarta'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , UseProxy: true
        , IsCached: true //guess
    }
    , Stadskarta_nedtonad: {
        Url: '//geodata.sbk.goteborg.se/service/wms/stadskarta/v3'
        , Name: 'Stadskarta nedtonad'
        , Layer: 'stadskarta_nedtonad'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , UseProxy: true
        , IsCached: true //guess
    }
    , Topokarta: {
        Url: '//geodata.sbk.goteborg.se/service/wms/topokarta/v1'
        , Name: 'Topografisk karta'
        , Layer: 'topokarta'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , UseProxy: true
        , IsCached: true //guess
    }
    , Terrangkarta: {
        Url: '//geodata.sbk.goteborg.se/service/wms/terrangkarta/v1'
        , Name: 'Terrängkarta'
        , Layer: 'terrangkarta'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , UseProxy: true
        , IsCached: true //guess
    }
    , fvk_markistest: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Förvaltningskarta'
        , Layer: 'markistest:fvk'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01'
        , UseProxy: true
    }
    , orebro_bakgrund: {
        Url: '//karta2.orebro.se/mywms1/BakgrundskartaTile.wms'
        , Name: 'Örebro Grundkarta (TileCache)'
        , Layer: 'bakgrundtile'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , MaxZoom: 22
        , UseProxy: true
        , Version: '1.3.0'
        , LegendUrl: '//karta2.orebro.se/mywms1/LegendGraphics.ashx?layername=bakgrundtile&mapname=BakgrundskartaTile'
        , GroupName: 'Other'
    }
    , acc_cykel: {
        Url: '//10.42.25.36/wms'
        , Name: 'accCykel'
        , Layer: 'accCykel:cykelbanor'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , MaxZoom: 22
        , UseProxy: false
        , Version: '1.3.0'
        , GroupName: 'Öppna data'
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
    , tomtratt_markistest: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Tomträtt'
        , Layer: 'markistest:tomtratt'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01 - Markistest'
        , UseProxy: true
    }
    , kommunagd_mark_fk: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Kommunägd mark'
        , Layer: 'fk.kommunagd-mark.wms.v1:kommunagd-mark'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01'
        , UseProxy: true
    }
    , tomtratt_fk: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Tomträtt'
        , Layer: 'fk.tomtratt.wms.v1:tomtratt'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01'
        , UseProxy: true
    }
    , detaljplan_mark_fk: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Detaljplan mark'
        , Layer: 'fk.detaljplan-mark.wms.v1:detaljplan-mark'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01'
        , UseProxy: true
    }
    , forvaltningskarta_fk: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Förvaltningskarta'
        , Layer: 'fk.forvaltningskartan.wms.v1:fvk'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01'
        , UseProxy: true
    }
    , befintlig_bmss_fk: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Befintlig BmSS'
        , Layer: 'fk.bmss.wms.v1:befintlig'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01'
        , UseProxy: true
    }
    , forvaltningskartan_niva_fk: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Förvaltningskarta nivå'
        , Layer: 'fk.forvaltningskartan.wms.v1:fvk_niva'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01'
        , UseProxy: true
    }
    , intag_fk: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Intag'
        , Layer: 'fk.dagvattenkartan.wms.v1:intag'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01'
        , UseProxy: true
    }
    , kulvert_fk: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Kulvert'
        , Layer: 'fk.dagvattenkartan.wms.v1:kulvert'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01'
        , UseProxy: true
    }
    , vattendrag_fk: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Vattendrag'
        , Layer: 'fk.dagvattenkartan.wms.v1:vattendrag'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01'
        , UseProxy: true
    }
    , kommunagd_mark_markistest: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Kommunägd mark'
        , Layer: 'markistest:kommunagd_mark'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01 - Markistest'
        , UseProxy: true
    }
    , fas_fastighet_yta_markistest: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Fas fastighet yta'
        , Layer: 'markistest:fas_fastighet_yta'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01 - Markistest'
        , UseProxy: true
    }
    , fvk_markistest: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'Förvaltningskarta'
        , Layer: 'markistest:fvk'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01 - Markistest'
        , UseProxy: true
    }
    , tbl_search_markistest: {
        Url: 'http://sn200iw01.staden.gotheborg.net:8280/geoserver/wms'
        , Name: 'fvk'
        , Layer: 'markistest:tbl_search'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'SN200IW01 - Markistest'
        , UseProxy: true
    }
};