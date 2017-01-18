<template>
    <div>
        <!--第一部分banner等-开始-->
        <div class="w1200 mt20 clearfix">
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
                    <div class="swiper-button-prev">
                        <i class="icon-arrowleft1"></i>
                    </div>
                    <div class="swiper-button-next">
                        <i class="icon-arrowright1"></i>
                    </div>
                </div>
           </div>
           <!--轮播图结束-->
            <!--左边-->
            <div class="fl">
                <div class="content clearfix">
                <!--品牌案例开始-->
                    <div class="LogoCase">
                        <h1>品牌案例</h1>
                    </div>
                   <div class="LogoCaseContent clearfix fl">
                       <a href="javascript:;">
                           <img src="/static/images/test/3to2bak.png" alt="">
                       </a>
                       <div class="title">Club Med 欢乐冰雪体验活动</div>
                       <span>| 创意活动</span>
                       <p>art + space <i class="icon-arrowright"></i> </p>
                   </div>
                   <div class="LogoCaseContent nopadding fl">
                       <a href="javascript:;">
                           <img src="/static/images/test/3to2bak.png" alt="">
                       </a>
                       <div class="title">Club Med 欢乐冰雪体验活动</div>
                       <span>| 创意活动</span>
                       <p>art + space <i class="icon-arrowright"></i> </p>
                   </div>
                   <div class="hotSite fl" v-for='item in Site'>
                       <a href="javascript:;">
                           <img src="/static/images/test/3to2bak.png" alt="">
                       </a>
                       <div class="title">Club Med 欢乐冰雪体验活动</div>
                       <span>| 创意活动</span>
                       <p>art + space <i class="icon-arrowright"></i></p>
                   </div>
                </div>
                 <!--品牌案例结束-->
                <!--AD-->
                <div class="ad clearfix">
                    <img src="/static/images/test/2.png" alt="">
                </div>
                <!--行业案例开始-->
                <div class="industryBox">
                    <div class="LogoCase clearfix">
                        <h1>行业案例</h1>
                    </div>
                    <div class="industryCase">
                        <div class="hotSite fl" v-for='item in 6'>
                        <a href="javascript:;">
                            <img src="/static/images/test/3to2bak.png" alt="">
                        </a>
                        <div class="title">Club Med 欢乐冰雪体验活动</div>
                        <span>| 创意活动</span>
                        <p>art + space <i class="icon-arrowright"></i> </p>
                    </div>
                    </div>
                </div>
                <!--行业案例结束-->
                <!--明星案例开始-->
                <div class="industryBox">
                    <div class="LogoCase clearfix">
                        <h1>明星案例</h1>
                    </div>
                    <div class="industryCase">
                        <div class="hotSite fl" v-for='item in 6'>
                        <a href="javascript:;">
                            <img src="/static/images/test/3to2bak.png" alt="">
                        </a>
                        <div class="title">Club Med 欢乐冰雪体验活动</div>
                        <span>| 创意活动</span>
                        <p>art + space <i class="icon-arrowright"></i></p>
                    </div>
                    </div>
                </div>
                <!--明星案例结束-->
            </div>
           
           
        </div>
    </div>


</template>
<script>
    // import '../../../static/swiper/swiper.js'
    function fetchData(store) {
//        store.commit('LOADING', true)
        return store.dispatch(`getEventData`).then(() => {store.commit('LOADING', false)})
    }
    export default{
        data(){
            return {
               reSites:[1,2,3,4,5],
               Case:[1,2],
               Site:[1,2,3]
                }
               
               
        },
        
        components: {},
        computed: {
            banners(){return this.$store.state.EventHome.banners},
            subjects(){return this.$store.state.EventHome.subjects},
            venues(){return this.$store.state.EventHome.venues},
            discounts(){return this.$store.state.EventHome.discounts},
            eventcases(){return this.$store.state.EventHome.eventcases},
            toplists(){return this.$store.state.EventHome.toplists},
            searchCondition (){
                return this.$store.state.searchCondition
            },
            cityHotKeyword(){
                return this.$store.state.cityHotKeyword
            }
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

<style>
html, body {
    position: relative;
    height: 100%;
}
.content .nopadding{
    padding-right:0; 
}
body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
}
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
 p{
    color: #AA2C3C;
}

.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
    opacity: .35;
    cursor: auto;
    pointer-events: none;
}
body .swiper-button-next {
    right: 0;
    left: auto;
    font-size: 30px;
    padding: 20px 5px;
    background-image: none;
    background-color: rgba(255,255,255,.5);
}
body .swiper-button-prev{
    font-size: 30px;
    padding: 20px 5px;
    background-image: none;
    background-color: rgba(255,255,255,.5);
}
.swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 50%;
    left: 0;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    -moz-background-size: 27px 44px;
    -webkit-background-size: 27px 44px;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
}
.swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    background: #ffffff;
    opacity: 1;
   
}
.swiper-pagination-bullet-active {
    width: 7px;
    height: 7px;
    display: inline-block;
    border-radius: 50%;
    background: rgba(255,255,255,0);
    border: 2px solid #ffffff;

}
.icon-arrowright1{/*分页器向右*/
    display: inline-block;
    width: 20px!important;
    height:20px!important;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
}
.icon-arrowleft1{/*分页器向左*/
    display: inline-block;
    width: 20px!important;
    height:20px!important;
    margin-left: 5px;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
}
.icon-arrowright{/*分页器向右*/
    display: inline-block;
    color: #AA2C3C;
    border-left: 1px solid #AA2C3C;
    border-top: 1px solid #AA2C3C;
    transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
}

.content{
    margin-top:50px;
    width: 880px;
    height:750px;
}
.LogoCase h1{
    font-size: 24px;
    color: #666666;
   
}
.LogoCaseContent{
    padding-right:20px; 
    padding-top: 30px;
    padding-bottom: 20px;
}
.LogoCaseContent img{
    width: 420px;
    height: 315px;
}
.hotSite{
    padding-top: 30px;
    padding-right: 20px;
}
.hotSite img{
    width: 273px;
    height: 182px;
}
.ad{
    width: 880px;
    height: 120px;
    padding: 30px 0;
    
}
.industryBox{
    margin-top:50px;
    width: 880px;
    height:662px;
}
.starCase{
    width: 273.3px;
    height: 321px;
    border: 1px solid #666666;
}



.el-select .el-input .el-input__inner{text-indent: 10px;}
</style>