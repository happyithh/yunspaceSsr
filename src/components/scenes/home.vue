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
                        <h1>{{yuntitle.title}}</h1>
                        <p>{{yuntitle.des}}</p>
                    </div>
                </div>

                <div class="fr yun-breadCrumb">
                    <a href="javascript:;" class="black">首页</a>
                    <span class="icon-icon_moreArrowRight"></span>
                    <a href="javascript:;">{{yuntitle.title}}</a>
                </div>
            </div>
        </div>

        <div class="w1170 itembox yunshow-box">
            <ul class="tab-menu clearfix">
                <li v-for="item in yunsub">
                    <img :src="item.logo.url">
                    <h2>{{item.name}}</h2>
                    <div class="icon-arrow"></div>
                    <div class="mask"></div>
                </li>
                <!--<li class="current">-->
                    <!--<img src="/static/images/yunshow/img_showGame.jpg">-->
                    <!--<h2>游戏</h2>-->
                    <!--<div class="icon-arrow"></div>-->
                    <!--<div class="mask"></div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="/static/images/yunshow/img_showGoods.jpg">-->
                    <!--<h2>快销</h2>-->
                    <!--<div class="icon-arrow"></div>-->
                    <!--<div class="mask"></div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="/static/images/yunshow/img_showTechnology.jpg">-->
                    <!--<h2>科技</h2>-->
                    <!--<div class="icon-arrow"></div>-->
                    <!--<div class="mask"></div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="/static/images/yunshow/img_showCar.jpg">-->
                    <!--<h2>汽车</h2>-->
                    <!--<div class="icon-arrow"></div>-->
                    <!--<div class="mask"></div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="/static/images/yunshow/img_showStars.jpg">-->
                    <!--<h2>明星</h2>-->
                    <!--<div class="icon-arrow"></div>-->
                    <!--<div class="mask"></div>-->
                <!--</li>-->
            </ul>
            <div class="tab-box">
                <div class="cont clearfix">
                    <div class="box" v-for="item in scencesList">
                        <a class="img">
                            <img src="">
                        </a>

                        <div class="text">
                            <h3>
                                <a href="javascript:;">Oktoberfest 德国慕尼啤酒节</a>
                            </h3>
                            <div class="title-bar clearfix">
                                <i class="icon-icon_articleGoodLine"></i>666
                                <span class="dian">·</span>
                                展览展示
                                <span class="dian">·</span>
                                时尚行业
                            </div>
                            <p>每年十月举行的盛大的嘉年华活动。云space为主办方提供一站式主题服务套餐，从IP、场地、配套服务、到宣传推广</p>
                        </div>
                    </div>
                </div>
                <div class="more">没有更多了 T T</div>
                <!--<div class="cont current">-->
                    <!--<div class="box" v-for="item in 6">-->
                        <!--<a class="img">-->
                            <!--<img src="">-->
                        <!--</a>-->

                        <!--<div class="text">-->
                            <!--<h3>-->
                                <!--<a href="javascript:;">Oktoberfest 德国慕尼啤酒节</a>-->
                            <!--</h3>-->
                            <!--<div class="title-bar clearfix">-->
                                <!--<i class="icon-icon_articleGoodLine"></i>666-->
                                <!--<span class="dian">·</span>-->
                                <!--展览展示-->
                                <!--<span class="dian">·</span>-->
                                <!--时尚行业-->
                            <!--</div>-->
                            <!--<p>每年十月举行的盛大的嘉年华活动。云space为主办方提供一站式主题服务套餐，从IP、场地、配套服务、到宣传推广</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
        </div>
    </div>

</template>

<script>
    function fetchData(store) {
        return store.dispatch(`getScenesData`,{
            parent_id : store.state.route.params.id
        })
    }

    export default {
        data() {
            return {
                yuntitle: {
                    title: '',
                    des: '',
                    logo: ''
                },

                yunsub:[]
            }
        },
        computed: {
//            allTags(){
//                var s = this.$store.state.allTags
//                return s
//            },
            scencesList(){
                return this.$store.state.scencesList
            },

            all_brand(){
                var self = this
                var s = self.$store.state.allBrand
                if(s.length > 0){
                    for(var i = 0; i < s.length ;i++ ){
                        if(s[i]['name'] == self.$store.state.route.params.id){
                            self.yuntitle.des = s[i].des
                            self.yuntitle.logo = s[i].logo
                            self.yunsub = s[i].sub
                        }
                    }

                }
                return s

            }
        },
        components: {

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

        mounted () {
            var self = this;
            self.$store.commit('LOADING', false)

            //tab切换
            $('.itembox .tab-menu li').click(function () {
                $('.itembox .tab-menu li').removeClass('current');
                $(this).addClass('current');
            })

            //标题
            self.yuntitle.title = self.$store.state.route.params.id

//            console.log(222,self.allTags.all_brand);

            //居中
            var wd =  $('.tab-menu li').width(),
                nmb = $('.tab-menu li').length

            $('.tab-menu').width(wd * nmb);
        },

        preFetch: fetchData,
        beforeMount () {
            fetchData(this.$store)
        },

    }
</script>
<style lang="sass" scoped>
    @import "../../assets/scss/yunshow.scss";
</style>