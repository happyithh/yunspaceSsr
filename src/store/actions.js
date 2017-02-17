import request from 'axios'
import {YUNAPI} from '../api'


request.defaults.headers = {'Access-Control-Allow-Origin':'*'}


export const getAllTags = ({ commit, state }) => {
    return request.get('http://api.yunspace.com.cn/api/tags/all_tags.json').then((response) => {
        if (response.statusText === 'OK') {
            commit('ALL_TAGS', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}

//首页数据获取
export const getHomeData = ({ commit, state },{cityId}) => {
    return request.get(YUNAPI.home,{
        params:{
            city_id:cityId || 1
        }
    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('HOME_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}
//找场地首页数据
export const getFindSiteData = ({ commit, state }) => {
    return request.get(YUNAPI.findSite,{
        params:{
            city_id:1
        }
    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('FIND_SITE_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}
//找场地详情
export const getSiteDtlData = ({ commit, state },{id}) => {
    return request.get(YUNAPI.siteDtl + id + '.json',{
    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('SITE_DTL_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}
//找场地列表
export const getSiteListData = ({ commit, state },{type}) => {
    return request.get(YUNAPI.sitesList,{
        params:{
            type:type
        }
    }).then((response) => {
        if (response.statusText === 'OK') {
            response.data.type = type
            commit('SITE_LIST_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}
// 空间详情数据
export const getSpaceDtlData = ({ commit, state },{id}) => {
    return request.get(YUNAPI.spaceDtl + '/' + id + '.json',{

    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('SPACE_DTL_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}
// 文章详情数据
export const getArticleDtlData = ({ commit, state },{id}) => {
    return request.get(YUNAPI.articleDtl + '/' + id + '.json',{

    }).then((response) => {
        if (response.statusText === 'OK') {

            commit('ARTICLE_DTL_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}

//办活动首页
export const getEventHomeData = ({ commit, state }) => {
    return request.get(YUNAPI.eventHome+'.json',{

    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('EVENT_HOME_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}
//办活动列表页
export const getEventListData = ({ commit, state },{type}) => {
    return request.get(YUNAPI.eventList+'.json',{
        params:{
            type:type
        }
    }).then((response) => {
        if (response.statusText === 'OK') {
            response.data.type = type
            commit('EVENT_LIST_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}
//资讯首页
export const getNewsHomeData = ({ commit, state }) => {
    return request.get(YUNAPI.newsHome+'.json',{

    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('NEWS_HOME_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}
//文章详情
export const getNewsData = ({ commit, state }) => {
    return request.post(YUNAPI.newsHome+'.json',{

    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('NEWS_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}

//资讯列表
export const getNewsListData = ({ commit, state },{type}) => {
    return request.get(YUNAPI.newsList + '.json', {
        params:{
            type:type
        }
    }).then((response) => {
        if (response.statusText === 'OK') {
            response.data.type = type
            commit('NEWS_LIST_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}
//场地精华
export const getSiteSelectedData = ({ commit, state }) => {
    return request.get(YUNAPI.siteSelected+'.json',{

    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('SITE_SELECTED_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}
//立即预定
export const getBookingData = ({ commit, state }) => {
    return request.get(YUNAPI.booking+'.json',{

    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('BOOKING_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}

//要新发现首页
export const getNewFoundData = ({ commit, state }) => {
    request.get(YUNAPI.articleHot+'.json',{ // 获取热门文章
    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('NEWFOUND_DATA_HOT', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })

    return request.get(YUNAPI.article+'.json',{//文章列表
    }).then((response) => {
        if (response.statusText === 'OK') {
            commit('NEWFOUND_DATA', response.data)
        }
    }).catch((error) => {
        console.log(error)
    })
}

// export const loading = (state,value)=>{
//     state.loading = value
// }

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
