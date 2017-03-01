import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const defaultState = {
    topics: [],
    cities:[],
    count: 0,
    SpaceDtlData : {
        dtl:{
            img_paths :[],
            logo:''
        },
        same:''
    },
    ArticleDtlData:{
        dtl:{
            title:''
        },
        spaces:''
    },
    homeData:{
        space_storys : [],
        hot_sites : []
    },
    FindSite:{
        hotSites :[],
        typeSites : []
    },
    SiteList:{
        hot : [],
        selected : [],
        events : []
    },
    OpenShopData:{
        specials:[],
        topLists:[],
        recommendSpace:[],
        selectedCase:[]
    },
    IpData:{
        ipCase:[],
        ipProject:[],
        ipRecommend:[],
        ipType:[]
    },
    NewFoundData:{
        articles:[],
        articlesHot:[]
    },
    SiteDtlData:{
        dtl:{
            site_pictures:[]
        },
        spaces:'',
        relate_cases:'',
        relate_articles:''
    },
    EventHome:{
        band_events:'',
        industry_events:'',
        star_events:'',
    },
    EventList:{
        band_events:'',
        industry_events:'',
        star_events:'',
    },
    NewsList:{
        articles:'',
    },
    NewsHome:{
        articles:'',
        evaluates:'',
        selecteds:'',
        teachings:'',
        tops:'',
    },
    NewsDtl:{
        detail:'',
        relation_site:'',
        recommend_articles: [],
        hot_sites: [],
        next:'',
        pre:''
    },
    SiteEssence:'',

    loading : false,
    allTags : {},
    searchParameter : {
        site_type : ''
    },
    inquiryList :{},
    inquiryCount : 0
}

const inBrowser = typeof window !== 'undefined'

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {
    
    ALL_TAGS: (state, data) => {
        state.allTags = data
        state.cities = data.cities
    },

    HOME_DATA:(state, data)=>{
        state.homeData = data
    },
    
    FIND_SITE_DATA:(state, data)=>{
        state.FindSite.hotSites = data.hot_sites
        state.FindSite.typeSites = data.sites
    },

    SPACE_DTL_DATA:(state, data)=>{
        if(data.space.id){
            state.SpaceDtlData[data.space.id] = data.space
        }
        // state.SpaceDtlData = data.space
        // console.log(data.space)
        // state.SpaceDtlData.space = data.site_spaces
        // state.homeData.home_recommend_space = data.home_recommend_space
    },
    ARTICLE_DTL_DATA(state, data){
        state.ArticleDtlData.dtl = data.information
        state.ArticleDtlData.spaces = data.space
    },

    //场地列表页
    SITE_LIST_DATA(state, data){
        console.log(data)
        if( data.type == ''){
            state.SiteList.hot = data.sites
        }
        if( data.type == 'chosen'){
            state.SiteList.selected = data.sites
        }
        if( data.type == 'events'){
            state.SiteList.events = data.sites
        }
    },

    //场地详情
    SITE_DTL_DATA(state, data){
        state.SiteDtlData.dtl = data.site
        state.SiteDtlData.spaces = data.site_spaces
        // state.SiteDtlData.spaces = data.site_spaces
        state.SiteDtlData.relate_cases = data.relate_cases
        // state.SiteDtlData.relate_articles = data.relate_articles
    },

    //活动首页
    EVENT_HOME_DATA(state, data){
        state.EventHome.band_events = data.band_events
        state.EventHome.industry_events = data.industry_events
        state.EventHome.star_events = data.star_events
    },
    //活动列表
    EVENT_LIST_DATA(state, data){
        if(data.type == ''){
            state.EventList.band_events = data.evets_list
        }
        if(data.type == '行业案例'){
            state.EventList.industry_events = data.evets_list
        }
        if(data.type == '明星案例'){
            state.EventList.star_events = data.evets_list
        }

    },

    //资讯首页
    NEWS_HOME_DATA(state, data){
        state.NewsHome.articles = data.articles
        state.NewsHome.evaluates = data.evaluates
        state.NewsHome.selecteds = data.selecteds
        state.NewsHome.teachings = data.teachings
        state.NewsHome.tops = data.tops
    },

    //文章详情
    NEWS_DTL_DATA(state, data){
        state.NewsDtl.detail = data.detail
        state.NewsDtl.relation_site = data.relation_site
        state.NewsDtl.hot_sites = data.hot_sites
        state.NewsDtl.recommend_articles = data.recommend_articles
        state.NewsDtl.next = data.next
        state.NewsDtl.pre = data.pre
    },

    //资讯列表
    NEWS_LIST_DATA(state, data){
        state.NewsList.articles = data.articles
    },

    //场地精华
    SITE_SELECTED_DATA(state, data){
        state.SiteEssence = data.articles
    },

    //立即预定
    BOOKING_DATA(state,data){

        console.log(data,999)
    },

    LOADING(state,value){
        state.loading = value
    },
    
    SEARCH_PARAMETER(state,value){
        state.searchParameter = value
    },

    GET_INQUIRY_DATA(state,value){
        state.inquiryList =  LS.get('inquiry');
        state.inquiryCount = countProperties(state.inquiryList)
    },
    INQUIRY_DATA_CHANGE(state,value){ // 本地询价数据改变
        state.inquiryList =  LS.get('inquiry');
        if(!state.inquiryList){
            state.inquiryList = {}
        }
        if(typeof value === 'object'){
            if(value.op == 'add'){
                state.inquiryList[value.site.id] = state.inquiryList[value.site.id] || {}
                if(state.inquiryList[value.site.id]){
                    state.inquiryList[value.site.id] = value.site
                    if(value.type == 'space'){
                        state.inquiryList[value.site.id]['inquiry_space'] = state.inquiryList[value.site.id]['inquiry_space'] || []
                        state.inquiryList[value.site.id]['inquiry_space'][value.space.id] = value.space
                    }
                }
            }
        }
        state.inquiryCount = countProperties(state.inquiryList)
        console.log(state.inquiryCount,333)
        LS.set('inquiry',state.inquiryList)
        console.log(2222)
    }
}

function countProperties (obj) { // 计算对象长度
    var count = 0;
    for (var property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            count++;
        }
    }
    return count;
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
