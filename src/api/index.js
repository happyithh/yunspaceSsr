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
    // spaceDtl : host + 'api/spaces',
    // articleDtl : host + 'api/informations',
    eventHome : host + 'events',
    eventList : host + 'events/list',
    newsList : host + 'articles/list',
    newsHome : host + 'articles',
    siteSelected : host + 'articles/get_site_selected',
    submitOnekeyDemand : host + 'onekey_demands/',
    // openShop : host + 'api/informations/get_retail',
    booking : host + 'booking_demands',
    // findIp : host + 'api/projects/ip_project',
    // article : host + 'api/informations',
    // articleHot : host  + 'api/informations/get_hot_recommend',
    // siteDtl : host + 'api/sites'
}