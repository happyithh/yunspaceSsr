<template>

    <div class="home">

        <div class="home-banner-search">
            <!--搜索-->
            <div class="banner-tip font-thin">简单而直接的方式</div>
            <div class="home-search-bar">
                <search-bar></search-bar>
            </div>
        </div>
        <div class="w1200">

            <!--YUNSHOW-->
            <ul class="yunshow mt50 clearfix">
                <li>
                    <a href="/scenes/YUNSHOW">
                        <img src="/static/images/yunshow/img_productShow.png" alt="show">
                        <p>秀<br/><span>SHOW</span></p>
                        <div class="mask"></div>
                    </a>
                </li>
                <li>
                    <a href="/scenes/ROADSHOW">
                        <img src="/static/images/yunshow/img_productRDshow.png" alt="路演">
                        <p>路演<br/><span>ROADSHOW</span></p>
                        <div class="mask"></div>
                    </a>
                </li>
                <li>
                    <a href="/scenes/POPUP">
                        <img src="/static/images/yunshow/img_productPopup.png" alt="快闪店">
                        <p>快闪店<br/><span>POPUP</span></p>
                        <div class="mask"></div>
                    </a>
                </li>
                <li>
                    <a href="/scenes/SPORT">
                        <img src="/static/images/yunshow/img_productSport.png" alt="体育">
                        <p>体育<br/><span>SPORT</span></p>
                        <div class="mask"></div>
                    </a>
                </li>
                <li>
                    <a href="/scenes/PLAY">
                        <img src="/static/images/yunshow/img_productPlay.png" alt="演艺">
                        <p>演艺<br/><span>PLAY</span></p>
                        <div class="mask"></div>
                    </a>
                </li>
                <li>
                    <a href="/scenes/MARKET">
                        <img src="/static/images/yunshow/img_productMarket.png" alt="yunshow">
                        <p>市集<br/><span>MARKET</span></p>
                        <div class="mask"></div>
                    </a>
                </li>
                <li>
                    <a href="/scenes/1">
                        <img src="/static/images/yunshow/img_productGallery.png" alt="展览">
                        <p>展览<br/><span>GALLERY</span></p>
                        <div class="mask"></div>
                    </a>
                </li>
                <li>
                    <a href="/scenes/1">
                        <img src="/static/images/yunshow/img_productParty.png" alt="派对">
                        <p>派对<br/><span>PARTY</span></p>
                        <div class="mask"></div>
                    </a>
                </li>
            </ul>

            <!--空间故事-->
            <!--<div class="mt50">-->
                <!--<div class="item-title clearfix">-->
                    <!--<h2><span class="redline"></span>空间故事</h2>-->
                    <!--<div class="keywords">-->
                        <!--<a href="">策划执行</a>-->
                        <!--<a href="">趣味年会</a>-->
                        <!--<a href="">闪店攻略</a>-->
                    <!--</div>-->
                    <!--<a class="more" href="">更多 <i class="icon icon-icon_moreArrowRight"></i></a>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="swiper-side-arrow">-->
                <!--<div class="swiper-container module-one">-->
                    <!--<div class="swiper-wrapper">-->
                        <!--<div class="swiper-slide"  v-for="item in spaceStorys">-->
                            <!--<a href="" title class="main-img">-->
                                <!--<img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" alt="">-->
                                <!--<p class="add"><i class="icon icon-icon_typeSpace"></i><span v-html="item.space_title"></span></p>-->
                            <!--</a>-->
                            <!--<a href="" class="title" v-html="item.title"></a>-->
                            <!--<span class="other"><i class="icon icon-icon_articleGoodLine"></i>{{item.up_number}} · {{item.brand}} · {{item.activity_type}}</span>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<span class="arrow-left arrow"><i class="icon icon-icon_switchArrowLeft"></i></span>-->
                <!--<span class="arrow-right arrow"><i class="icon icon-icon_switchArrowRight"></i></span>-->
            <!--</div>-->

            <!--/空间故事-->

            <!--推荐场地-->
            <div class="mt50">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>热推场地</h2>
                    <div class="keywords">
                        <a href="">策划执行</a>
                        <a href="">趣味年会</a>
                        <a href="">闪店攻略</a>
                    </div>
                    <a class="more" href="">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>
            </div>
            <div class="recommend-site clearfix">
                <div class="site-piece" v-for="item in hotSites">
                    <router-link :to="'/site/dtl/'+item.id" title="">
                        <img :src="item.site_pictures.length > 0 ? item.site_pictures[0]['url_400_267'] : ''" alt="">
                    </router-link>
                    <div class="des">
                        <router-link :to="'/site/dtl/'+item.id" class="title" v-html="item.title"></router-link>
                        <p class="p1">云SPACE价:<span>{{item.special_price}}</span></p>
                        <p>市场价: {{item.market_price}}</p>
                    </div>
                    <div class="other">
                        <span>
                            <i class="icon icon-icon_spaceBusiness"></i>{{item.district}}
                            <i class="boder-left-line"></i>
                        </span>
                        <span><i class="icon icon-icon_spacePeople"></i>{{item.max_people}}人</span>
                    </div>
                </div>
            </div>
            <!--/推荐场地-->

            <!--广告1-->
            <div class="ad-one mt50 clearfix">
                <a class="ad-piece">
                    <img src="" alt="">
                </a>
                <a class="ad-piece">
                    <img src="" alt="">
                </a>
            </div>
            <!--/广告1-->

            <!--精选分类-->
            <div class="mt50">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>精选分类</h2>
                    <a class="more" href="">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>
            </div>
                <div class="selection-classify clearfix">
                    <a class="selection-piece">
                        <img src="/static/images/home/img_typeArea_xczg.jpg" alt="秀场展馆">
                        <div class="name-des">
                            <p>秀场展馆</p>
                            <p>商业时尚的汇聚地及潮流风向标的起源地</p>
                        </div>
                    </a>
                    <a class="selection-piece">
                        <img src="/static/images/home/img_typeArea_tscd.jpg" alt="特色场地">
                        <div class="name-des">
                            <p>特色场地</p>
                            <p>时尚个性，不甘于常规，独具韵味的文化特色空间</p>
                        </div>
                    </a>
                    <a class="selection-piece">
                        <img src="/static/images/home/img_typeArea_sygc.jpg" alt="商业广场">
                        <div class="name-des">
                            <p>商业广场</p>
                            <p>品牌供应商的汇聚地，实现各类大型室内外活动</p>
                        </div>
                    </a>
                    <a class="selection-piece">
                        <img src="/static/images/home/img_typeArea_yyjy.jpg" alt="影业剧院">
                        <div class="name-des">
                            <p>影业剧院</p>
                            <p>独一无二的震撼感、环境优雅、逼格实足</p>
                        </div>
                    </a>
                    <a class="selection-piece">
                        <img src="/static/images/home/img_typeArea_gdhs.jpg" alt="高端会所">
                        <div class="name-des">
                            <p>高端会所</p>
                            <p>轻奢、舒适、得天独厚、私密高端的主题空间</p>
                        </div>
                    </a>
                    <a class="selection-piece">
                        <img src="/static/images/home/img_typeArea_hwzx.jpg" alt="会务中心">
                        <div class="name-des">
                            <p>会务中心</p>
                            <p>千人会场、占据最佳地理位置</p>
                        </div>
                    </a>
                </div>
            <!--/精选分类-->

            <!--广告条-->
            <a href="" class="ad-two mt50">
                <img src="" alt="">
            </a>
            <!--/广告条-->

            <!--资讯报道-->
            <div class="mt50">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>资讯报道</h2>
                    <a class="more" href="">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>
            </div>
            <div class="media-re clearfix">
                <div class="media-left clearfix">
                    <router-link :to="'/article/'+item.id" title="" class="media-piece" v-for="(item,index) in mediaReport" v-if="index < 2">
                        <img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" alt="">
                        <div class="des">
                            <p v-html="item.title"></p>
                            <p>{{item.i_time}}</p>
                        </div>
                    </router-link>
                    <!--<a href="" title="" class="media-piece">-->
                        <!--<img src="/static/images/test/3to2.png" alt="">-->
                        <!--<div class="des">-->
                            <!--<p>商业时尚的汇聚地及潮流风向标的起源地</p>-->
                            <!--<p>2016-10-24</p>-->
                        <!--</div>-->
                    <!--</a>-->
                </div>
                <div class="media-right">
                    <ul>
                        <li v-for="(item,index) in mediaReport" v-if="index >= 2 && index < 10">
                            <!--<a href="">-->
                                <!--<span>【搭建课堂】《华胥引》电影命名《鲛珠传》 打造IP六联动</span>-->
                                <!--<span class="time">2016-10-24</span>-->
                                <!--<div class="border-line"></div>-->
                            <!--</a>-->
                            <router-link :to="'/article/'+item.id">
                                <span v-html="item.title"></span>
                                <span class="time">{{item.i_time}}</span>
                                <div class="border-line"></div>
                            </router-link>

                        </li>
                    </ul>
                </div>
            </div>
            <!--/资讯报道-->
        </div>

        <div class="fixed-nav">
            <a href=""><i class="icon icon-icon_leftbarQR"></i></a>
            <a href=""><i class="icon icon-icon_leftbarServe"></i></a>
            <a href=""><i class="icon icon-icon_leftbarOnline"></i></a>
            <a href=""><i class="icon icon-icon_leftbarBacktop"></i></a>
        </div>

    </div>

