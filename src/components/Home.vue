<template>

    <div class="home">

        <div class="home-banner-search">
            <!--搜索-->
            <div class="home-search clearfix">
                <div class="home-banner-wrap">
                    <div class="home-banner">
                        <img src="/static/images/home/banner.jpg">
                    </div>
                </div>
            </div>
        </div>
        <div class="w1200">

            <!--空间故事-->
            <div class="swiper-container module-one">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="" title>
                            <img src="/static/images/test/3to2.png" alt="">
                        </a>
                        <a href="">相遇1844·相约1892 瑞士劳芬设计名流派对</a>
                    </div>
                    <div class="swiper-slide">
                        <a href="" title>
                            <img src="/static/images/test/3to2.png" alt="">
                        </a>
                        <a href="">相遇1844·相约1892 瑞士劳芬设计名流派对</a>
                    </div>
                    <div class="swiper-slide">
                        <a href="" title>
                            <img src="/static/images/test/3to2.png" alt="">
                        </a>
                        <a href="">相遇1844·相约1892 瑞士劳芬设计名流派对</a>
                    </div>
                    <div class="swiper-slide">
                        <a href="" title>
                            <img src="/static/images/test/3to2.png" alt="">
                        </a>
                        <a href="">相遇1844·相约1892 瑞士劳芬设计名流派对</a>
                    </div>
                </div>
            </div>
            <!--/空间故事-->

            <!--推荐场地-->
            <div class="recommend-site">
                <div class="site-piece" v-for="item in reSites">
                    <a href="" title="">
                        <img src="/static/images/test/3to2.png" alt="">
                    </a>
                    <a href="">上海龙猫咖啡</a>
                    <p>云SPACE价:<span>￥30,000/天 起</span></p>
                    <p>云SPACE价:￥30,000/天 起</p>
                </div>
            </div>
            <!--/推荐场地-->

            <!--精选分类-->
                <div class="selection-classify">
                    <a class="selection-piece" v-for="item in selection">
                        <img src="/static/images/test/3to2.png" alt="">
                        <div class="name-des">
                            <p>秀场展馆</p>
                            <p>商业时尚的汇聚地及潮流风向标的起源地</p>
                        </div>
                    </a>
                </div>
            <!--/精选分类-->

            <!--媒体报道-开始-->
            <!--<div class="section logofriends clearfix">-->
                <!--<h3>合作品牌</h3>-->
                <!--<div class="cont">-->
                    <!--<img src="/static/images/test/3to2.png" alt="" />-->
                <!--</div>-->
            <!--</div>-->
        </div>

    </div>

</template>

<script>
    function fetchData(store) {
        return store.dispatch(`getHomeData`)
    }
    import {mapGetters} from 'vuex'
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
                reSites:[1,2,3,4,5,6,7,8],
                selection:[1,2,3,4,5,6]
            }
        },
        mounted () {
            var self = this
            this.$store.commit('LOADING', false)
            setTimeout(function () {
                var citySelectionSwiper = new Swiper('.module-one', {
//                nextButton: '.citysubject .btnright',
//                prevButton: '.citysubject .btnleft',
                    loop : true,
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 12,
                    autoplay: 3000
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
            spaceRecommend(){
                return this.$store.state.homeData.home_recommend_space
            },
            newFindTopFour(){
                return this.$store.state.homeData.home_new_find_top
            },
            newFindRandom(){
                return this.$store.state.homeData.home_new_find_random
            },
            caseSelected(){
                return this.$store.state.homeData.home_case_selected
            },
            mediaReport(){
                return this.$store.state.homeData.home_media
            }
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
<style>
    .home-banner-search{
        height: 340px;
        position: relative;
    }
    .home-banner{
        width: 1920px;
        height: 340px;
        position: absolute;
        left: 50%;
        margin-left: -960px;
        top: 0;
        overflow: hidden;
        z-index: 1;
    }
    .module-one a{
        display: block;
    }
    .module-one .swiper-slide{
        float: left;
        width: auto;
    }
    .recommend-site{
        margin-right: -21px;
    }
    .site-piece{
        float: left;
        width: 284px;
        margin-right: 21px;
    }
    .site-piece img,.selection-piece img{
        width: 100%;
        display: block;
    }
    .selection-classify{
        margin-right: -18px;
    }
    .selection-piece{
        width: 388px;
        float: left;
        margin-right: 18px;
        margin-bottom: 18px;
        position: relative;
        display: block;
        position: relative;
    }
    .name-des{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 14px 15px;
        background: rgba(0,0,0,0.40);
    }
    .name-des p{
        color: #fff;
    }
    .name-des p:nth-child(1){
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 6px;
    }
    .name-des p:nth-child(2){
        font-size: 12px;
        line-height: 12px;
        color: #CCC;
    }
</style>