<template>

    <div class="home">

        <!--快捷链接块-开始-->
        <ul class="quicklinks clearfix">
            <li>
                <a to="/event" class="imgtext">
                    <img src="/static/images/home/links1.jpg" />
                    <p class="text">本月新增场地92家</p>
                    <div class="mask"></div>
                </a>
                <!--<p class="imgtitle">我要办活动</p>-->
                <router-link class="imgtitle" to="/event">我要办活动</router-link>
            </li>
            <li>
                <a to="/openshop" class="imgtext">
                    <img src="/static/images/home/links2.jpg" />
                    <p class="text">本月新增空间345家</p>
                    <div class="mask"></div>
                </a>
                <!--<p class="imgtitle">我要开店</p>-->
                <a class="imgtitle" to="/openshop">我要开店</a>
            </li>
            <li>
                <a to="/ip" class="imgtext">
                    <img src="/static/images/home/links3.jpg" />
                    <p class="text">本月新增项目5个</p>
                    <div class="mask"></div>
                </a>
                <!--<p class="imgtitle">我要找IP项目</p>-->
                <a class="imgtitle" to="/ip">我要找IP项目</a>
            </li>
        </ul>
        <!--空间推荐-开始-->
        <div class="section spacerecommend clearfix">
            <h3>空间推荐</h3>
            <ul class="recommend recommend-main clearfix">
                <li v-for="(item,index) in spaceRecommend" v-if="index < 3">
                    <div class="img">
                        <router-link :to=" '/space/' + item.id">
                            <img :alt="item.name" v-bind:src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : '' " />
                        </router-link>
                        <span class="tags">{{item.city_name}}</span>
                    </div>
                    <div class="text">
                        <a target="_blank" class="title" :href=" '/space/' + item.id">{{item.name}}</a>
                        <div class="price">{{item.special_price}}</div>
                        <div class="textinfo">
                            <p><span>场地类型：</span>{{item.site_type}}</p>
                            <!--<p><span>落地区域：</span>{{item.through_three_areas}}</p>-->
                            <p v-html=" '<span>落地区域：</span>' + item.through_three_areas"></p>
                            <div class="numb clearfix">
                            <p><span>面积：</span>{{item.area}}㎡</p>
                            <p><span>层高：</span>{{item.height}}m</p>
                            <p><span>人数：</span>{{item.Max_seating_capacity}}人</p>
                            </div>
                            <p><span>地址：</span>{{item.city_name}} | {{item.district}} | {{item.address}}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="recommend recommend-sub clearfix">
                <li v-for="(item,index) in spaceRecommend" v-if=" index >=3">
                    <div class="img">
                        <a :title="item.name" :href=" '/space/' + item.id" target="_blank">
                            <img :alt="item.name" v-bind:src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" />
                        </a>
                    </div>
                    <div class="text">
                        <a class="title" target="_blank" :href=" '/space/' + item.id">{{item.name}}</a>
                        <div class="price">{{item.special_price}}</div>
                        <div class="city">{{item.city_name}}</div>
                        <div class="textinfo">
                            <p><span>场地类型：</span>{{item.site_type}}</p>
                            <p v-html=" '<span>落地区域：</span>' + item.through_three_areas"></p>
                            <p><span>地址：</span>{{item.city_name}} | {{item.district}} | {{item.address}}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="recommend-other"></ul>

            <router-link class="btnlookmore" to="/spaces">查看更多空间</router-link>
            <!--<a class="btnlookmore" href="javascript:;">查看更多空间</a>-->
        </div>
        <!--空间推荐-结束-->

        <!--新发现-开始-->
        <div class="section newfound clearfix">
            <h3>新发现</h3>
            <div class="cont clearfix">
                <!--大图那个-->
                <div class="fl info info-big" v-for="(item,index) in newFindTopFour" v-if="index < 1">
                    <a :title="item.title" class="img" :href=" '/article/' + item.id" target="_blank">
                        <img :alt="item.title" :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_400'] : ''" />
                    </a>
                    <a class="text" :href=" '/article/' + item.id" target="_blank">
                        {{item.title}}
                    </a>
                </div>
                <!--中间4个-->
                <ul class="infolist fl clearfix">
                    <li class="info info-normal" v-for="(item,index) in newFindTopFour" v-if="index > 0">
                        <a :title="item.title" class="img" :href="'/article/' + item.id" target="_blank">
                            <img :alt="item.title" v-bind:src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" />
                        </a>
                        <a class="text" :href="'/article/' + item.id" target="_blank">
                            {{item.title}}
                        </a>
                    </li>
                </ul>
                <!--右边列表-->
                <ul class="fr textinfolist clearfix">
                    <li v-for="item in newFindRandom">
                        <a :title="item.title" :href="'/article/' + item.id" target="_blank">
                            <div class="title">
                                <i class="point"></i>
                                <p>{{item.title}}</p>
                            </div>
                            <p v-html="item.abstract"></p>
                        </a>
                    </li>
                </ul>
            </div>
            <!--<a class="btnlookmore" href="javascript:;">发现更多精彩</a>-->
            <router-link class="btnlookmore" to="/found?newsType=1&selectType=newsType&selectTypeKey=1">发现更多精彩</router-link>
        </div>
        <!--新发现-结束-->

        <!--精选案例-开始-->
        <div class="section caseselected clearfix">
            <h3>精选案例</h3>
            <ul class="cont clearfix">
                <li v-for="item in caseSelected">
                    <a :href="'/article/' + item.id" target="_blank" class="img" :title="item.title">
                        <img :alt="item.title" v-bind:src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" />
                    </a>
                    <div class="textinfo">
                        <a class="title" :href="'/article/' + item.id" target="_blank">{{item.title}}</a>
                        <div class="tags">
                            <span v-for="(i,index) in item.keywords" v-if="index < 3">{{i}}</span>
                        </div>
                        <ul class="numbs clearfix">
                            <li class="fl"><i class="icons icon-skimbg"></i>{{item.viewed}}</li>
                            <li class="fr"><i class="icons icon-zanbg"></i>{{item.up_number}}</li>
                        </ul>
                    </div>
                </li>
            </ul>
            <router-link class="btnlookmore" to="/found?caseType=6&selectType=caseType&selectTypeKey=6">发现更多案例</router-link>
            <!--<a class="btnlookmore" href="javascript:;">发现更多精彩</a>-->
        </div>
        <!--精选案例-开始-->


        <!--媒体报道-开始-->
        <div class="section mediacoverage clearfix">
            <h3>媒体报道</h3>
            <div class="cont media-wrap clearfix">
                <!--<div class="fl imglogo-media">-->
                <!--<img src="/static/images/home/imglogo-media.png">-->
                <!--</div>-->
                <ul class="textinfolist clearfix media">
                    <li v-for="(item,index) in mediaReport" v-if="index < 5">
                        <router-link :title="item.title" :to="'/article/'+item.id">
                            <div class="title fl">
                                <i class="point"></i>
                                <p>{{item.title}}</p>
                            </div>
                            <div class="time fr">{{item.i_time}}</div>
                        </router-link>
                    </li>
                    <!--<li>-->
                    <!--<a href="javascript:;">-->
                    <!--<div class="title">-->
                    <!--<i class="point"></i>-->
                    <!--<p>[网易] 商业地产短租入侵零售领域 云SPACE掀起商业场景革命</p>-->
                    <!--</div>-->
                    <!--<div class="time">2016-08-15</div>-->
                    <!--</a>-->
                    <!--</li>-->

                </ul>
                <ul class="textinfolist clearfix media">
                    <li v-for="(item,index) in mediaReport" v-if="index >= 5">
                        <router-link :title="item.title" :to="'/article/'+item.id">
                            <div class="title fl">
                                <i class="point"></i>
                                <p>{{item.title}}</p>
                            </div>
                            <div class="time fr">{{item.i_time}}</div>
                        </router-link>
                    </li>
                    <!--<li>-->
                    <!--<a href="javascript:;">-->
                    <!--<div class="title">-->
                    <!--<i class="point"></i>-->
                    <!--<p>[网易] 商业地产短租入侵零售领域 云SPACE掀起商业场景革命</p>-->
                    <!--</div>-->
                    <!--<div class="time">2016-08-15</div>-->
                    <!--</a>-->
                    <!--</li>-->

                </ul>
            </div>
        </div>
        <!--媒体报道-开始-->

        <!--媒体报道-开始-->
        <div class="section logofriends clearfix">
            <h3>合作品牌</h3>
            <div class="cont">
                <img src="/static/images/home/imglogo-friends.png" />
            </div>
        </div>
    </div>

