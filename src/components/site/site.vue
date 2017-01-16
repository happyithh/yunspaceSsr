<template>
    <div>
        <div class="w1200 events-dtlbox clearfix">
            <div class="spacedtl clearfix">
                <div class="fl logo"><img :src="placeDtl.logo" width="100%" height="100%"></div>
                <div class="fl evdtlcont">
                    <div class="title">
                        <h2>{{placeDtl.title}}</h2>
                        <div class="icons-text">
                            <i class="icons icon-place"></i>
                            <p class="title">区域位置：{{placeDtl.city_name}} | {{placeDtl.district}} | {{placeDtl.address}}</p>
                        </div>
                        <!--<a @click="changeCollect" href="javascript:;" class="collect">-->
                            <!--<i class="icons" :class="[ placeDtl.follow == true ? 'icon-collect-hv' : 'icon-collect']"></i>-->
                            <!--<span>收藏</span>-->
                        <!--</a>-->
                    </div>
                    <div class="intro">
                        <h5>场地介绍</h5>
                        <p>{{placeDtl.brand_story}}</p>
                    </div>
                    <div class="reason">
                        <h6>推荐理由</h6>
                        <div class="icons-text">
                            <i class="icons icon-zan-red"></i>
                            <p class="title">{{placeDtl.recommend_reason}}</p>
                        </div>
                    </div>
                </div><!--evdtlcont-end-->
                <div class="fr evdtllist">
                    <div class="title">
                        <i class="icons icon-space"></i>
                        <p>拥有<span class="red">{{placeDtl.count_space}}</span>个空间</p>
                    </div>
                    <div class="cont">
                        <dl>
                            <i class="icons icon-pnumbs"></i>
                            <dt>最大容纳</dt>
                            <dd>{{placeDtl.max_people}}人</dd>
                        </dl>
                        <dl>
                            <i class="icons icon-assort"></i>
                            <dt>场地配套</dt>
                            <dd>
                                {{placeDtl.facilities}}
                                <!--<span>洗手间</span>｜-->
                                <!--<span>化妆间</span>｜-->
                                <!--<span>空调暖气</span>｜-->
                                <!--<span>网络WIFI</span> ｜-->
                                <!--<span>货运电梯</span>｜-->
                                <!--<span>灯光音响</span>｜-->
                                <!--<span>投影LED</span>-->
                            </dd>
                        </dl>
                        <dl>
                            <i class="icons icon-busintype"></i>
                            <dt>行业类型</dt>
                            <dd>
                                <!--<span>通用</span> ｜-->
                                <!--<span>IT类</span>｜-->
                                <!--<span>公益事业</span>｜-->
                                <!--<span>教育</span>｜-->
                                <!--<span>通讯</span>-->
                                {{placeDtl.industry_field}}
                            </dd>
                        </dl>
                        <dl>
                            <i class="icons icon-evtype"></i>
                            <dt>活动类型</dt>
                            <dd>
                                <!--<span>文体娱乐</span>｜-->
                                <!--<span>会议会务</span>｜-->
                                <!--<span>培训演讲</span>-->
                                {{placeDtl.service_type}}
                            </dd>
                        </dl>
                    </div>
                </div><!--evdtllist-end-->
            </div>
            <!--spacedtl-end-->

            <!--内容部分-->
            <div class="spacecont clearfix">
                <div class="fl left">
                    <div class="spacetitle">场地空间</div>
                    <ul class="recommend clearfix">
                        <li v-for="item in spaces">
                            <div class="img">
                                <router-link :to="'/space/'+item.id">
                                    <img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''">
                                </router-link>
                            </div>
                            <div class="text">
                                <router-link class="title" :to="'/space/'+item.id">
                                    {{item.name}}
                                </router-link>
                                <!--<a class="title" href="javascript:;">{{item.name}}</a>-->
                                <div class="textinfo">
                                    <p>最大容纳：{{item.Max_seating_capacity}}人</p>
                                    <p>落位区域：{{item.through_three_areas}}</p>
                                    <p>空间面积：{{item.area}}㎡</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="fr right">
                    <!--相关专题-->
                    <div class="rtsubject">
                        <div class="spacetitle">相关专题</div>
                        <ul class="rtspacelist">
                            <li class="clearfix" v-for="item in relate_topics">
                                <router-link class="fl img" :to="item.special_url ? item.special_url : '/article/' + item.id">
                                    <img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_150_100'] : ''">
                                </router-link>
                                <!--<a class="fl img" href="javascript:;">-->
                                <!--<img src="">-->
                                <!--</a>-->
                                <router-link class="fr text" :to="item.special_url ? item.special_url : '/article/' + item.id">
                                    {{item.title}}
                                </router-link>
                                <!--<a class="fr text" href="javascript:;">-->
                                <!--{{item.title}}-->
                                <!--</a>-->
                            </li>
                            <!--<li class="clearfix">-->
                            <!--<a class="fl img" href="javascript:;">-->
                            <!--<img src="">-->
                            <!--</a>-->
                            <!--<a class="fr text" href="javascript:;">-->
                            <!--魔都最具创意的十大会务中心，不仅仅只是为了开会-->
                            <!--</a>-->
                            <!--</li>-->
                        </ul>
                    </div>

                    <!--相关资讯-->
                    <div class="rtinformation">
                        <div class="spacetitle">相关资讯</div>
                        <ul class="rtspacelist">
                            <li class="clearfix" v-for="item in relate_articles">
                                <router-link class="fl img" :to="'/article/'+item.id">
                                    <img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_150_100'] : ''">
                                </router-link>
                                <!--<a class="fl img" href="javascript:;">-->
                                <!--<img src="">-->
                                <!--</a>-->
                                <router-link class="fr text" :to="'/article/'+item.id">
                                    {{item.title}}
                                </router-link>
                                <!--<a class="fr text" href="javascript:;">-->
                                <!--{{item.title}}-->
                                <!--</a>-->
                            </li>
                            <!--<li class="clearfix">-->
                            <!--<a class="fl img" href="javascript:;">-->
                            <!--<img src="">-->
                            <!--</a>-->
                            <!--<a class="fr text" href="javascript:;">-->
                            <!--魔都最具创意的十大会务中心，不仅仅只是为了开会-->
                            <!--</a>-->
                            <!--</li>-->
                        </ul>
                    </div>

                </div><!--right-end-->
            </div><!--spacecont-end-->
        </div><!--events-dtlbox-end-->
    </div>

