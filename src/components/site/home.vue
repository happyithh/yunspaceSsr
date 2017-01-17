<template>
    <div>
        <!--搜索版块-star-->
        <div class="site-search-bar">
            <div class="w1200">
                <!--搜索条-star-->
                <search-bar></search-bar>

                <!--搜索条-end-->

                <dl class="hot-tags clearfix">
                    <dt class="fl clearfix">
                        <i class="fl icon icon-icon_detailsType"></i>
                        <p class="fl">热门标签</p>
                        <span class="fl cutoff-rule">|</span>
                    </dt>
                    <dd class="fl" v-for="item in hotTags"><a href="">热门标签</a></dd>
                </dl>
            </div>
        </div>
        <!--搜索版块-end-->

        <div class="w1200">
            <!--场地主题-star-->
            <div class="section site-item itembox">
                <div class="item-title site-item-title clearfix">
                    <ul class="fl tab-menu clearfix">
                        <li>展览展示</li>
                        <li>商业发布</li>
                        <li class="current">晚会年会</li>
                        <li>论坛会议</li>
                    </ul>

                    <a class="fr more" href="">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>

                <div class="tab-box site-cont clearfix">
                    <div class="cont clearfix">
                        <div class="box" v-for="item in sites">
                            <a href="javascript:;">
                                <img src="" alt="上海1933老厂房">
                                <p class="text">上海1933老厂房</p>
                            </a>
                        </div>
                        <div class="box-more">
                            <a href="javascript:;"><img src="" alt="更多展览展示"></a>
                        </div>
                    </div>
                    <div class="cont clearfix">
                        <div class="box" v-for="item in sites">
                            <a href="javascript:;">
                                <img src="" alt="上海1933老厂房">
                                <p class="text">上海1933老厂房</p>
                            </a>
                        </div>
                        <div class="box-more">
                            <a href="javascript:;"><img src="" alt="更多商业发布"></a>
                        </div>
                    </div>
                    <div class="cont current clearfix">
                        <div class="box" v-for="item in sites">
                            <a href="javascript:;">
                                <img src="" alt="上海1933老厂房">
                                <p class="text">上海1933老厂房</p>
                            </a>
                        </div>
                        <div class="box-more">
                            <a href="javascript:;"><img src="" alt="更多晚会年会"></a>
                        </div>
                    </div>
                    <div class="cont clearfix">
                        <div class="box" v-for="item in sites">
                            <a href="javascript:;">
                                <img src="" alt="上海1933老厂房">
                                <p class="text">上海1933老厂房</p>
                            </a>
                        </div>
                        <div class="box-more">
                            <a href="javascript:;"><img src="" alt="更多论坛会议"></a>
                        </div>
                    </div>
                </div>
            </div>
            <!--场地主题-end-->

            <!--场地推荐-star-->
            <div class="section hot-site">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>热推场地</h2>
                    <div class="keywords">
                        <a href="">策划执行</a>
                        <a href="">趣味年会</a>
                        <a href="">闪店攻略</a>
                    </div>
                    <a class="more" href="">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>

            </div>
            <!--场地推荐-end-->
        </div>


    </div>
</template>
<script>
    import SearchBar from '../public/search-bar.vue'

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
                sites:[1,2,3,4,5,6,7,]
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
        components: {
            SearchBar
        },
        computed: {

        },
        methods: {
        },
    }

</script>
<style scoped>
    .site-search-bar{
        width: 100%;
        padding: 15px 0;
        background: #f5f5f5;
        box-shadow: 0 1px 0 0 rgba(0,0,0,0.05);
    }

    /***热门标签***/
    .hot-tags{margin-top: 15px;}
    .hot-tags dt{
        font-size: 16px;
        color: #999;
    }
    .hot-tags dt{
        padding-right: 15px;
    }
    .hot-tags dt .icon{
        font-size: 15px;
        margin-right: 5px;
        margin-top: 4px;
        color: #cbcbcb;
    }
    .hot-tags dt .cutoff-rule{
        margin-left: 30px;
        color: #dcdcdc;
    }
    .hot-tags a{
        color: #999;
        padding: 0 15px;
    }
    .hot-tags a:hover{
        color: #AA2C3C;
    }

    .section{margin-top: 50px;}
    .site-item-title{margin-bottom: 10px;}
    /*tab切换*/
    .tab-menu li{
        float: left;
        margin-right: 40px;
        height: 24px;
        line-height: 24px;
        font-size: 24px;
        color: #999;
        text-align: center;
        padding-bottom: 12px;
        box-sizing: content-box;
        cursor: pointer;
    }
    .tab-menu .current{
        color: #181C1F;
        border-bottom: 2px solid #AA2C3C;
        margin-bottom: -1px;
    }
    .tab-box .cont{
        display: none;
    }
    .tab-box .current{
        display: block;
    }

    .site-cont{position: relative;}
    .site-cont .box{
        float: left;
        width: 386px;
        height: 257px;
        margin-right: 20px;
        margin-top: 20px;
        background: #eee;
        position: relative;
    }
    .site-cont a{
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
    }
    .site-cont .box:nth-of-type(3),
    .site-cont .box:nth-of-type(7){
        margin-right: 0;
    }
    .site-cont .box:nth-of-type(4){
        margin-left: 812px;
    }
    .site-cont .box p{
        display: inline-block;
        width: 70%;
        height: 36px;
        line-height: 36px;
        padding: 0 20px;
        text-align: center;
        font-size: 16px;
        background: rgba(0,0,0,0.60);
        position: absolute;
        left: 15%;
        top: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .site-cont .box-more{
        width: 792px;
        height: 257px;
        position: absolute;
        left: 0;
        top: 297px;
        background: #eee;
    }







</style>