</template>

<script>
    function fetchData(store) {
//        store.commit('LOADING', true)
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
                }
            }
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
<style scoped>
    .citySelection .swiper-slide{
        background-color: #fff;
        /*height: 350px;*/
        margin-right: 1px;
        position: relative;
    }
    .swiper-container{
        overflow: visible;
    }
    .citySelection .swiper-slide a{
        display: block;
        width: 100%;
        height: 100%;
    }
    .citySelection .swiper-slide a:after{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.3);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    }
    .citySelection .swiper-slide img{
        display: block;
        width: 100%;
        height: 100%;
        background: #aaa;
    }
    .citySelection .swiper-slide p{
        position: absolute;
        bottom: 0;
        z-index: 2;
        font-size:18px;
        color:#ffffff;
        margin: 10px 15px;
        height: 46px;
        line-height: 1.35em;
        box-sizing: border-box;
        overflow: hidden;

        display: -webkit-box;  /*将对象作为弹性盒子模型显示*/
        text-overflow:ellipsis;
        word-break:break-all;
        -webkit-box-orient:vertical;/*伸缩盒对象的子元素的排列方式-垂直*/
        -webkit-line-clamp:2; /*限制在一个块级元素显示的文本的行数*/

        transition: all .6s;
        -webkit-transition: all .6s;
        -moz-transition: all .6s;
    }
    .citySelection .swiper-slide:hover p{
        bottom: 5px;
    }
    /*.citySelection{*/
    /*width: 1200px;*/
    /*}*/

    .btnlookmore {
        display: block;
        width: 398px;
        height: 48px;
        line-height: 48px;
        border: 1px solid #000;
        text-align: center;
        margin: 30px auto 0;
        font-size: 18px;
        color: #000;
        background: #fff;
    }

    .btnlookmore:hover {
        background: #000;
        color: #fff;
    }

    .section {
        width: 1200px;
        margin: 0 auto 50px;
    }

    .section > h3 {
        font-size: 24px;
        margin-bottom: 30px;
        height: 24px;
        line-height: 24px;
    }
    .home-banner-search{
        position: relative;
        min-width: 1200px;
        z-index: 10;
    }
    .home-banner-wrap{
        width: 100%;
        min-width: 1200px;
        height: 400px;
        margin: 0 auto;
        background: #ddd;
        overflow: hidden;
        position: relative;
    }

    .home-banner {
        width: 1920px;
        height: 400px;
        background: #ddd;
        position: absolute;
        left: 50%;
        margin-left: -960px;
        top: 0;
        overflow: hidden;
        z-index: 1;
    }
    .home-banner>img{width: 100%;height: 100%;}

    /*banner上的文字*/
    .banner_text{
        width: 1060px;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        margin-left: -530px;
        top: 145px;
        z-index: 9;
    }
    .banner_text p{
        float: left;
        font-size: 28px;
        height: 28px;
        line-height: 28px;
        font-weight: normal;
        font-family: "PingFangHK-Regular","Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑";
        /*font-family: PingFangHK-Thin;*/
        text-align:center;
        color: #fff;


    }
    .banner_text p.mycolor{
        color: #fff;
        animation:mycolor .5s;
        -moz-animation:mycolor .5s; /* Firefox */
        -webkit-animation:mycolor .5s; /* Safari and Chrome */
        -o-animation:mycolor .5s; /* Opera */
    }
    .banner_text p span{
        margin: 0 18px;
    }
    .banner_text p:nth-of-type(1){animation-delay: 1s;}
    .banner_text p:nth-of-type(2){animation-delay: 1.5s;}
    .banner_text p:nth-of-type(3){animation-delay: 2s;}
    .banner_text p:nth-of-type(4){animation-delay: 2.5s;}

    @keyframes mycolor
    {
        from {color: #ccc;}
        to {color: #fff;}
    }
    @-moz-keyframes mycolor /* Firefox */
    {
        from {color: #ccc;}
        to {color: #fff;}
    }
    @-webkit-keyframes mycolor /* Safari 和 Chrome */
    {
        from {color: #ccc;}
        to {color: #fff;}
    }
    @-o-keyframes mycolor /* Opera */
    {
        from {color: #ccc;}
        to {color: #fff;}
    }



    .home-search {
        width: 1100px;
        padding: 0 50px;
        position: absolute;
        bottom: 100px;
        left: 50%;
        margin-left: -600px;
        z-index: 2;
    }

    .home-search .select {
        position: relative;
    }

    .home-search .select:hover .result .icon-updown {
        transform: rotate(-180deg);
        -ms-transform: rotate(-180deg); /* IE 9 */
        -moz-transform: rotate(-180deg); /* Firefox */
        -webkit-transform: rotate(-180deg); /* Safari 和 Chrome */
        -o-transform: rotate(-180deg); /* Opera */
    }

    .home-search .select .cont {
        border:1px solid #272335;
        box-shadow:0px 2px 4px 0px rgba(0,0,0,0.50);
        position: absolute;
        left: 0;
        top: 52px
    }

    .home-search .result {
        width: 120px;
        height: 50px;
        background: #fff;
        position: relative;
        border: 1px solid #000;
        box-sizing: border-box;
    }

    .home-search .result input {
        width: 100%;
        height: 100%;
        line-height: 50px;
        cursor: pointer;
        background-color: #fff;
    }

    .home-search .result .icon-updown {
        display: block;
        width: 0px;
        height: 0px;
        border: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 7px solid #000;
        position: absolute;
        right: 22px;
        top: 21px;
        transition: all linear .2s;
    }
    body .home-search .el-input__inner{
        padding: 3px 20px;
    }
    body .home-search .el-input__icon{right: 19px;top:20px;}
    body .el-select-dropdown__item{
        padding: 8px 20px;
    }
    body .el-select-dropdown{
        margin: 2px 0;
    }
    body .el-select-dropdown__item.selected.hover,
    body .el-select-dropdown__item.selected{
        background: #e92332;
    }

    .citylist {
        width: 150px;
    }

    .citylist li {
        width: 100%;
        height: 30px;
        line-height: 30px;
    }

    .citylist li > a {
        width: 100%;
        height: 100%;
        background: #fff;
        text-indent: 20px;
    }

    .citylist li a:hover {
        background: #e92332;
        color: #fff;
    }
    .dowhat .result{
        padding: 0 20px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .dowhat-contlist {
        width: 800px;
        background: #fff;
    }

    .dowhat-contlist dl {
        border-bottom: 2px solid #ccc;
        padding: 15px 20px;
    }

    .dowhat-contlist dl:last-child {
        border: 0;
    }

    .dowhat-contlist dt {
        width: 9%;
        height: 30px;
        line-height: 30px;
        margin: 5px 0;
    }

    .dowhat-contlist dd {
        width: 91%;
    }

    .dowhat-contlist dd > a {
        height: 30px;
        line-height: 30px;
        padding: 0 12px;
        margin: 5px;
    }

    .dowhat-contlist dd > a:hover,.dowhat-contlist dd > a.active {
        background: #e92332;
        color: #fff;
    }

    .searchinput {
        width: 500px;
        height: 50px;
        padding: 0 20px;
        border: 1px solid #000;
        box-sizing: border-box;
    }

    .searchbtn {
        width: 120px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        background: #272335;
        cursor: pointer;
    }

    .searchbtn:hover {
        background: #1a152e;
    }
    .onekeyorder{
        width: 190px;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        color: #fff;
    }
    .onekeyorder .onekeybtn{
        background:rgba(255,255,255,0.3);
        border:2px solid #f4f4f4;
        width:160px;
        height: 100%;
        font-size: 18px;
        color: #fff;
    }

    /*快捷链接*/
    .quicklinks {
        width: 1000px;
        padding: 0 100px;
        margin: 40px auto;
    }

    .quicklinks li {
        float: left;
        width: 300px;
        height: 235px;
        margin-right: 50px;
    }

    .quicklinks li:last-child {
        margin-right: 0;
    }

    .quicklinks li a.imgtext {
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;
    }
    .quicklinks li a.imgtext img{
        transition: all 0.6s;
        -moz-animation: all 0.6s;
        -webkit-animation: all 0.6s;
        -o-animation: all 0.6s;
    }
    .quicklinks li a.imgtext:hover img{
        transform: scale(1.1,1.1);
        -moz-transform:scale(1.1,1.1);
        -webkit-transform:scale(1.1,1.1);
        -o-transform:scale(1.1,1.1);
    }

    .quicklinks li a.imgtitle{
        color: #000;
    }

    .quicklinks li .text {
        width: 100%;
        height: 24px;
        line-height: 24px;
        font-size: 24px;
        color: #fff;
        text-align: center;
        position: absolute;
        top: 50%;
        margin-top: -12px;
        z-index: 2;
    }

    li .mask {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;

    }
    .classifyselected li .mask{
        border-radius: 50%;
    }

    li .imgtitle {
        width: 100%;
        height: 24px;
        line-height: 24px;
        text-align: center;
        margin-top: 10px;
        font-size: 24px;
    }

    /*城市精选专题*/

    /*分类精选*/
    .classifyselected li {
        float: left;
        width: 150px;
        height: 185px;
        margin-right: 55px;
        position: relative;
        cursor: pointer;
    }

    .classifyselected li:last-child {
        margin-right: 0;
    }

    .classifyselected li a {
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 75px;
        position: relative;
    }

    .classifyselected li .numb {
        width: 60px;
        height: 60px;
        background: #000;
        line-height: 60px;
        border-radius: 30px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        position: absolute;
        top: 45px;
        right: -30px;
        z-index: 2;
    }

    .classifyselected li .numb {
        transition: All 1s;
        -webkit-transition: All 1s;
        -moz-transition: All 1s;
        -o-transition: All 1s;
    }
    .classifyselected li:hover .numb {
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -o-transform: scale(1.2);
        -ms-transform: scale(1.2);
    }

    /**小圆转一圈效果**/
    /*.classifyselected li:hover .numb {*/
    /*transform-origin: -82px 85px;*/
    /*-webkit-transform-origin: -82px 85px;*/

    /*transform: rotate(360deg);*/
    /*-webkit-transform: rotate(360deg);*/
    /*-moz-transform: rotate(360deg);*/
    /*-o-transform: rotate(360deg);*/
    /*-ms-transform: rotate(360deg);*/
    /*}*/

    .citysubject.section {
        width: 100%;
        min-width: 1200px;
        overflow: hidden
    }

    .citysubject h3 {
        width: 1200px;
        margin: 0 auto;
        font-size: 24px;
        height: 24px;
        line-height: 24px;
        margin-bottom: 30px;
    }

    .citysubject .cont {
        width: 100%;
        height: 235px;
        min-width: 1200px;
        overflow: hidden;
        position: relative;
    }

    /*空间推荐*/
    .recommend-main {
        margin-bottom: 20px;
    }

    .recommend-main li .tags {
        top: 10px;
    }

    .recommend-main .price {
        margin-bottom: 15px;
    }

    /*IP文创项目*/
    .ipwinchuang li {
        float: left;
        background: #fff;
        width: 595px;
        height: 200px;
        margin-right: 10px;
        margin-bottom: 10px;
        overflow: hidden;
        position: relative;
    }

    .ipwinchuang li:nth-child(2n+2) {
        margin-right: 0;
    }

    .ipwinchuang .maskbtn {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, .8);
        position: absolute;
        left: 0;
        bottom: -205px;
        /*opacity: 0;*/
        /*filter: alpha(opacity=0);*/
    }

    .ipwinchuang .maskbtn p,.ipwinchuang .maskbtn button {
        background: #272335;
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -60px;
        margin-top: -20px;

    }

    .ipwinchuang li:hover .maskbtn {
        bottom: 0;
        /*opacity: 1;*/
        /*filter: alpha(opacity=100);*/
    }

    .ipwinchuang li .img {
        float: left;
        width: 300px;
        height: 200px;
        background: #ddd;
        overflow: hidden;
    }

    .ipwinchuang .textinfo {
        float: left;
        width: 275px;
        padding: 0 10px;
    }

    .ipwinchuang .textinfo .title {
        font-size: 18px;
        padding: 18px 0 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ipwinchuang .textinfo .tags {
        margin-bottom: 10px;
    }

    .ipwinchuang .textinfo .tags span {
        margin-right: 20px;
    }

    .ipwinchuang .textinfo p {
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ipwinchuang .textinfo .group p {
        float: left;
        margin-right: 20px;
    }

    /*场地配套服务*/
    .ipwinchuang .cont {
        position: relative;
    }

    /*新发现*/
    .newfound .info {
        background: #fff;
    }

    .newfound .info .img {
        background: #ddd;
        overflow: hidden;
    }

    .newfound .info-big {
        float: left;
        width: 377px;
        height: 419px;
    }

    .newfound .info-big .img {
        width: 378px;
        height: 350px;
        display: block;
    }

    .newfound .info-big .text {
        font-size: 18px;
        margin: 9px 15px;
        display: block;
        height: 48px;
        overflow: hidden;
    }

    .newfound .infolist {
        width: 420px;
    }

    .newfound .info-normal {
        float: left;
        width: 200px;
        height: 205px;
        margin: 0 0 10px 10px;
    }

    .newfound .info-normal .img {
        float: left;
        width: 100%;
        height: 133px;
    }

    .newfound .info-normal .text {
        float: left;
        margin: 16px 10px;
        height: 40px;
        overflow: hidden;

        display: -webkit-box;  /*将对象作为弹性盒子模型显示*/
        text-overflow:ellipsis;
        word-break:break-all;
        -webkit-box-orient:vertical;/*伸缩盒对象的子元素的排列方式-垂直*/
        -webkit-line-clamp:2; /*限制在一个块级元素显示的文本的行数*/
    }

    .textinfolist {
        width: 378px;
    }
    .media.textinfolist{
        width: 582px;
        float: left;
        margin-right: 35px;
    }

    .mediacoverage .media.textinfolist li{
        height: auto;
        padding: 0;
        padding-top: 15px;
        padding-bottom: 5px;
    }
    .mediacoverage .media-wrap{
        margin-right: -35px;margin-top: -15px
    }
    .mediacoverage .media.textinfolist li .title{
        height: auto;
        margin-bottom: 0;
        font-size: 15px;
    }
    .mediacoverage .media.textinfolist li > a p{
        width: 490px;
        overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
    }
    .mediacoverage .media.textinfolist .time{
        line-height: 22px;
    }

    .textinfolist li {
        max-height: 86px;
        overflow: hidden;
        border-bottom: 2px solid #979797;
        padding: 8px 0;
    }

    .textinfolist li>a{width: 100%;}

    .textinfolist .title {
        font-size: 18px;
        color: #000;
        position: relative;
        margin-bottom: 5px;
    }

    .newfound .textinfolist .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .textinfolist .title .point {
        display: block;
        width: 5px;
        height: 5px;
        background: #000;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 10px;
    }
    .newfound .textinfolist .title>p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .newfound .textinfolist li a>p{
        display: -webkit-box;  /*将对象作为弹性盒子模型显示*/
        text-overflow:ellipsis;
        word-break:break-all;
        -webkit-box-orient:vertical;/*伸缩盒对象的子元素的排列方式-垂直*/
        -webkit-line-clamp:3; /*限制在一个块级元素显示的文本的行数*/
    }
    .textinfolist li p {
        max-height: 58px;
        overflow: hidden;
        padding-left: 15px;
        line-height: 1.4;
    }


    /*精选案例*/
    .caseselected .cont > li {
        float: left;
        width: 392px;
        height: 420px;
        background: #fff;
        margin-right: 10px;
        margin-bottom: 10px;
        position: relative;
    }

    .caseselected li:nth-child(3n) {
        margin-right: 0;
    }

    .caseselected .img {
        width: 100%;
        height: 264px;
        background: #ddd;
        overflow: hidden;
    }

    .caseselected .title {
        color: #000;
        font-size: 18px;
        padding-bottom: 5px;
        height: 58px;
        overflow: hidden;
        box-sizing: border-box;

        display: -webkit-box;  /*将对象作为弹性盒子模型显示*/
        text-overflow:ellipsis;
        word-break:break-all;
        -webkit-box-orient:vertical;/*伸缩盒对象的子元素的排列方式-垂直*/
        -webkit-line-clamp:2; /*限制在一个块级元素显示的文本的行数*/
    }

    .caseselected .textinfo {
        padding: 8px 10px 12px;
    }

    .caseselected .tags span {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        padding: 0 20px;
        background: #fff;
        border: 1px solid #000;
        color: #666;
        margin-right: 5px;
        margin-top: 5px;
    }

    .caseselected .numbs {
        position: absolute;
        right: 15px;
        bottom: 15px;
        color: #666;
    }

    .caseselected .numbs li {
        position: relative;
        height: 25px;
        line-height: 25px;
        padding-left: 32px;
        margin-left: 30px;
    }

    .caseselected .numbs i {
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
    }

    i.scan {
        background: url("/static/images/home/icon-scan.png") no-repeat center;
    }

    i.zan {
        background: url("/static/images/home/icon-zan.png") no-repeat center;
    }

    /*媒体报道*/
    .mediacoverage .textinfolist li {
        height: 70px;
        padding-top: 7px;
        overflow: hidden;
    }

    .mediacoverage .textinfolist li > a {
        width: 100%;
    }

    .mediacoverage .textinfolist li > a p{
        color: #000;
    }

    .mediacoverage .textinfolist .title {
        height: 48px;
        overflow: hidden;
    }

    .mediacoverage .textinfolist .time {
        text-align: right;
    }

    .imglogo-media {
        width: 795px;
        height: 320px;
        padding: 15px 0;
        overflow: hidden;
        background: #fff;
    }

    /*合作品牌*/
    .logofriends .cont {
        width: 1200px;
        height: 157px;
        background: #fff;
    }

    /*swiper*/
    .citySelection .btns{
        z-index: 99;
    }
</style>