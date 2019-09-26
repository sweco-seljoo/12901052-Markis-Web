 
GotMapEngine.FKWmsLayerDefinitions = {

     // Add temporarily testlayers HERE

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

    // Cut and paste from Index
    , kommunagd_mark_sn200 = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Kommunägd mark'
        , Layer: 'fk.kommunagd-mark.wms.v1:kommunagd-mark'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Fastighetskontoret - sn200'
        , UseProxy: true
    }

    , tomtratt_sn200 = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Tomträtt'
        , Layer: 'fk.tomtratt.wms.v1:tomtratt'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Fastighetskontoret - sn200'
        , UseProxy: true
    }
    , detaljplan_mark_sn200 = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Detaljplan mark'
        , Layer: 'fk.detaljplan-mark.wms.v1:detaljplan-mark'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Fastighetskontoret - sn200'
        , UseProxy: true
    }

    , forvaltningskartan_sn200 = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Förvaltningskartan'
        , Layer: 'fk.forvaltningskartan.wms.v1:fvk'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Fastighetskontoret - sn200'
        , UseProxy: true
    }

    , befintlig_bmss_sn200 = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Befintlig BmSS'
        , Layer: 'fk.bmss.wms.v1:befintlig'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Fastighetskontoret - sn200'
        , UseProxy: true
    }

    , forvaltningskartan_niva_sn200 = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Förvaltningskartan nivå'
        , Layer: 'fk.forvaltningskartan.wms.v1:fvk_niva'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Fastighetskontoret - sn200'
        , UseProxy: true
    };

    var intag_sn200 = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Intag'
        , Layer: 'fk.dagvattenkartan.wms.v1:intag'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Fastighetskontoret - sn200'
        , UseProxy: true
    };

    var kulvert_sn200 = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Kulvert'
        , Layer: 'fk.dagvattenkartan.wms.v1:kulvert'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Fastighetskontoret - sn200'
        , UseProxy: true
    };

    var vattendrag_sn200 = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Vattendrag'
        , Layer: 'fk.dagvattenkartan.wms.v1:vattendrag'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Fastighetskontoret - sn200'
        , UseProxy: true
    };
    var kommunagd_mark_markistest = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Tomträtt'
        , Layer: 'markistest:tomtratt'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Egen data - sn200'
        , UseProxy: true
    };

    var fas_fastighet_yta_markistest = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'Fas fastighet yta'
        , Layer: 'markistest:fas_fastighet_yta'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Egen data - sn200'
        , UseProxy: true
    };

    var fvk_markistest = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'fvk'
        , Layer: 'markistest:fvk'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Egen data - sn200'
        , UseProxy: true
    };

    var tbl_search_markistest = {
        Url: 'http://markisgs.northeurope.cloudapp.azure.com:8080/geoserver/wms'
        , Name: 'fvk'
        , Layer: 'markistest:tbl_search'
        , Styles: undefined
        , Format: 'image/png'
        , Transparent: true
        , Queryable: true
        , GroupName: 'Egen data - sn200'
        , UseProxy: true
    };
};