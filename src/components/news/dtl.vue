<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="/activity" class="red">活动</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">品牌案例</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200 dtl-box mb30 clearfix">
            <!--文章详情-star-->
            <div class="fl details">
                <h1>{{detail.title}}</h1>
                <div class="title-bar clearfix">
                    <div class="fl">
                        来源：{{detail.source}} &nbsp;&nbsp;&nbsp; {{detail.created_at}}
                    </div>

                    <div class="fr">
                        浏览量：{{detail.viewed}} <span class="dian">·</span> 点赞数：{{detail.up_number}}
                    </div>
                </div>
                <div class="tags">
                    <i class="icon-icon_tagHot"></i>
                    <div class="tag">
                        <span>/</span>
                        <a href="javascript:;" title="魔都">{{detail.keyword}}</a>
                    </div>

                </div>
                <h3>{{detail.abstract}}</h3>
                <div class="details-cont" v-html="detail.details"></div>

                <div class="handle clearfix">
                    <div class="fl btn-collect-zan clearfix">
                        <a class="fl btn" href="javascript:;">
                            <i class="icon-icon_articleCollectLine"></i>
                            收藏
                        </a>
                        <a class="fl btn" href="javascript:;">
                            <i class="icon-icon_articleGoodLine"></i>
                            点赞
                        </a>
                    </div>
                    <div class="fr share">
                        <p>分享：</p>
                        <div class="box">
                        </div>
                    </div>
                </div>

                <!--<div class="PreNext clearfix">-->
                    <!--<div class="fl red clearfix" v-if="pre.length > 0">-->
                        <!--<p>上一篇：</p>-->
                        <!--<a :href="'/article/'+pre.id">{{pre.title}}</a>-->
                    <!--</div>-->
                    <!--<div class="fr red clearfix" v-if="next.length > 0">-->
                        <!--<p>下一篇：</p>-->
                        <!--<a :href="'/article/'+next.id">{{next.title}}</a>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
            <!--文章详情-end-->

            <div class="fr sidebar">
                <!--关联场地-->
                <div class="relation-site">
                    <div class="item-title small clearfix">
                        <h2><span class="redline"></span>关联场地</h2>
                    </div>
                    <ul class="cont">
                        <li>
                            <div class="img-wrap">
                                <a class="img" :href="'/site/dtl/'+relation_site.id"><img src="/static/images/test/3to2.png" title=""></a>
                                <div class="price">
                                    <p><strong>￥80,000</strong>/天 起</p>
                                    <span>市场价: ¥ 100,000/天</span>
                                </div>
                            </div>
                            <div class="text">
                                <h3>
                                    <a :href="'/site/dtl/'+relation_site.id">{{relation_site.title}}</a>
                                </h3>
                                <p>商业发布／主题派对／时尚走秀／动漫游戏／展览展示</p>

                                <div class="assort clearfix">
                                    <p><i class="icon-icon_spaceBusiness"></i> 所属商圈：{{relation_site.district}} <span class="line"></span></p>
                                    <p><i class="icon-icon_spacePeople"></i> 最大容纳人数：{{relation_site.max_people}}人 <span class="line"></span></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--热推场地-star-->
                <div class="hot site">
                    <div class="item-title small clearfix">
                        <h2><span class="redline"></span>热推场地</h2>
                        <a class="more" href="/site/hot">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                    </div>

                    <ul class="cont clearfix">
                        <li class="clearfix" v-for="item in 3">
                            <a class="fl img" href="" title="">
                                <img src="" alt="">
                            </a>
                            <div class="fr text">
                                <h5>
                                    <a href="javascript:;" title="">国际会展中心，捷普科技年会</a>
                                </h5>
                                <div class="assort clearfix">
                                    <p class="fl"><i class="icon-icon_spaceArea"></i> 300㎡</p>
                                    <p class="fl"><i class="icon-icon_spacePeople"></i> 500人 <span class="line"></span></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div><!--热推场地-end-->
                <!--推荐文章-star-->
                <div class="hot news">
                    <div class="item-title small clearfix">
                        <h2><span class="redline"></span>推荐文章</h2>
                        <a class="more" href="/site/hot">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                    </div>

                    <ul class="cont clearfix">
                        <li class="clearfix" v-for="item in 6">
                            <h5 class="fl">
                                <a href="javascript:;" title="">国际会展中心，捷普科技年会</a>
                            </h5>
                            <a class="fr img" href="" title="">
                                <img src="" alt="">
                            </a>
                        </li>
                    </ul>
                </div><!--推荐文章-end-->
            </div>

        </div>


    </div>
</template>
<script>
    function fetchData(store){
        store.commit('LOADING', true)
        return store.dispatch(`getNewsDtlData`,{
            id: store.state.route.params.id
        }).then(() => {
            store.commit('LOADING', false)
        })
    }


    export default {
        data() {
            return {

            }
        },

        computed: {
            detail (){
                return this.$store.state.NewsDtl.detail
            },
            recommend_articles (){
                return this.$store.state.NewsDtl.recommend_articles
            },
            hot_sites (){
                return this.$store.state.NewsDtl.hot_sites
            },
            relation_site (){
                return this.$store.state.NewsDtl.relation_site
            },
            next (){
                return this.$store.state.NewsDtl.next
            },
            pre (){
                return this.$store.state.NewsDtl.pre
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
            self.$store.commit('LOADING', false)

        },
        preFetch: fetchData,

        beforeMount () {
            fetchData(this.$store)
        },
        methods: {

        }
    }

</script>
<style lang="sass" scoped>
    @import "../../assets/scss/news.scss";
</style>