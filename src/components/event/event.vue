<template>
    <div>
        <!--第一部分banner等-开始-->
        <div class="w1200 mt20 clearfix">
            <!--搜索部分-开始-->
            <div class="fl section-search">
                <div class="mask"></div>
                <div class="search">
                    <h2>找到适合你的活动空间</h2>
                    <div class="inputbox clearfix">
                        <input class="searchInputVal" v-model="homeSearchCondition.q.keyword" type="text" placeholder="商圈／地标／机场／火车站／场地名">
                        <button class="searchbtn" @click="goSpaceSearch">搜&nbsp;索</button>
                    </div>
                    <div class="hot clearfix">
                        <p>热点：</p>
                        <div class="hotlist">
                            <router-link v-for="item in cityHotKeyword" :to="{ path: '/spaces', query: { q : item }}">
                                {{item}}
                            </router-link>
                            <!--<router-link :to="{ path: '/spaces', query: { q : '奢居会' }}">奢居会</router-link>-->
                        </div>
                    </div>
                </div>
            </div>
            <!--搜索部分-结束-->

            <div class="form-holdenent">
                <div class="title">我要办活动</div>
                <ul class="inputbox">
                    <li class="selectwrap">
                        <!--活动人数-->
                        <el-select v-model="demand.number_of_activities" placeholder="您的活动人数?">
                            <!--<el-option-->
                                    <!--v-for="(value,key) in searchCondition.activity_people"-->
                                    <!--:label="value"-->
                                    <!--:value="key">-->
                            <!--</el-option>-->
                        </el-select>
                    </li>
                    <li class="selectwrap">
                        <!--活动类型-->
                        <el-select v-model="demand.activity_type" placeholder="您的活动类型?">
                            <!--<el-option-->
                                    <!--v-for="(v,k) in searchCondition.activity_type"-->
                                    <!--:label="v"-->
                                    <!--:value="k">-->
                            <!--</el-option>-->
                        </el-select>
                    </li>
                    <li class="text">省时，省心，找你所想...</li>
                    <li>
                        <button class="holdeventbtn" @click="gotoHoldEvent">下一步</button>
                    </li>
                </ul>
            </div>
        </div>
        <!--第一部分banner等-结束-->

        <!--主题部分-开始-->
        <div class="w1200 mt20 eventsbox clearfix">
            <!--左边-开始-->
            <div class="fl left">
                <!--专题-->
                <div class="subject mb20">
                    <div class="evtitle clearfix">
                        <h3>专题</h3>
                        <router-link to="/found" class="more">查看更多<i class="icon icon-arrowright"></i></router-link>
                        <!--<a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>-->
                    </div>
                    <ul class="cont clearfix">
                        <li v-for="item in subjects">
                            <a :href="item.special_url ? item.special_url : '/article/' + item.id" target="_blank">
                                <div class="img">
                                    <img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" />
                                </div>
                                <div class="text">
                                    <h5 v-text="item.title"></h5>
                                    <p v-text="item.abstract"></p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <!--分类-->
                <div class="classfiy mb20">
                    <div class="evtitle">
                        <h3>分类</h3>
                    </div>
                    <ul class="cont classfiylist clearfix">
                        <li class="art" @click="spaceSearchTypeFixed(115)">
                            <i class="icons"></i>
                            <p>艺术画廊</p>
                        </li>
                        <li class="show" @click="spaceSearchTypeFixed(113)">
                            <i class="icons"></i>
                            <p>秀场展馆</p>
                        </li>
                        <li class="business"  @click="spaceSearchTypeFixed(114)">
                            <i class="icons"></i>
                            <p>商业广场</p>
                        </li>
                        <li class="starbusiness"  @click="spaceSearchTypeFixed(120)">
                            <i class="icons"></i>
                            <p>星级酒店</p>
                        </li>
                        <!--<li class="more"  @click="router.push('/spaces')">-->
                        <!--<i class="icons"></i>-->
                        <!--<p>查看更多</p>-->
                        <!--</li>-->
                        <router-link class="more" tag="li" to="/spaces?type=all">
                            <i class="icons"></i>
                            <p>查看更多</p>
                        </router-link>
                    </ul>
                </div>
                <!--分类-结束-->

                <!--场馆推荐-开始-->
                <div class="recommend venues-recommend mb20">
                    <div class="evtitle clearfix">
                        <h3>场馆推荐</h3>
                        <router-link to="/spaces?type=all" class="more">查看更多<i class="icon icon-arrowright"></i></router-link>
                    </div>
                    <ul class="cont clearfix">
                        <li v-for="item in venues">
                            <div class="img">
                                <router-link :to="'/site/dtl/'+item.site_id">
                                    <img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''" />
                                    <!--<img :src="item.logo">-->
                                </router-link>
                            </div>
                            <div class="text">
                                <a class="title" target="_blank" :href="'/site/dtl/'+item.site_id" v-html="item.site_name"></a>
                                <div class="price">{{item.special_price}}</div>
                                <div class="textinfo">
                                    <p><span>场地类型：</span>{{item.site_type}}</p>
                                    <div class="numb clearfix">
                                        <p><span>面积：</span>{{item.area}}㎡</p>
                                        <p><span>层高：</span>{{item.height}}m</p>
                                        <p><span>人数：</span>{{item.site_max_people}}人</p>
                                    </div>
                                    <p><span>地址：</span>{{item.city_name}}&nbsp;{{item.areas}} | {{item.address}}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--场馆推荐-结束-->

                <!--活动案例-开始-->
                <div class="recommend evcases mb20">
                    <div class="evtitle clearfix">
                        <h3>活动案例</h3>
                        <router-link to="/found?newsType=16&selectType=newsType&selectTypeKey=16" class="more">查看更多<i class="icon icon-arrowright"></i></router-link>
                        <!--<a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>-->
                    </div>
                    <ul class="cont clearfix">
                        <li v-for="eventcase in eventcases">
                            <a class="img" :href="'/article/'+eventcase.id" target="_blank">
                                <img :src="eventcase.img_paths.length > 0 ? eventcase.img_paths[0]['url_400_267'] : ''" />
                            </a>
                            <div class="text">
                                <a class="title" target="_blank" :href="'/article/'+eventcase.id" v-text="eventcase.title"></a>
                                <p v-html="eventcase.abstract"></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--活动案例-结束-->
            </div>
            <!--左边-结束-->

            <!--右边-开始-->
            <div class="fr right">
                <!--TOP榜-->
                <div class="toplist mb20">
                    <div class="evtitle clearfix">
                        <h3>TOP榜</h3>
                        <router-link to="/found" class="more">查看更多<i class="icon icon-arrowright"></i></router-link>
                        <!--<a class="more" href="javascript:;">查看更多<i class="icon icon-arrowright"></i></a>-->
                    </div>
                    <ul class="cont">
                        <li v-for="toplist in toplists">
                            <router-link :to="'/article/'+toplist.id">
                                <img :src="toplist.img_paths.length > 0 ? toplist.img_paths[0]['url_329_400'] : ''" />
                                <div class="title" v-text="toplist.title"></div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!--右边-结束-->
        </div>
        <!--主题部分-结束-->
    </div>


