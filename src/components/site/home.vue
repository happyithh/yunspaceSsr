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

            <!--热推场地-star-->
            <div class="section hot-site">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>热推场地</h2>
                    <a class="more" href="">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>

                <ul class="cont clearfix">
                    <li v-for="item in siteRecommend">
                        <a href="" title="">
                            <img src="" alt="">
                            <p>上海植物园第一会所会场</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!--热推场地-end-->

            <!--精选分类-star-->
            <div class="section selected-site">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>精选分类</h2>
                </div>

                <!--城市精选专题-开始-->
                <div class="section citysubject clearfix">
                    <div class="w1200">
                        <div class="cont">
                            <div class="btns">
                                <a class="btn btnleft" href="javascript:;">
                                    <span class="icon-arrowleft"></span>
                                </a>
                                <a class="btn btnright" href="javascript:;">
                                    <span class="icon-arrowright"></span>
                                </a>
                            </div>
                            <div class="citySelection" style="height: 100%;">
                                <div class="swiper-wrapper swiper-container">
                                    <div class="swiper-slide">Slide 2</div>
                                    <div class="swiper-slide">Slide 3</div>
                                    <div class="swiper-slide">Slide 4</div>
                                </div>
                                <!-- Add Pagination -->
                                <!--<div class="swiper-pagination"></div>-->
                            </div>
                            <ul class="subject-list"></ul>
                        </div>
                        <router-link to="/found" class="btnlookmore">查看更多专题</router-link>
                        <!--<a href="javascript:;" class="btnlookmore">查看更多专题</a>-->
                    </div>

                </div>
                <!--城市精选专题-结束-->
            </div>
            <!--精选分类-end-->
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
                sites:[1,2,3,4,5,6,7,],
                siteRecommend:[1,2,3,4,5,6,7,8,9,10,11,12]
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

            setTimeout(function () {
                this.init();
            },300);
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
            init : function () {
                var citySelectionSwiper = new Swiper('.citySelection', {
//                    pagination: '.swiper-pagination',
                    nextButton: '.citysubject .btnright',
                    prevButton: '.citysubject .btnleft',
                    loop : true,
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 1,
                    autoplay: 3000
//                    freeMode: true
                });
            },
        },
    }

</script>
<style lang="sass" scoped>
    @import "../../assets/scss/site.scss";
</style>