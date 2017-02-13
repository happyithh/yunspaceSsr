import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import SpaceDtl from '../components/space/dtl.vue'
import ArticleDtl from '../components/news/dtl.vue'
import Event from '../components/event/event.vue'
import SiteHome from '../components/site/home.vue'
import SiteHot from '../components/site/hot.vue'
import SiteHotActivity from '../components/site/hot-activity.vue'
import SiteSelected from '../components/site/selected.vue'
import RentalSite from '../components/form/rental-site.vue'
import InquiryList from '../components/inquiry/inquiry-list.vue'
import Success from '../components/inquiry/success.vue'
import Activity from '../components/activity/home.vue'
import ActivityList from '../components/activity/list.vue'
import ActivityDtl from '../components/activity/dtl.vue'
import ActivitySupporting from '../components/activity/supporting.vue'
import SiteSearch from '../components/site/search.vue'
import NotFound from '../components/404.vue'
import Site from '../components/site/dtl.vue'
import Reserve from '../components/form/reserve.vue'
import News from '../components/news/home.vue'
import Map from '../components/map/home.vue'
import NewsList from '../components/news/list.vue'
import NewsSite from '../components/news/site-essence.vue'


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/space/:id', component: SpaceDtl },
    { path: '/article/:id', component: ArticleDtl },
    { path: '/event', component: Event },
    { path: '/site/dtl/:id', component: Site },
    { path: '/site', component: SiteHome },
    { path: '/site/hot', component: SiteHot },
    { path: '/site/activity', component: SiteHotActivity },
    { path: '/site/selected', component: SiteSelected },
    { path: '/form/rental', component: RentalSite },
    { path: '/inquiry', component: InquiryList },
    { path: '/success', component: Success },
    { path: '/activity', component: Activity },
    { path: '/activity/list', component: ActivityList },
    { path: '/activity/dtl/:id', component: ActivityDtl },
    { path: '/activity/supporting', component: ActivitySupporting },
    { path: '/site/search', component: SiteSearch },
    { path: '/site/reserve', component: Reserve },
    { path: '/news', component: News },
    { path: '/map', component: Map },
    { path: '/news/list', component: NewsList },
    { path: '/news/site', component: NewsSite },
    { path: '*', component: NotFound },
  ]
})
