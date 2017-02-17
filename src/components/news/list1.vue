<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">资讯</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">场地评测</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200">
            <!--品牌案例-star-->
            <div class="mt50 site-item-news itembox">
                <div class="item-title BorderBotmNone clearfix">
                    <ul class="site-menu clearfix">
                        <li class="current"><a href="/news/list1">TOP榜单</a></li>
                        <li><a href="/news/list2">场地评测</a></li>
                        <li><a href="/news/list3">搭建学堂</a></li>
                        <li><a href="/news/list4">场地快报</a></li>
                    </ul>
                </div>

                <div class="item-box clearfix">
                    <div class="fl mb30 box-list clearfix">
                        <ul>
                            <li v-for="item in newsList">
                                <a class="fl img" :href="'/article/'+item.id">
                                    <img :src="item.img_paths[0].url_329_400" :alt="item.title">
                                </a>
                                <div class="fr text">
                                    <h3>
                                        <a class="fl img" :href="'/article/'+item.id">云space上海壹秀秀场@你，这里有Nike秋冬新品</a>
                                    </h3>
                                    <p class="des">{{item.abstract}}</p>
                                    <div class="bottom">
                                        <div class="fl icon skim">
                                            <i class="icon-icon_articleBrowserLine"></i>
                                            {{item.viewed}}
                                        </div>
                                        <div class="fl icon zan">
                                            <i class="icon-icon_articleGoodLine"></i>
                                            {{item.up_number}}
                                        </div>

                                        <div class="fr time">{{item.created_at}}</div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <!--分页器-->
                        <div class="fr">分页器</div>
                    </div>

                    <!--右边-star-->
                    <div class="fr sidebar">
                        <a class="about img" href="javascript:;" title="">
                            <img src="" alt="1">
                        </a>
                        <a class="about img" href="javascript:;" title="">
                            <img src="" alt="2">
                        </a>

                        <!--热推场地-star-->
                        <div class="hot-site">
                            <div class="item-title small clearfix">
                                <h2><span class="redline"></span>热推场地</h2>
                                <a class="more" href="/site/hot">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                            </div>

                            <ul class="cont clearfix">
                                <li v-for="item in 4">
                                    <a class="img" href="" title="">
                                        <img src="" alt="">
                                        <p>上海植物园第一会所会场</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--热推场地-end-->
                    </div>
                    <!--右边-end-->
                </div>
            </div>
            <!--品牌案例-end-->
        </div>


    </div>
</template>
<script>
    function fetchData(store){
        store.commit('LOADING', true)
        return store.dispatch(`getNewsListData`,{
            type : 'TOP榜单'
        }).then(() => {
            store.commit('LOADING', false)
        })
    }

    export default {
        data() {
            return {
                hotTags:[1,2,3,4,5],
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
            newsList(){
                return this.$store.state.NewsList.articles
            },
        },
        methods: {

        }
    }

</script>
<style lang="sass" scoped>
    @import "../../assets/scss/activity.scss";
</style>