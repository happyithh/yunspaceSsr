<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">首页</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;" class="red">找场地</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;" v-html="siteDtl.title">场地名称</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200 mt30 clearfix">
            <div class="site-dtl-left">
                <h1 v-html="siteDtl.title">场地名称</h1>
                <div class="banner swiper-site-dtl-banner" v-show="siteDtl.site_pictures.length > 0">
                    <div class="swiper-container banner-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in siteDtl.site_pictures">
                                <img class="imgload" :src="item.url_790_526">
                            </div>
                            <!--<div class="swiper-slide">-->
                            <!--<img class="imgload" src="http://www.atool.org/placeholder.png?size=790x526&text=图片&&bg=836&fg=fff" alt="首页banner图片01">-->

                            <!--</div>-->
                            <!--<div class="swiper-slide">-->
                            <!--<img class="imgload" src="http://www.atool.org/placeholder.png?size=790x526&text=图片&&bg=836&fg=fff" alt="首页banner图片01">-->
                            <!--</div>-->
                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination"></div>

                        <!-- 如果需要导航按钮 -->
                    </div>
                    <span class="arrow-left arrow"><i class="icon icon-icon_moreArrowRight"></i></span>
                    <span class="arrow-right arrow"><i class="icon icon-icon_moreArrowRight"></i></span>
                </div>
                <div class="title-dtl">基础信息</div>
                <div class="base-info clearfix mb20">
                    <div class="fl piece">
                        <p class="title"><i class="icon icon-icon_detailsAddress"></i>地理位置</p>
                        <div class="base-inner clearfix"><p>城市</p> <p class="gan"> - </p> <p>{{siteDtl.city_name}}</p></div>
                        <div class="base-inner clearfix"><p>行政区域</p> <p class="gan"> - </p> <p>{{siteDtl.district}}</p></div>
                        <div class="base-inner clearfix"><p>所属商圈</p> <p class="gan"> - </p> <p>{{siteDtl.business_circles}}</p></div>
                        <div class="base-inner clearfix"><p>具体位置</p> <p class="gan"> - </p> <p>{{siteDtl.address}}</p></div>
                    </div>
                    <div class="fl piece">
                        <p class="title"><i class="icon icon-icon_detailsStandard"></i>空间标准</p>
                        <div class="base-inner clearfix"><p>使用面积</p> <p class="gan"> - </p> <p>{{siteDtl.size}}</p></div>
                        <div class="base-inner clearfix"><p>容纳人数</p> <p class="gan"> - </p> <p>{{siteDtl.people}}</p></div>
                        <div class="base-inner clearfix"><p>空间层高</p> <p class="gan"> - </p> <p>{{siteDtl.height}}</p></div>
                        <div class="base-inner clearfix"><p>空间承重</p> <p class="gan"> - </p> <p>{{siteDtl.weight}}</p></div>
                    </div>
                    <div class="fl piece">
                        <p class="title"><i class="icon icon-icon_detailsAddress"></i>类型相关</p>
                        <div class="base-inner clearfix"><p>场地类型</p> <p class="gan"> - </p> <p>{{siteDtl.site_type}}</p></div>
                        <div class="base-inner clearfix"><p>行业类型</p> <p class="gan"> - </p> <p>{{siteDtl.industry_field}}</p></div>
                        <div class="base-inner clearfix"><p>活动类型</p> <p class="gan"> - </p> <p>{{siteDtl.event_type}}</p></div>
                    </div>
                </div>
                <div class="title-dtl">配套设施</div>
                <div class="supporting-img clearfix mb30">
                    <div class="piece active">
                        <div class="icon-img">
                            <i class="icon icon-icon_facilityWC"></i>
                        </div>
                        <p>洗手间</p>
                    </div>
                    <div class="piece">
                        <div class="icon-img">
                            <i class="icon icon-icon_facilityHuazhuang"></i>
                        </div>
                        <p>化妆间</p>
                    </div>
                    <div class="piece">
                        <div class="icon-img">
                            <i class="icon icon-icon_facilityBeark"></i>
                        </div>
                        <p>休息室</p>
                    </div>
                </div>
                <div class="title-dtl">场地介绍</div>
                <div class="site-info mb30" v-html="siteDtl.brand_story">

                </div>
                <div class="site-wrap clearfix">
                    <div class="fl site-cont clearfix">
                        <!--列表-开始-->
                        <div class="box-list clearfix">
                            <div class="box-list-box" v-for="item in spaces">
                                <a class="fl img" href="javascript:;">
                                    <img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" alt="列表模式">
                                </a>
                                <div class="fl text">
                                    <h3>
                                        <a href="javascript:;" v-html="item.name"></a>
                                    </h3>
                                    <p class="details">{{item.introduced}}</p>
                                    <div class="assort clearfix">
                                        <p><i class="icon-icon_spaceArea"></i> {{item.area}}㎡</p>
                                        <p><i class="icon-icon_spacePeople"></i> {{item.people}}人 <span class="line"></span></p>
                                        <p><i class="icon-icon_spaceHeight"></i> {{item.height}}m</p>
                                    </div>
                                    <div class="price">
                                        <p><strong style="margin-left: -5px">{{item.special_price}}</strong></p>
                                        <!--<p>{{item.special_price}}</p>-->
                                        <span>市场价: {{item.market_price}}</span>

                                        <div class="btn-op clearfix">
                                            <router-link :to="'/booking/'+ item.id" class="btn btn-red">立即预订</router-link>
                                            <button @click="spaceAddToInquiry(item)">加入咨询</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="title-dtl">地图位置</div>
                <div class="site-map mb30" id="siteMap">
                </div>



            </div>
            <div class="site-dtl-right">
                <div class="price-op">
                    <div class="price-dtl">
                        <p><span>参考价</span> <span class="active"><i class="icon icon-icon_articleCollectSolid"></i>已收藏</span></p>
                        <!--<p><span>￥80,000<font>/天 起</font> </span><span>市场价: ¥ 100,000/天</span></p>-->
                        <p><span>{{siteDtl.lower_price}} </span><span>市场价: {{siteDtl.market_price}}</span></p>
                    </div>
                    <div class="btn-op clearfix">
                        <router-link :to="'/'" class="btn btn-red">立即询价</router-link>
                        <button >加入询价</button>
                    </div>
                    <div class="price-tel">
                        <i class="icon icon-icon_headerTel"></i>400-056-0599
                    </div>
                </div>
                <div class="item-title clearfix site-dtl" v-if="cases.length > 0">
                    <h2><span class="redline"></span>活动案例</h2>
                    <a class="more" href="/site/hot">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>
                <div class="event-case border-gray" v-if="cases.length > 0">
                    <ul>
                        <li v-for="item in cases">
                            <router-link :to="'/article/'+item.id" class="text" v-text="item.title">边开年会边旅游，会奖旅游最佳目的地——上海</router-link>
                            <router-link :to="'/article/'+item.id"><img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_400'] : ''" alt=""></router-link>
                        </li>
                        <!--<li>-->
                            <!--<a href="" class="text">边开年会边旅游，会奖旅游最佳目的地——上海</a>-->
                            <!--<a href=""><img src="" alt=""></a>-->
                        <!--</li>-->
                    </ul>
                </div>
                <div class="item-title clearfix site-dtl">
                    <h2><span class="redline"></span>热推场地</h2>
                </div>
                <div class="hot-site border-gray">
                    <ul>
                        <li>
                            <a href="">
                                <img src="/static/images/test/3to2.png" alt="">
                                <p>场地名称场地名称场地名称场</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/static/images/test/3to2.png" alt="">
                                <p>场地名称场地名称场地名称场</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="item-title clearfix site-dtl">
                    <h2><span class="redline"></span>配套服务</h2>
                </div>
                <div class="supporting-services border-gray">
                    <ul class="clearfix">
                        <li class="active">
                            <div class="bor">
                                <i class="icon icon-icon_serveStage"></i>
                            </div>
                            <p>场地搭建</p>
                        </li>
                        <li>
                            <div class="bor">
                                <i class="icon icon-icon_serveStage"></i>
                            </div>
                            <p>场地搭建</p>
                        </li>
                        <li>
                            <div class="bor">
                                <i class="icon icon-icon_serveStage"></i>
                            </div>
                            <p>场地搭建</p>
                        </li>
                        <li>
                            <div class="bor">
                                <i class="icon icon-icon_serveStage"></i>
                            </div>
                            <p>场地搭建</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    function fetchData(store){
//        store.commit('LOADING', true)
        return store.dispatch(`getSiteDtlData`,{
                    id : store.state.route.params.id
                }).then(() => {
                    store.commit('LOADING', false)
        })
    }
    export default {
        name: 'app',
        data(){
            return {

            }
        },
        computed: {
            loading(){
                return this.$store.state.loading
            },
            cities (){
                return this.$store.state.cities
            },
            siteDtl(){
                return this.$store.state.SiteDtlData.dtl
            },
            spaces(){
                return this.$store.state.SiteDtlData.spaces
            },
            cases(){
                return this.$store.state.SiteDtlData.relate_cases
            }
        },
        mounted () {
            var swiper = new Swiper('.banner-swiper', {
                nextButton: '.arrow-right',
                prevButton: '.arrow-left',
//                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                paginationHide:true,
                autoplay: 3500
            });
            this.initMap()

        },
        preFetch: fetchData,
        beforeMount () {
            fetchData(this.$store)
        },
        methods: {
            initMap(){
                var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});

                var map = new BMap.Map("siteMap");

                setTimeout(function () {
                    map.addControl(top_right_navigation);
                },300)

                var myGeo = new BMap.Geocoder();

                myGeo.getPoint("红坊创意园", function(point){
                    if (point) {
                        map.centerAndZoom(point, 16);  // 初始化地图,设置中心点坐标和地图级别
                        var marker = new BMap.Marker(point);  // 创建标注
                        map.addOverlay(marker);
                        //self.request();
                    }else{
                        //TODO //没有这个点的提示
                    }

                },'上海');
            },
            spaceAddToInquiry(data){
                var value = {}
                value.site = this.siteDtl
                value.op = 'add'
                value.type = 'space'
                value.space = data
                this.$store.commit('INQUIRY_DATA_CHANGE',value)
            }
        }

    }
</script>

<style lang="sass" scoped>
    @import "../../assets/scss/site-search.scss";
    @import "../../assets/scss/site-dtl.scss";
</style>