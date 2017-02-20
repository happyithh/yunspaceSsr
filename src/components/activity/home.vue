<template>
    <div>
        <!--第一部分banner等-开始-->
        <div class="w1200 clearfix">
            <!--轮播图开始-->
            <div class="banner event-swiper">
               <div class="swiper-container activityBannner">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide "  v-for="item in reSites">
                           <a href="javascript:;" title>
                            <img src="/static/images/test/3to2.png" alt="">
                        </a>
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button swiper-button-prev">
                        <i class="icon icon-arrowleft1"></i>
                    </div>
                    <div class="swiper-button swiper-button-next">
                        <i class="icon icon-arrowright1"></i>
                    </div>
                </div>
            </div>
            <!--轮播图结束-->


            <div class="activity-box mt50 clearfix">
                <!--左边-->
                <div class="fl casebox">
                    <!--品牌案例开始-->
                    <div class="logoBox clearfix">
                        <div class="item-title clearfix">
                            <h2><span class="redline"></span>品牌案例</h2>
                            <a class="more" href="/activity/band">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                        </div>

                        <ul class="casebox-list big clearfix">
                            <li v-for="(item,index) in band_events" v-if="index<2">
                                <a class="img" :href="'/article/'+item.id" :title="item.title">
                                    <img :src="item.first_picture.first_picture.url" :alt="item.title">
                                </a>
                                <h3><a :href="'/article/'+item.id">{{item.title}}</a></h3>
                                <p class="tag">{{item.event_types}}</p>
                                <a :href="'/site/dtl/'+item.site_id" class="link red">
                                    <span>{{item.site_title}}</span>
                                    <i class="icon-icon_moreArrowRight"></i>
                                </a>
                            </li>
                        </ul>
                        <ul class="casebox-list clearfix">
                            <li v-for="(item,index) in band_events" v-if="index >= 2">
                                <a class="img" :href="'/article/'+item.id" :title="item.title">
                                    <img :src="item.first_picture.first_picture.url" :alt="item.title">
                                </a>
                                <h3><a :href="'/article/'+item.id">{{item.title}}</a></h3>
                                <p class="tag">{{item.event_types}}</p>
                                <a :href="'/site/dtl/'+item.site_id" class="link red">
                                    <span>{{item.site_title}}</span>
                                    <i class="icon-icon_moreArrowRight"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                     <!--品牌案例结束-->

                    <!--AD-->
                    <a class="ad img" href="" title="">
                        <img src="" >
                    </a>

                    <!--行业案例开始-->
                    <div class="industryBox mt50">
                        <div class="item-title clearfix">
                            <h2><span class="redline"></span>行业案例</h2>
                            <a class="more" href="/activity/industry">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                        </div>

                        <ul class="casebox-list clearfix">
                            <li v-for="item in industry_events">
                                <a class="img" :href="'/article/'+item.id" :title="item.title">
                                    <img :src="item.first_picture.first_picture.url" :alt="item.title">
                                </a>
                                <h3><a :href="'/article/'+item.id">{{item.title}}</a></h3>
                                <p class="tag">{{item.event_types}}</p>
                                <a :href="'/site/dtl/'+item.site_id" class="link red">
                                    <span>{{item.site_title}}</span>
                                    <i class="icon-icon_moreArrowRight"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--行业案例结束-->
                    <!--明星案例开始-->
                    <div class="starBox mt30">
                        <div class="item-title clearfix">
                            <h2><span class="redline"></span>明星案例</h2>
                            <a class="more" href="/activity/star">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                        </div>

                        <ul class="casebox-list clearfix">
                            <li v-for="item in star_events">
                                <a class="img" :href="'/article/'+item.id" :title="item.title">
                                    <img :src="item.first_picture.first_picture.url" :alt="item.title">
                                </a>
                                <h3><a :href="'/article/'+item.id">{{item.title}}</a></h3>
                                <p class="tag">{{item.event_types}}</p>
                                <a :href="'/site/dtl/'+item.site_id" class="link red">
                                    <span>{{item.site_title}}</span>
                                    <i class="icon-icon_moreArrowRight"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--明星案例结束-->
                </div>

                <!--右边-->
                <div class="fr sidebar">
                    <!--配套服务-star-->
                    <div class="hot news">
                        <div class="item-title small clearfix">
                            <h2><span class="redline"></span>配套服务</h2>
                            <a class="more" href="/site/hot">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                        </div>

                        <ul class="cont clearfix">
                            <li v-for="item in 12">
                                <i class="icon-icon_serveStage"></i>
                                <p>场地搭建</p>
                            </li>
                        </ul>
                    </div><!--配套服务-end-->
                </div>
            </div>
           
        </div>
    </div>


