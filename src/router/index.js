import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import SpaceDtl from '../components/space/dtl.vue'
import ArticleDtl from '../components/news/dtl.vue'
import Event from '../components/event/event.vue'
import Site from '../components/site/site.vue'
import SiteHome from '../components/site/home.vue'
import Activity from '../components/activity/activity.vue'
import SiteSearch from '../components/site/search.vue'


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/space/:id', component: SpaceDtl },
    { path: '/article/:id', component: ArticleDtl },
    { path: '/event', component: Event },
    { path: '/site/dtl/:id', component: Site },
    { path: '/activity', component: Activity },
    { path: '/site', component: SiteHome },
    { path: '/site/search', component: SiteSearch }
  ]
})