</template>

<script>

    function fetchData(store){
        store.commit('LOADING', true)
        return store.dispatch(`getSiteDtlData`,{
                    id : store.state.route.params.id
                }).then(() => {
                    store.commit('LOADING', false)
                })
    }

    export default {
        data() {
            return {

            }
        },

        metaInfo(){
            return {
                title: this.title,
                meta: [
                    { charset: 'utf-8' },
                    { name: 'keywords', content: '快闪店,商业空间,场地,活动场地,北京活动场地,上海活动场地,场地租赁,会议场地,上海会议场地,年会场地' },
                    { name: 'description', content: this.seoDes },
                ]
            }
        },
        mounted () {
            var self = this;
        },
        preFetch: fetchData,

        beforeMount () {
            fetchData(this.$store)
        },
        computed: {
            placeDtl(){return this.$store.state.SiteDtlData.dtl},
            spaces(){return this.$store.state.SiteDtlData.spaces},
            relate_topics(){return this.$store.state.SiteDtlData.relate_topics},
            relate_articles(){return this.$store.state.SiteDtlData.relate_articles},
            title(){
                return this.$store.state.SiteDtlData.dtl.title
            },
            seoDes(){
                return this.$store.state.SiteDtlData.dtl.brand_story
            }
        },
        methods: {
        },

        //记住密码
        rememberPassword(){}
    }

</script>






