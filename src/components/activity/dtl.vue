<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">活动</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">品牌案例</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200 dtl-box mb30 clearfix">
            <!--文章详情-star-->
            <div class="fl details">
                <h1>魔都最有情调的餐厅……你知道几家？</h1>
                <div class="title-bar clearfix">
                    <div class="fl">
                        来源：云SPACE运营部 &nbsp;&nbsp;&nbsp; 2016-12-09
                    </div>

                    <div class="fr">
                        浏览量：2881 <span class="dian">·</span> 点赞数：1225
                    </div>
                </div>
                <div class="tags">
                    <i class="icon-icon_tagHot"></i>
                    <a class="tag" href="javascript:;" title="魔都" v-for="item in tags"><span>/</span>魔都</a>
                </div>
                <h3>
                    说到深藏不露，自然不是那些民声在外甚至来头大得吓人的餐厅；因为是深藏不露，所以尽量不说魔都里的外滩系、酒店系。因此我在这里推荐的不是沪上美食榜单，而是你在魔都漫无目的的闲逛时遇到的惊喜。
                </h3>
                <div class="details-cont">
                    <div class="box"><img src=""></div>
                </div>

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

                <div class="PreNext clearfix">
                    <div class="fl red clearfix">
                        <p>上一篇：</p>
                        <a href="javascript:;" title="">Salomon秋冬新品，来中成智谷秀场订购奥运冠军同款单品</a>
                    </div>
                    <div class="fr red clearfix">
                        <p>下一篇：</p>
                        <a href="javascript:;" title="">玛丽黛佳中国船舶馆大秀启幕云SPACE引领商业活动新浪潮</a>
                    </div>
                </div>
            </div>
            <!--文章详情-end-->

            <div class="fr sidebar">
                <!--关联场地-->
                <div class="relation-site">
                    <div class="item-title clearfix">
                        <h2><span class="redline"></span>关联场地</h2>
                    </div>
                    <ul class="cont">
                        <li>
                            <div class="img">
                                <img src="" title="">
                                <div class="price">
                                    <p><strong>￥80,000</strong>/天 起</p>
                                    <span>市场价: ¥ 100,000/天</span>
                                </div>
                            </div>
                            <div class="text">
                                <h3>
                                    <a href="javascript:;">云SPACE 上海壹秀秀场</a>
                                </h3>
                                <p>商业发布／主题派对／时尚走秀／动漫游戏／展览展示</p>

                                <div class="assort clearfix">
                                    <p><i class="icon-icon_spaceBusiness"></i> 所属商圈：徐家汇 <span class="line"></span></p>
                                    <p><i class="icon-icon_spacePeople"></i> 最大容纳人数：500人 <span class="line"></span></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--热推场地-star-->
                <div class="hot site">
                    <div class="item-title clearfix">
                        <h2><span class="redline"></span>热推场地</h2>
                        <a class="more" href="/site/hot">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                    </div>

                    <ul class="cont clearfix">
                        <li class="clearfix" v-for="item in hotSite">
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
                    <div class="item-title clearfix">
                        <h2><span class="redline"></span>推荐文章</h2>
                        <a class="more" href="/site/hot">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                    </div>

                    <ul class="cont clearfix">
                        <li class="clearfix" v-for="item in newsRecommend">
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
//        store.commit('LOADING', true)
//        return store.dispatch(`getSiteHomeData`,{
//                    id : store.state.route.params.id
//                }).then(() => {
//                    store.commit('LOADING', false)
//    })
    }

    export default {
        data() {
            return {
                hotTags:[1,2,3,4,5],
                sites:[1,2,3,4,5,6,7,8,9,10,11,12],
                aboutcases:[1,2,3,4,5,6,7,8,9,10],
                siteRecommend:[1,2,3,4,5],
                tags:[1,2,3,4],
                newsRecommend:[1,2,3,4,5],
                hotSite:[1,2,3]
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
        computed: {
        },
        methods: {

        }
    }

</script>
<style lang="sass" scoped>
    @import "../../assets/scss/news.scss";
</style>