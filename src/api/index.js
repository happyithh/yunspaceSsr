// const host = "http://api.yunspace.com.cn/";
// const host = "http://192.168.0.145/api_v2/";
const host = "http://172.16.0.145/api_v2/";
// const host = "http://172.16.0.180:3000/api_v2/";
export const YUNAPI = {
    host: host,
    home : host + 'index.json',
    findSite : host + 'sites.json',
    siteDtl : host + 'sites/',
    sitesList : host + 'sites/list.json',
    spaceDtl : 'http://api.yunspace.com.cn/' + 'api/spaces/detail.json',
    // articleDtl : host + 'api/informations',
    eventHome : host + 'events',
    eventList : host + 'events/list',
    newsList : host + 'articles/list',
    newsHome : host + 'articles',
    newsDtl : host + 'articles/info',
    siteSelected : host + 'articles/get_site_selected',
    submitOnekeyDemand : host + 'onekey_demands/',
    // openShop : host + 'api/informations/get_retail',
    booking : host + 'booking_demands',
    sendPhoneCode : 'http://api.yunspace.com.cn/' + 'api/auth_codes/send_code',
    siteSearch : host + 'sites/search.json',
    scenes : host + 'scenes',
    scenesDtl : host + 'scenes/1',
    // articleHot : host  + 'api/informations/get_hot_recommend',
    // siteDtl : host + 'api/sites'
}