<template>

    <div class="yunshow">
        <!--标题-->
        <div class="yun-topbar">
            <div class="w1170 clearfix">
                <div class="fl yun-about clearfix">
                    <div class="fl img logo">
                        <img src="">
                    </div>
                    <div class="fl text">
                        <h1>YUNSHOW</h1>
                        <p>关于这个产品线的简短描述...</p>
                    </div>
                </div>

                <div class="fr yun-breadCrumb">
                    <a href="javascript:;" class="black">首页</a>
                    <span class="icon-icon_moreArrowRight"></span>
                    <a href="javascript:;">YUNPLAY</a>
                </div>
            </div>
        </div>

        <div class="w1170 clearfix">
            <div class="banner swiper-site-dtl-banner yunshow-banner mt50">
                <div class="swiper-container banner-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide clearfix" v-for="item in 8">
                            <img class="fl imgload" src="图片">
                            <div class="fr text">
                                <h2>你不孤单:奈良美智作品体验展7月盛放盛放魔都</h2>
                                <div class="title-bar clearfix">
                                    <i class="icon-icon_articleGoodLine"></i>666
                                    <span class="dian">·</span>
                                    展览展示
                                    <span class="dian">·</span>
                                    时尚行业
                                </div>

                                <!-- 如果需要分页器 -->
                                <div class="swiper-pagination"></div>

                                <p>还没正式入冬，早已被告知今年又即将迎来“史上”最冷寒冬。全国普遍比往年提前10天入冬，似乎印证了这个传言。为了让大家过个保暖又舒适的寒冬还没正式入冬，早已被告知今年又即将迎来“史上”最冷</p>
                                <div class="handle clearfix">
                                    <i class="fl icon-icon_articleCollectLine"></i>
                                    <i class="fr icon-icon_articleGoodLine"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 如果需要导航按钮 -->
                <span class="arrow-left arrow"><i class="icon icon-icon_moreArrowRight"></i></span>
                <span class="arrow-right arrow"><i class="icon icon-icon_moreArrowRight"></i></span>
            </div>
            <!--banner-end-->

            <div class="fl similar-site itembox mt50">
                <div class="title clearfix">
                    <h2 class="fl">相似场地</h2>
                    <ul class="fr tab-menu clearfix">
                        <li class="current">自营场地</li>
                        <li>核心场地</li>
                        <li>普通场地</li>
                    </ul>
                </div>

                <div class="tab-box">
                    <div class="cont clearfix current">
                        <div class="box site-piece" v-for="item in 6">
                            <router-link to="/" class="img" title="">
                                <img src="" alt="">
                            </router-link>
                            <div class="tag">餐厅酒吧<i class="jiao"></i></div>
                            <div class="des">
                                <router-link to="/" class="h-title">上海龙猫咖啡</router-link>
                                <p class="p1">云SPACE价:<span>￥30,000/天 起</span></p>
                                <p class="p2">市场价: ￥40000/天</p>
                            </div>
                            <div class="other">
                                <span>
                                    <i class="icon icon-icon_spaceBusiness"></i>徐家汇
                                    <i class="boder-left-line"></i>
                                </span>
                                <span><i class="icon icon-icon_spacePeople"></i>500人</span>
                            </div>
                        </div>
                        <div class="more">没有更多了 T T</div>
                    </div>

                    <div class="cont clearfix">
                        <div class="box site-piece" v-for="item in 6">
                            <router-link to="/" title="">
                                <img src="" alt="">
                            </router-link>
                            <div class="des">
                                <router-link to="/" class="title">上海龙猫咖啡</router-link>
                                <p class="p1">云SPACE价:<span>￥30,000/天 起</span></p>
                                <p>市场价: ￥40000/天</p>
                            </div>
                            <div class="other">
                                <span>
                                    <i class="icon icon-icon_spaceBusiness"></i>徐家汇
                                    <i class="boder-left-line"></i>
                                </span>
                                <span><i class="icon icon-icon_spacePeople"></i>500人</span>
                            </div>
                        </div>
                        <div class="more">没有更多了 T T</div>
                    </div>

                    <div class="cont clearfix">
                        <div class="box site-piece" v-for="item in 6">
                            <router-link to="/" title="">
                                <img src="" alt="">
                            </router-link>
                            <div class="des">
                                <router-link to="/" class="title">上海龙猫咖啡</router-link>
                                <p class="p1">云SPACE价:<span>￥30,000/天 起</span></p>
                                <p>市场价: ￥40000/天</p>
                            </div>
                            <div class="other">
                                <span>
                                    <i class="icon icon-icon_spaceBusiness"></i>徐家汇
                                    <i class="boder-left-line"></i>
                                </span>
                                <span><i class="icon icon-icon_spacePeople"></i>500人</span>
                            </div>
                        </div>
                        <div class="more">没有更多了 T T</div>
                    </div>
                </div>
            </div>

            <div class="fr revolve-service mt50">
                <h2>涉及服务</h2>
                <ul class="clearfix">
                    <li v-for="item in 13">
                        <i class="icon-icon_serveStage"></i>
                        <p>场地搭建</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
    function fetchData(store) {
//        return store.dispatch(`getHomeData`,{
//            cityId : store.state.route.query.city_id
//        })
    }

    export default {
        data() {
            return {

            }
        },
        components: {

        },
        mounted () {
            var self = this
            this.$store.commit('LOADING', false)
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

        },
        mounted () {
            var self = this;
            self.$store.commit('LOADING', false)

            var swiper = new Swiper('.banner-swiper', {
                nextButton: '.arrow-right',
                prevButton: '.arrow-left',
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                paginationHide:true,
                autoplay: 3500
            });

            //tab切换
            $('.itembox .tab-menu li').each(function (index) {
                var thisa = $(this);
                thisa.click(function () {
                    $('.itembox .tab-menu li').removeClass('current');
                    $('.itembox .tab-box .cont').removeClass('current');
                    thisa.addClass('current');
                    $('.itembox .tab-box .cont').eq(index).addClass('current');
                })
            });

        },

        preFetch: fetchData,
        beforeMount () {
        }

    }
</script>
<style lang="sass" scoped>
    @import "../../assets/scss/yunshow.scss";
</style>