<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">资讯</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">TOP榜单</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200 dtl-box mb30 clearfix">
            <!--文章详情-star-->
            <div class="fl details">
                <h1>魔都最有情调的餐厅……你知道几家？</h1>
                <div class="title-bar clearfix">
                    <div class="fl">
                        来源：张恒 &nbsp;&nbsp;&nbsp; 2016-12-09
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
                    <div class="box">
                        <div class="title clearfix">
                            <h2 class="fl red">1、上海老站 漕溪北路201号 人均80-300不等</h2>
                            <a class="fr look" href="javscript:;" title="查看场地">查看场地 <i class="icon-icon_moreArrowRight"></i></a>
                        </div>
                        <img src="">
                        <div class="des">
                            <p>静静地伫立在繁华的徐家汇中心，与徐家汇天主教堂遥相对望，有一座5层的小白楼，它建于1926年，原徐家汇圣母院仅存的主体部分，这就是如今的上海老站餐厅。外观上不起眼，但是进去后却别有洞天。传说这是当年上海青帮“三百年第一人”杜月笙的老房子，厅里的陈设满满都是民国气息。昏黄的灯光，暗沉的实木家具，好像走进一座名人故居，是各种小资青年不容错过的用餐地。</p>
                            <p>除了大厅，此房的包厢是在一节老火车车厢里，在里面便可看到教堂和一座古典的庭院。菜系丰富、菜品地道，都很上海！</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="title clearfix">
                            <h2 class="fl red">2、恩理和7号公馆 桃江路7号 人均200</h2>
                            <a class="fr look" href="javscript:;" title="查看场地">查看场地 <i class="icon-icon_moreArrowRight"></i></a>
                        </div>
                        <img src="">
                        <div class="des">
                            <p>没有招牌，大门紧闭，只有按门铃才会有专人带你进去</p>
                            <p>进入其中，沿着石径小道，步入宽敞的庭院，将近300平米的庭院中有前驻上海法国总领事梅理霭先生和妻子亲手种植的荷花玉兰，依然冠盖挺立。在它的枝叶下，几张桌椅安静地摆放着，每当仲夏时节，花似荷花芳香馥郁，向每一位来宾叙述着这里的逸闻往事。跨进底楼的“和韵堂”，在中西文化的兼容中，透露着奢华、更流露出时尚。庭院长廊中的露天酒吧，则让你在品味休闲中，多了一份恬静。进入公馆，坐在靠窗的位置上，白粉刷墙，木门窗，平顶带石膏线脚，木地板，壁炉，凸显出简洁的现实主义风格，还原九十多年前的原貌。</p>
                            <p>重点推介酱色笼罩下的“包公熏鱼”，菜名取得颇有深意，做法自然也非同一般，遵从古法。！</p>
                            <p>除了大厅，此房的包厢是在一节老火车车厢里，在里面便可看到教堂和一座古典的庭院。菜系丰富、菜品地道，都很上海！</p>
                        </div>
                    </div>
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
                <!--推荐文章-star-->
                <div class="hot news">
                    <div class="item-title small clearfix">
                        <h2><span class="redline"></span>热推场地</h2>
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
                </div>
                <!--推荐文章-end-->
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
                newsRecommend:[1,2,3,4,5]
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