 
GotMapEngine.SBKWmsLayerDefinitions = {
	
     Orto_Latest: {
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
    
};