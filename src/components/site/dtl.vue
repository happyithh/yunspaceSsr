<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">首页</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;" class="red">找场地</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">场地名称</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200 mt30 clearfix">
            <div class="site-dtl-left">
                <h1>场地名称</h1>
                <div class="banner" >
                    <div class="swiper-container banner-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in [1,2,3,1,1]">
                                <img class="imgload" src="/static/images/test/3to2.png">
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
                        <div class="yun-swiper-prev" v-if="siteDtl.img_paths.length > 1">
                            <span class="icon-arrowleft"></span>
                        </div>
                        <div class="yun-swiper-next" v-if="siteDtl.img_paths.length > 1">
                            <span class="icon-arrowright"></span>
                        </div>
                    </div>
                </div>
                <div class="title-dtl">基础信息</div>
                <div class="base-info clearfix mb20">
                    <div class="fl piece" v-for="item in [1,1,1]">
                        <p class="title"><i class="icon icon-icon_detailsAddress"></i>地理位置</p>
                        <div class="base-inner clearfix"><p>城市</p> <p class="gan"> - </p> <p>商业发布、展览展示、文体娱乐商业发布、
                            展览展示、文体娱乐</p></div>
                        <div class="base-inner clearfix"><p>城市</p> <p class="gan"> - </p> <p>上海</p></div>
                        <div class="base-inner clearfix"><p>城市</p> <p class="gan"> - </p> <p>商业发布、展览展示、文体娱乐商业发布、
                            展览展示、文体娱乐</p></div>
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
                <div class="site-info mb30">
                    餐厅所在的原汇中饭店大楼是一幢兴建于1906年的文艺复兴风格的大楼，历经一个多世纪，依然风姿卓绝。大楼位于南京东路与外滩的交界处，
                    俯瞰黄浦江和浦东的天际线。
                </div>
                <div class="title-dtl">地图位置</div>
                <div class="site-map mb30" id="siteMap">

                </div>
            </div>
            <div class="site-dtl-right">
                <div class="price-op">
                    <p><span>参考价</span> <span><i class="icon icon-icon_articleCollectSolid"></i>已收藏</span></p>
                    <p><span>￥80,000<font>/天 起</font> </span><span>市场价: ¥ 100,000/天</span></p>
                </div>
                <div class="btn-op">
                    <button class="btn btn-red">立即询价</button>
                    <button>加入询价</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return {
                siteDtl:{
                    img_paths:[]
                }
            }
        },
        computed: {
            loading(){
                return this.$store.state.loading
            }
        },

        mounted () {
            var swiper = new Swiper('.banner-swiper', {
                nextButton: '.yun-swiper-next',
                prevButton: '.yun-swiper-prev',
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                paginationHide:true,
                autoplay: 3000
            });
            this.initMap()
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
            }
        }

    }
</script>

<style src="../../assets/scss/site-dtl.scss" lang="sass" scoped>

</style>