</template>

<script>
    function fetchData(store) {
        return store.dispatch(`getHomeData`,{
            cityId : store.state.route.query.city_id
        })
    }
    import {mapGetters} from 'vuex'
    import SearchBar from './public/search-bar.vue'
    export default {
        data() {
            const isInitialRender = !this.$root._isMounted
            return {
                city_id : '',
                homeSearchCondition : {
                    city_id : 1,
                    project_type : '',
                    doWhat : '',
                    q : {
                        site_site_type_eq : '',
                        keyword : '',
                        preKeyword : ''
                    }
                },
            }
        },
        components: {
            SearchBar
        },
        mounted () {
            var self = this
            this.$store.commit('LOADING', false)
            setTimeout(function () {
                var citySelectionSwiper = new Swiper('.module-one', {
                    nextButton: '.swiper-side-arrow .arrow-right',
                    prevButton: '.swiper-side-arrow .arrow-left',
                    loop : true,
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 18,
                    autoplay: 3500
                });
            })
        },
        metaInfo: {
            title: '【云SPACE－商业空间短租平台】提供全国活动场地_发布会场地_场地租赁_活动资讯_找场地上云SPACE',
            // override the parent template and just use the above title only
            titleTemplate: null,
            meta: [
                { charset: 'utf-8' },
                { name: 'keywords', content: '快闪店,商业空间,场地,活动场地,北京活动场地,上海活动场地,场地租赁,会议场地,上海会议场地,年会场地' },
                { name: 'description', content: `云SPACE是专业的活动场地预订、租赁平台。为您提供上海、北京、广州、深圳、成都、杭州、南京、
                苏州等一二线城市活动场地,年会场地,购物中心,秀场,商场,loft空间,适合开办特卖,试乘试驾,走秀,
                高级定制,沙龙,集客等活动的特价活动空间。举办路演、推广活动、发布会选址是关键.一键直达,专业的服务,精准的报价,轻松搞定` },
            ]
        },
        computed: {
            cities (){
                return this.$store.state.cities
            },
            allTags(){
                return this.$store.state.allTags
            },
            homeData(){
                return this.$store.state.homeData
            },
            spaceStorys(){
                return this.$store.state.homeData.space_storys
            },
            hotSites(){
                return this.$store.state.homeData.hot_sites
            },
            mediaReport(){
                return this.$store.state.homeData.media
            },
        },
        methods: {
            homeDoSearch(){}
        },

        preFetch: fetchData,
        beforeMount () {
            fetchData(this.$store)
        }

    }
</script>
<style lang="sass" scoped>
    @import "../assets/scss/home.scss";
</style>