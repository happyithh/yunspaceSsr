<template>
    <div>
        <div class="w1200">
            <!--场地精华-star-->
            <div class="site-essence mt30">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>场地精华</h2>
                    <a class="more" href="javascript:;">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>

                <ul class="cont clearfix">
                    <li v-for="item in siteEssenceTop">
                        <a href="" title="">
                            <img src="" alt="">
                            <div class="des">
                                <h3>小型圣诞派对 包场过圣诞</h3>
                                <p>高性价比包场办个主题趴，从平安夜嗨到圣诞！</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul class="cont small clearfix">
                    <li v-for="item in siteEssence">
                        <a href="" title="">
                            <img src="" alt="">
                            <div class="des">
                                <h3>小型圣诞派对 包场过圣诞</h3>
                                <p>高性价比包场办个主题趴，从平安夜嗨到圣诞！</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <!--场地精华-end-->

            <!--TOP榜单-star-->
            <div class="top-list mt30">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>TOP榜单</h2>
                    <a class="more" href="javascript:;">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>

                <ul class="cont clearfix">
                    <li v-for="item in toplist">
                        <a class="img" href="" title="">
                            <img src="" alt="">
                            <span class="numb">1</span>
                        </a>
                        <div class="des">
                            <h3><a href="" title="">寻找沪上最有青春气息的好去处！</a></h3>
                        </div>
                    </li>
                </ul>
            </div>
            <!--TOP榜单-end-->

            <!--场地评测-star-->
            <div class="site-evaluate mt30">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>场地评测</h2>
                    <a class="more" href="javascript:;">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>

                <ul class="cont clearfix">
                    <li v-for="item in siteEssence">
                        <a class="img" href="" title="">
                            <img src="" alt="">
                        </a>
                        <div class="des clearfix">
                            <h3><a href="" title="">寻找沪上最有青春气息的好去处！</a></h3>
                           <div class="fr statistics clearfix">
                               <p class="fl"><i class="icon-icon_articleBrowserLine"></i>8456</p>
                               <p class="fr"><i class="icon-icon_articleGoodSolid"></i>89</p>
                           </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!--场地评测-end-->

            <!--资讯报道-->
            <div class="media-re mt30 clearfix">
                <div class="media-left clearfix">
                    <div class="item-title clearfix">
                        <h2><span class="redline"></span>场地评测</h2>
                        <a class="more" href="javascript:;">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                    </div>
                    <a href="" title="" class="media-piece">
                        <img src="/static/images/test/3to2.png" alt="">
                        <div class="des">
                            <p>商业时尚的汇聚地及潮流风向标的起源地</p>
                        </div>
                    </a>
                    <a href="" title="" class="media-piece">
                        <img src="/static/images/test/3to2.png" alt="">
                        <div class="des">
                            <p>商业时尚的汇聚地及潮流风向标的起源地</p>
                        </div>
                    </a>
                </div>
                <div class="media-right">
                    <div class="item-title clearfix">
                        <h2><span class="redline"></span>场地评测</h2>
                        <a class="more" href="javascript:;">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                    </div>
                    <ul>
                        <li v-for="item in media">
                            <a href="">
                                <span>【搭建课堂】《华胥引》电影命名《鲛珠传》 打造IP六联动</span>
                                <span class="time">2016-10-24</span>
                                <div class="border-line"></div>
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
            <!--/资讯报道-->
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
                siteEssenceTop:[1,2,3],
                siteEssence:[1,2,3,4],
                toplist:[1,2,3],
                media:[1,2,3,4,5,6,7,8]
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
                    slidesPerView: 6,
                    paginationClickable: true,
                    spaceBetween: 20,
                    autoplay: 5000
//                    freeMode: true
                });
            },
        },
    }

</script>
<style lang="sass" scoped>
    @import "../../assets/scss/news.scss";
</style>