</template>
<script>
    function fetchData(store) {
//        store.commit('LOADING', true)
        return store.dispatch(`getEventData`).then(() => {store.commit('LOADING', false)})
    }
    export default{
        data(){
            return {
                selectEventType : '',
                banners:[ ],
                valnumbs: '选项一',
                subjects: [ ],
                venues: [ ],
                discounts: [ ],
                disrate:[ ],
                eventcases: [ ],
                toplists: [ ],
                demand : {
                    phone : '',
                    contact : '',
                    order_city : 1,
//                    number_of_activities : "50",
                    number_of_activities : null,
                    time : ['',''],
                    user_id : 1,
                    activity_type : '',
//                    activity_type : '零售短租',
                    auth_code : '',
                    activities_required : '',
                    code_token : '',
                    s_time:'',
                    e_time:'',
                    ip_city:'上海'
                },
                homeSearchCondition : {
//                    city_id : 1,
                    project_type : '',
                    doWhat : '',
                    q : {
                        site_site_type_eq : '',
                        keyword : ''
                    }
                }

            }
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
                    var swiper = new Swiper('.event-swiper', {
                        nextButton: '.yun-swiper-next',
                        prevButton: '.yun-swiper-prev',
                        pagination: '.swiper-pagination',
                        paginationClickable :true,
                        autoplay: 3000
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

<style scoped>
    .el-select .el-input .el-input__inner{text-indent: 10px;}
</style>