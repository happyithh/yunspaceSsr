<template>
    <div>
        <div class="w1200">
            <!--场地精华-star-->
            <div class="site-essence mt30">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>场地精华</h2>
                    <a class="more" href="/news/site">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>

                <ul class="cont clearfix">
                    <li v-for="(item,index) in selecteds" v-if="index < 3">
                        <a :href="'/article/'+item.id">
                            <img :src="item.img_paths[0].url_420_300" :alt="item.title">
                            <div class="des">
                                <h3>{{item.title}}</h3>
                                <p>{{item.abstract}}</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul class="cont small clearfix">
                    <li v-for="(item,index) in selecteds" v-if="index >= 3">
                        <a :href="'/article/'+item.id">
                            <img :src="item.img_paths[0].url_390_260" :alt="item.title">
                            <div class="des">
                                <h3>{{item.title}}</h3>
                                <p>{{item.abstract}}</p>
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
                    <a class="more" href="/news/list1">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>

                <ul class="cont clearfix">
                    <li v-for="(item,index) in tops">
                        <a class="img" :href="'/article-toplist/'+item.id" :title="item.title">
                            <img :src="item.img_paths[0].url_420_300" :alt="item.title">
                            <span class="numb">{{index+1}}</span>
                        </a>
                        <div class="des">
                            <h3><a :href="'/article-toplist/'+item.id">{{item.title}}</a></h3>
                        </div>
                    </li>
                </ul>
            </div>
            <!--TOP榜单-end-->

            <!--场地评测-star-->
            <div class="site-evaluate mt30">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>场地评测</h2>
                    <a class="more" href="/news/list2">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>

                <ul class="cont clearfix">
                    <li v-for="item in evaluates">
                        <a class="img" :href="'/article/'+item.id" :title="item.title">
                            <img :src="item.img_paths[0].url_390_260" :alt="item.title">
                        </a>
                        <div class="des clearfix">
                            <h3><a :href="'/article/'+item.id">{{item.title}}</a></h3>
                           <div class="fr statistics clearfix">
                               <p class="fl"><i class="icon-icon_articleBrowserLine"></i>{{item.viewed}}</p>
                               <p class="fr"><i class="icon-icon_articleGoodSolid"></i>{{item.up_number}}</p>
                           </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!--场地评测-end-->

            <!--搭建学堂/场地快报-->
            <div class="media-re mt30 clearfix">
                <div class="media-left clearfix">
                    <div class="item-title clearfix">
                        <h2><span class="redline"></span>搭建学堂</h2>
                        <a class="more" href="/news/list3">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                    </div>
                    <a v-for="(item,index) in teachings" :href="'/article/'+item.id" class="media-piece" v-if="index < 2">
                        <img :src="item.img_paths[0].url_390_260" :alt="item.title">
                        <div class="des">
                            <p>{{item.title}}</p>
                        </div>
                    </a>
                </div>
                <div class="media-right">
                    <div class="item-title clearfix">
                        <h2><span class="redline"></span>场地快报</h2>
                        <a class="more" href="/news/list4">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                    </div>
                    <ul>
                        <li class="clearfix" v-for="(item,index) in articles" v-if="index < 8">
                            <a :href="'/article/'+item.id" class="media-piece">
                                <span>{{item.title}}</span>
                                <span class="time">{{item.created_at}}</span>
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
        store.commit('LOADING', true)
        return store.dispatch(`getNewsHomeData`,{

        }).then(() => {
            store.commit('LOADING', false)
        })
    }

    export default {
        data() {
            return {
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
            articles(){
                return this.$store.state.NewsHome.articles
            },
            evaluates(){
                return this.$store.state.NewsHome.evaluates
            },
            selecteds(){
                return this.$store.state.NewsHome.selecteds
            },
            teachings(){
                return this.$store.state.NewsHome.teachings
            },
            tops(){
                return this.$store.state.NewsHome.tops
            },
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