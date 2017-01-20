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
        home_recommend_space : []
    },
    EventHome:{
        banners:[],
        subjects:[],
        venues:[],
        discounts:[],
        eventcases:[],
        toplists:[]
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
        dtl:'',
        spaces:'',
        relate_topics:'',
        relate_articles:''
    },
    loading : false,
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
        state.homeData.home_recommend_space = data.home_recommend_space
    },

    SPACE_DTL_DATA:(state, data)=>{
        state.SpaceDtlData.dtl = data.space
        // state.homeData.home_recommend_space = data.home_recommend_space
    },
    ARTICLE_DTL_DATA(state, data){
        state.ArticleDtlData.dtl = data.information
        state.ArticleDtlData.spaces = data.space
    },
    SITE_DTL_DATA(state, data){
        state.SiteDtlData.dtl = data.site
        state.SiteDtlData.spaces = data.site_spaces
        state.SiteDtlData.relate_topics = data.relate_topics
        state.SiteDtlData.relate_articles = data.relate_articles
    },
    EVENT_HOME_DATA(state, data){
        
    },

    LOADING(state,value){
        state.loading = value
    },
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
