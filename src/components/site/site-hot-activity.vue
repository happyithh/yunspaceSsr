<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">首页</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;" class="red">找场地</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">场地列表</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200">
            <!--热推场地列表-star-->
            <div class="section site-item itembox">
                <div class="item-title site-title-list clearfix">
                    <ul class="fl site-menu clearfix">
                        <li><a href="/site/hot">热推场地</a></li>
                        <li><a href="/site/selected">精选分类</a></li>
                        <li class="current"><a href="/site/activity">热门活动场地</a></li>
                    </ul>

                    <ul class="fr tab-menu model-change">
                        <li class="fl btn-model matrix icon-icon_spaceListstyle1 current"></li>
                        <li class="fl btn-model list icon-icon_spaceListstyle2"></li>
                    </ul>
                </div>

                <div class="tab-box site-cont site-cont-list clearfix">
                    <!--矩阵模式-开始-->
                    <div class="cont matrix-cont current clearfix">
                        <div class="tags">
                            <a href="javascript:;" class="active">全部分类</a>
                            <a href="javascript:;" v-for="item in tags">秀场展馆</a>
                        </div>
                        <div class="box-list">
                            <div class="box" v-for="item in sites">
                                <a href="javascript:;">
                                    <img src="" alt="上海1933老厂房">
                                    <p class="text">上海1933老厂房</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--矩阵模式-结束-->

                    <!--列表模式-开始-->
                    <div class="cont list-cont clearfix">
                        <div class="tags">
                            <a href="javascript:;" class="active">全部分类</a>
                            <a href="javascript:;" v-for="item in tags">秀场展馆</a>
                        </div>
                        <div class="box-list">
                            <div class="box-list-box" v-for="item in sites">
                                <a class="fl img" href="javascript:;">
                                    <img src="" alt="列表模式">
                                </a>
                                <div class="fl text">
                                    <h3>
                                        <a href="javascript:;">云SPACE 上海国际工业园秀场</a>
                                    </h3>
                                    <div class="assort clearfix">
                                        <p><i class="icon-icon_spaceBusiness"></i> 徐家汇 <span class="line"></span></p>
                                        <p><i class="icon-icon_spacePeople"></i> 500人 <span class="line"></span></p>
                                        <p><i class="icon-icon_spaceArea"></i> 300㎡</p>
                                    </div>
                                    <p><i class="icon-icon_spaceRecommend"></i> 推荐理由：Boom Shakalaka~</p>
                                    <p class="keywords">商业发布／主题派对／时尚走秀／动漫游戏／展览展示</p>
                                    <a class="btn btn-red" href="javascript:;">加入咨询</a>
                                </div>
                                <div class="fr price">
                                    <p><strong>￥80,000</strong>/天 起</p>
                                    <span>市场价: ¥ 100,000/天</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--列表模式-结束-->
                </div>
            </div>
            <!--热推场地列表-end-->
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
                siteRecommend:[1,2,3,4,5,6,7,8,9,10,11,12],
                tags:[1,2,3,4,5,6]
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

            //tab切换
            $('.itembox .tab-menu li').each(function (index) {
                var thisa = $(this);
                thisa.click(function () {
                    $('.itembox .tab-menu li').removeClass('current');
                    $('.itembox .tab-box .cont').removeClass('current');
                    thisa.addClass('current');
                    $('.itembox .tab-box .cont').eq(index).addClass('current');
                })
            });
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
    @import "../../assets/scss/site.scss";
</style>