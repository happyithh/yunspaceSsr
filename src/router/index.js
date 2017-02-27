import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import ArticleDtl from '../components/news/dtl.vue'
import SiteHome from '../components/site/home.vue'
import SiteHot from '../components/site/hot.vue'
import SiteHotActivity from '../components/site/hot-activity.vue'
import SiteSelected from '../components/site/selected.vue'
import RentalSite from '../components/form/rental-site.vue'
import InquiryList from '../components/inquiry/inquiry-list.vue'
import Success from '../components/inquiry/success.vue'
import Activity from '../components/activity/home.vue'
import ActivityBandList from '../components/activity/band-list.vue'
import ActivityIndustryList from '../components/activity/industry-list.vue'
import ActivityStarList from '../components/activity/star-list.vue'
import ActivitySupporting from '../components/activity/supporting.vue'
import SiteSearch from '../components/site/search.vue'
import NotFound from '../components/404.vue'
import Site from '../components/site/dtl.vue'
import Booking from '../components/form/booking.vue'
import News from '../components/news/home.vue'
import Map from '../components/map/home.vue'
import NewsList1 from '../components/news/list1.vue'
import NewsList2 from '../components/news/list2.vue'
import NewsList3 from '../components/news/list3.vue'
import NewsList4 from '../components/news/list4.vue'
import NewsSite from '../components/news/site-essence.vue'
import YunShow from '../components/yunshow/home.vue'
import YunShowDtl from '../components/yunshow/dtl.vue'
// 个人中心
import perHome from '../components/personal/app.vue'



export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/article/:id', component: ArticleDtl },
    { path: '/site/dtl/:id', component: Site },
    { path: '/site', component: SiteHome },
    { path: '/site/hot', component: SiteHot },
    { path: '/site/activity', component: SiteHotActivity },
    { path: '/site/selected', component: SiteSelected },
    { path: '/form/rent', component: RentalSite },
    { path: '/inquiry', component: InquiryList },
    { path: '/form/success', component: Success },
    { path: '/activity', component: Activity },
    { path: '/activity/band', component: ActivityBandList },
    { path: '/activity/industry', component: ActivityIndustryList },
    { path: '/activity/star', component: ActivityStarList },
    { path: '/activity/supporting', component: ActivitySupporting },
    { path: '/site/search', component: SiteSearch },
    { path: '/booking', component: Booking },
    { path: '/news', component: News },
    { path: '/map', component: Map },
    { path: '/news/list1', component: NewsList1 },
    { path: '/news/list2', component: NewsList2 },
    { path: '/news/list3', component: NewsList3 },
    { path: '/news/list4', component: NewsList4 },
    { path: '/news/site', component: NewsSite },
    { path: '/yunshow', component: YunShow },
    { path: '/yunshow/dtl/:id', component: YunShowDtl },
      //个人中心
    { path: '/personal', component: perHome },

    { path: '*', component: NotFound },
  ]
})
