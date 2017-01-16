<template>
    <div class="space-dtl-wrap">
        <!--logo-->

        <div class="w1200">
            <div class="events-container clearfix">
                <div class="fl left">
                    <div class="banner-cont bgwhite">
                        <div class="title">
                            <h2>{{spaceDtl.name}}</h2>
                            <p class="addr">区域位置 : {{spaceDtl.city_name}} | {{spaceDtl.district}} | {{spaceDtl.address}}</p>
                            <!--<a @click="changeCollect" href="javascript:;" class="collect">-->
                                <!--<i class="icons" :class="[ spaceDtl.follow == true? 'icon-collect-hv' : 'icon-collect']"></i>-->
                                <!--<span>收藏</span>-->
                            <!--</a>-->
                        </div>
                        <div class="banner" >
                            <div class="swiper-container banner-swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="item in spaceDtl.img_paths">
                                        <img class="imgload" :src="item.url_790_526" :alt="item.url_790_526" />
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
                                <div class="yun-swiper-prev" v-if="spaceDtl.img_paths.length > 1">
                                    <span class="icon-arrowleft"></span>
                                </div>
                                <div class="yun-swiper-next" v-if="spaceDtl.img_paths.length > 1">
                                    <span class="icon-arrowright"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-dtl bgwhite">
                        <ul class="dtl-tap-top clearfix ">
                            <li v-on:click="tapClick" :class="'空间详情' == activeTab ? 'current' : ''" href="javascript:;">空间详情</li>
                            <li v-on:click="tapClick" :class="'空间配套' == activeTab ? 'current' : ''" href="javascript:;">空间配套</li>
                            <li v-on:click="tapClick" :class="'场地介绍' == activeTab ? 'current' : ''" href="javascript:;">场地介绍</li>
                        </ul>
                        <div>
                            <div class="dtl-content" v-if="activeTab=='空间详情'">

                                <div class="tap-content">

                                    <div class="clearfix">
                                        <div class="p3">
                                            <div class="clearfix"><p>最大容量 : </p><p>{{spaceDtl.Max_seating_capacity}}人</p></div>
                                            <!--<div class="clearfix"><p>空间承重 : </p><p>4m</p></div>-->
                                            <div class="clearfix"><p>空间承重 : </p><p>{{spaceDtl.accept_weight}}</p></div>
                                        </div>
                                        <div class="p3">
                                            <div class="clearfix"><p>空间面积 : </p><p>{{spaceDtl.area}}㎡</p></div>
                                            <!--<div class="clearfix"><p>活动类型 : </p><p>文体娱乐｜会议会务｜培训演讲｜新闻发布</p></div>-->
                                            <div class="clearfix"><p>活动类型 : </p><p>{{spaceDtl.service_type}}</p></div>
                                        </div>
                                        <div class="p3">
                                            <div class="clearfix"><p>空间层高 : </p><p>{{spaceDtl.height}}m</p></div>
                                        </div>
                                    </div>
                                    <div class="price-dtl">
                                        <div class="clearfix">
                                            <div class="price-num fl">
                                                <p></p>
                                                <p>{{spaceDtl.special_price}}</p>
                                                <p v-if="spaceDtl.market_price != '面议'">{{spaceDtl.market_price}}</p>
                                            </div>
                                            <!--<div class="price-op fr">-->
                                                <!--<router-link :to=" '/booking/' + spaceDtl.id" class="btn-dark btn-now">立即预订</router-link>-->
                                                <!--&lt;!&ndash;<button class="btn-schedule btn-dark">档期日历 <i class="icon-arrowbottom"></i></button>&ndash;&gt;-->
                                                <!--<button @click="addInquiry(spaceDtl.id,spaceDtl.name)" class="btn-add btn-dark btn-inquiry"-->
                                                        <!--:class="{'hv' : inquiryList.hasOwnProperty(spaceDtl.id)}"-->
                                                        <!--v-text="inquiryList.hasOwnProperty(spaceDtl.id) ? '已加入询价' : '加入询价' ">加入批量询价</button>-->
                                            <!--</div>-->
                                        </div>
                                        <h6>套餐信息</h6>
                                        <p>{{spaceDtl.set_info}}</p>
                                        </p>
                                        <h6>预订须知</h6>
                                        <p>{{spaceDtl.booking_notes}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="dtl-content" v-if="activeTab=='空间配套'">
                                <ul class="cont classfiylist clearfix">
                                    <li :class="assortList[item]" v-for="item in arrSort">
                                        <i class="icons"></i>
                                        <p>{{item}}</p>
                                    </li>
                                    <!--<li class="wc">-->
                                    <!--<i class="icons"></i>-->
                                    <!--<p>洗手间</p>-->
                                    <!--</li>-->
                                    <!--<li class="rest">-->
                                    <!--<i class="icons"></i>-->
                                    <!--<p>休息室</p>-->
                                    <!--</li>-->
                                    <!--<li class="dressing">-->
                                    <!--<i class="icons"></i>-->
                                    <!--<p>化妆间</p>-->
                                    <!--</li>-->
                                    <!--<li class="air-con">-->
                                    <!--<i class="icons"></i>-->
                                    <!--<p>空调暖气</p>-->
                                    <!--</li>-->
                                    <!--<li class="wifi">-->
                                    <!--<i class="icons"></i>-->
                                    <!--<p>网络WIFI</p>-->
                                    <!--</li>-->
                                    <!--<li class="led">-->
                                    <!--<i class="icons"></i>-->
                                    <!--<p>投影LED</p>-->
                                    <!--</li>-->
                                    <!--<li class="video">-->
                                    <!--<i class="icons"></i>-->
                                    <!--<p>灯光音响</p>-->
                                    <!--</li>-->
                                </ul>
                            </div>
                            <div class="dtl-content" v-if="activeTab=='场地介绍'" style="padding: 20px">
                                <p v-html="spaceDtl.introduced"></p>
                            </div>
                        </div>

                    </div>
                    <!--<div v-if="relateTopic.length > 0">-->
                        <!--<h5>相关专题</h5>-->
                        <!--<div class="relative-topic yun-swiper-wrap2">-->
                            <!--<div class="swiper-container relative-topic-swiper">-->
                                <!--<div class="swiper-wrapper">-->
                                    <!--<div class="swiper-slide topic-pic" v-for="item in relateTopic">-->
                                        <!--<router-link :to="item.special_url ? item.special_url : '/article/' + item.id">-->
                                            <!--<img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" alt="">-->
                                            <!--<p class="text">{{item.title}}</p>-->
                                        <!--</router-link>-->

                                    <!--</div>-->
                                    <!--&lt;!&ndash;<div class="swiper-slide topic-pic">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<img src="http://placehold.it/390x260" alt="">&ndash;&gt;-->
                                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<div class="swiper-slide topic-pic">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<img src="http://placehold.it/390x260" alt="">&ndash;&gt;-->
                                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                <!--</div>-->
                                <!--&lt;!&ndash; Add Pagination &ndash;&gt;-->
                                <!--&lt;!&ndash;<div class="swiper-pagination"></div>&ndash;&gt;-->
                                <!--&lt;!&ndash; Add Arrows &ndash;&gt;-->
                                <!--<div class="yun-swiper-prev">-->
                                    <!--<span class="icon-arrowleft white"></span>-->
                                <!--</div>-->
                                <!--<div class="yun-swiper-next">-->
                                    <!--<span class="icon-arrowright white"></span>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<h5>同类空间推荐</h5>-->
                    <!--<div class="topic-same-kind">-->
                        <!--<ul class="recommend recommend-sub topic-list-piece clearfix">-->
                            <!--<li v-for="item in sameSpaces">-->
                                <!--<div class="img">-->
                                    <!--<router-link :to="'/space/'+item.id">-->
                                        <!--<img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''">-->
                                    <!--</router-link>-->
                                    <!--&lt;!&ndash;<a href="/space/dtl" target="_blank">&ndash;&gt;-->
                                    <!--&lt;!&ndash;&ndash;&gt;-->
                                    <!--&lt;!&ndash;</a>&ndash;&gt;-->
                                <!--</div>-->
                                <!--<div class="text">-->
                                    <!--<router-link class="title" :to="'/space/'+item.id">{{item.name}}</router-link>-->
                                    <!--&lt;!&ndash;<a class="title" href="javascript:;">{{item.name}}</a>&ndash;&gt;-->
                                    <!--<div class="textinfo">-->
                                        <!--<p>最大容纳：{{item.Max_seating_capacity}}人</p>-->
                                        <!--<p>空间面积：{{item.area}}㎡</p>-->
                                        <!--<p>地理位置：{{item.address}}</p>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</li>-->
                        <!--</ul>-->
                    <!--</div>-->
                </div>
                <!--侧边栏-->
                <div class="fr right">
                    <div class="evdtllist bgwhite">
                        <div class="title  clearfix">
                            <img :src="spaceDtl.logo" onerror="javascript:this.src='/static/images/avatar.png';" alt="" />
                            <div class="title-dtl">
                                <h2>{{spaceDtl.site_name}}</h2>
                                <dl><dt>场地类型 : </dt><dd>{{spaceDtl.site_type}}</dd></dl>
                                <dl><dt>区域位置 : </dt><dd>{{spaceDtl.address}}</dd></dl>
                            </div>
                        </div>
                        <div class="cont clearfix">
                            <dl><i class="icons icon-pnumbs"></i>
                                <dt>最大容纳 :</dt>
                                <dd> {{spaceDtl.site_max_people}}人</dd>
                            </dl>
                            <dl><i class="icons icon-assort"></i>
                                <dt>场地配套 : </dt>
                                <dd>
                                    <!--<span>洗手间</span>｜-->
                                    <!--<span>化妆间</span>｜-->
                                    <!--<span>空调暖气</span>｜-->
                                    <!--<span>网络WIFI</span> ｜-->
                                    <!--<span>货运电梯</span>｜-->
                                    <!--<span>灯光音响</span>｜-->
                                    <!--<span>投影LED</span>-->
                                    {{spaceDtl.supporting_facilities}}
                                </dd>
                            </dl>
                            <dl><i class="icons icon-busintype"></i>
                                <dt>行业类型 : </dt>
                                <dd>
                                    <!--<span>通用</span> ｜-->
                                    <!--<span>IT类</span>｜-->
                                    <!--<span>公益事业</span>｜-->
                                    <!--<span>教育</span>｜-->
                                    <!--<span>通讯</span>-->
                                    {{spaceDtl.industry_field}}
                                </dd>
                            </dl>
                            <dl><i class="icons icon-evtype"></i>
                                <dt>活动类型 : </dt>
                                <dd>
                                    <!--<span>文体娱乐</span>｜-->
                                    <!--<span>会议会务</span>｜-->
                                    <!--<span>培训演讲</span>-->
                                    {{spaceDtl.service_type}}
                                </dd>
                            </dl>
                            <router-link :to="'/site/'+spaceDtl.site_id" class="btn-dark understand-btn">了解场地</router-link>
                            <!--<a class="btn-dark understand-btn">了解场地</a>-->

                        </div>
                        <div class="cont bt1">
                            <h6 class="tip">推荐理由</h6>
                            <dl><i class="icons icon-zan-red"></i>
                                <!--<dd>酒店｜特色类型</dd>-->
                                <dd>{{spaceDtl.reasons}}</dd>
                            </dl>
                        </div>


                    </div>
                    <div class="map" id="spaceMap"></div>
                    <!--<div class="other-space" v-if="otherSpace.length > 0">-->
                        <!--<h4>{{spaceDtl.site_name}}的其他空间</h4>-->
                        <!--<ul>-->
                            <!--<li class="clearfix" v-for="item in otherSpace">-->
                                <!--<router-link class="img" :to="'/space/'+item.id">-->
                                    <!--<img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" alt="">-->
                                <!--</router-link>-->
                                <!--&lt;!&ndash;<a class="img" :href="'/space/'+item.id">&ndash;&gt;-->
                                <!--&lt;!&ndash;<img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" alt="">&ndash;&gt;-->
                                <!--&lt;!&ndash;</a>&ndash;&gt;-->
                                <!--&lt;!&ndash;<router-link :to="'/space/'+item.id"><img :src="item.img_paths.url" alt=""></router-link>&ndash;&gt;-->
                                <!--<div class="dtl-s">-->
                                    <!--&lt;!&ndash;<a href="">{{item.name}}</a>&ndash;&gt;-->
                                    <!--<router-link :to="'/space/'+item.id" replace>{{item.name}}</router-link>-->
                                    <!--<dl><dt>最大容纳 : </dt><dd>{{item.Max_seating_capacity}}人</dd></dl>-->
                                    <!--<dl><dt>落位区域 : </dt><dd>{{item.through_three_areas}}</dd></dl>-->
                                    <!--<dl><dt>空间面积 : </dt><dd>{{item.area}}㎡</dd></dl>-->
                                <!--</div>-->
                            <!--</li>-->
                            <!--&lt;!&ndash;<li class="clearfix">&ndash;&gt;-->
                            <!--&lt;!&ndash;<a href=""><img src="http://placehold.it/150x100" alt=""></a>&ndash;&gt;-->
                            <!--&lt;!&ndash;<div class="dtl-s">&ndash;&gt;-->
                            <!--&lt;!&ndash;<a>04－中会议室</a>&ndash;&gt;-->
                            <!--&lt;!&ndash;<dl><dt>最大容纳 : </dt><dd>800人</dd></dl>&ndash;&gt;-->
                            <!--&lt;!&ndash;<dl><dt>落位区域 : </dt><dd>三楼会议室</dd></dl>&ndash;&gt;-->
                            <!--&lt;!&ndash;<dl><dt>空间面积 : </dt><dd>220m</dd></dl>&ndash;&gt;-->
                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                            <!--&lt;!&ndash;</li>&ndash;&gt;-->
                        <!--</ul>-->
                    <!--</div>-->
                    <!--<button class="key-enquiry-btn">-->
                    <!--一键询价-->
                    <!--<span class="enquiry-num">0</span>-->
                    <!--</button>-->
                    <!--<router-link class="key-enquiry-btn" to="/inquiry">-->
                        <!--一键询价-->
                        <!--<span class="enquiry-num">{{inquiryCount}}</span>-->
                    <!--</router-link>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    function fetchData(store){
        store.commit('LOADING', true)
        return store.dispatch(`getSpaceDtlData`,{
            id : store.state.route.params.id
        }).then(() => {
                    store.commit('LOADING', false)
                })
    }
    export default {
        data() {
            return {
                phone: '',
                password: '',
                username: '',
                activeTab: '空间详情',
                spacesubs: [
                    1, 2, 3, 4
                ],
                otherSpace: [],
                relateTopic: [],
                sameSpaces: [],
                changeCollectPromise: '',
                assortList: {
                    '卫生间':'wc',
                    '化妆间':'dressing',
                    '休息室':'rest',
                    '空调暖气':'air-con',
                    '网络WIFI':'wifi',
                    '投影LED':'led',
                    '灯光音响':'video',
                    '空间吊点':'lifting',
                    '停车泊位':'parking',
                    '货运电梯':'cargo-lift',
                    '餐饮':'dining'
                },
                arrSort:[]
            }
        },
        metaInfo(){

            return {
                title: this.title,
                meta: [
                    { vmid: 'description', name: 'description', content: this.description }
                ]
            }
        },


        components: {},
        mounted () {
            var self = this
//            this.$store.commit('LOADING', false)
            if(self.spaceDtl.img_paths.length > 1){
                var swiper = new Swiper('.banner-swiper', {
                    nextButton: '.yun-swiper-next',
                    prevButton: '.yun-swiper-prev',
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    paginationHide:true,
                    autoplay: 3000
                });
            }
        },
        computed : {
            spaceDtl(){
                return this.$store.state.SpaceDtlData.dtl
            },
            title(){
                return this.$store.state.SpaceDtlData.dtl.name
            }
        },
        preFetch: fetchData,

        beforeMount () {
            fetchData(this.$store)
        },
        methods:{
            tapClick(event){
                this.activeTab = event.target.innerHTML;
            },
        }
    }

</script>
<style>
    body .swiper-button-next{
        right: 0;
        left: auto;
        padding: 20px 5px;
        background-color: rgba(255,255,255,.5);
    }

    ul.topic-list-piece{
        margin-right: -10px;
    }
    .anchorBL{
        display: none;
    }
</style>