</template>
<script>
    function fetchData(store){
//        store.commit('LOADING', true)
        return store.dispatch(`getEventHomeData`,{
//            id:,
        }).then(() => {
            store.commit('LOADING', false)

        })
    }
    export default{
        data(){
            return {
               reSites:[1,2,3,4,5],



            }


        },
        
        components: {},
        computed: {
            band_events(){
                var s = this.$store.state.EventHome.band_events
                return this.getTypes(s);
            },
            industry_events(){
                var s = this.$store.state.EventHome.industry_events
                return this.getTypes(s);
            },
            star_events(){
                var s = this.$store.state.EventHome.star_events
                return this.getTypes(s);
            },

        },
        mounted () {
            var self=this;
            self.getBanner();

        },
        preFetch: fetchData,
        beforeMount () {
            fetchData(this.$store)
        },
        methods: {
            getTypes:function (s) {
                for(var i in s ){
                    var types = s[i].event_types
                    if(!types==''){
                        s[i].event_types = s[i].event_types.substring(0,4);
                    }
                }
                return s
            },

            //搜索点击跳转到空间列表页
            getSearchVal:function () {
                this.searchInputVal=$('.searchInputVal').val();
                window.location.href ='/spacelist/:'+this.searchInputVal;
            },

            getBanner:function () {
                setTimeout(function () {
                    var swiper = new Swiper('.activityBannner', {
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        pagination: '.swiper-pagination',
                        paginationType : 'bullets',
                        paginationClickable :true,
                        autoplay: 5000
                    });
                },300);
            },

            gotoHoldEvent : function () {
//                router.push('/event/hold')
                router.push({ path: '/event/hold', query: { activity_type: this.demand.activity_type, number_of_activities : this.demand.number_of_activities}})
            },
            goSpaceSearch :function () {
                this.$store.commit('spaceSearchCondition', this.homeSearchCondition);
                router.push('/spaces');
            },
            spaceSearchTypeFixed(e){
                this.homeSearchCondition.q.site_site_type_eq = e
                this.$store.commit('spaceSearchCondition', this.homeSearchCondition);
                router.push('/spaces');
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../../assets/scss/activity.scss";

.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
/* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide a{
    width:100%;
    height: 100%;
    
}
.swiper-slide a img{
    width:100%;
    height:400px;
    
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
    opacity: .35;
    cursor: auto;
    pointer-events: none;
}
body .swiper-button-prev,
body .swiper-button-next{
    font-size: 20px;
    color: #000;
}
body .swiper-button-next {
    right: 0;
    left: auto;
}
body .swiper-button-prev{

}
.swiper-button-next, .swiper-button-prev {
    width: 50px;
    height: 100px;
    background-image: none;
    background-color: rgba(255,255,255,.3);
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -50px;
    z-index: 10;
    cursor: pointer;
}
.swiper-button .icon{
    display: inline-block;
    width: 14px;
    height:14px;
    transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    position: absolute;
    top: 50%;
    margin-top: -10px;
}
.icon-arrowright1{/*分页器向右*/
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    right: 22px;
}
.icon-arrowleft1{/*分页器向左*/
    left: 20px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
}

</style>