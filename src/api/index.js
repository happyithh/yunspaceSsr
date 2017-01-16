const host = "http://api.yunspace.com.cn/";
// const host = "http://172.16.0.141:3000/";
export const YUNAPI = {
    host: host,
    home : host + 'api/index.json',
    spaceDtl : host + 'api/spaces',
    articleDtl : host + 'api/informations',
    event : host + 'api/activities',
    openShop : host + 'api/informations/get_retail',
    findIp : host + 'api/projects/ip_project',
    article : host + 'api/informations',
    articleHot : host  + 'api/informations/get_hot_recommend',
    siteDtl : host + 'api/sites'
}