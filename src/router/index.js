import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import SpaceDtl from '../components/space/dtl.vue'
import ArticleDtl from '../components/new-found/article-dtl.vue'
import Event from '../components/event/event.vue'
import OpesShop from '../components/openshop/openshop.vue'
import Site from '../components/site/site.vue'


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/space/:id', component: SpaceDtl },
    { path: '/article/:id', component: ArticleDtl },
    { path: '/event', component: Event },
    { path: '/openshop', component: OpesShop },
    { path: '/site/:id', component: Site },
  ]
})
