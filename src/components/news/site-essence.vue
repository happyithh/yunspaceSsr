<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">资讯</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">场地精华</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200 center-box">
            <div class="title">
                <h1 class="font-medium">场地精华</h1>
                <p>极佳的商业空间场地，给您前所未有的体验</p>
            </div>

            <div class="site-essence clearfix">
                <div class="box" v-for="item in sites">
                    <a class="img" href="javascript:;">
                        <img src="" alt="">
                    </a>
                    <div class="text">
                        <h2><a href="javascript:;">小型圣诞派对 包场过圣诞</a></h2>
                        <p class="des">Jingle bells, jingle bells, Jingle all the way，下半年最期待的节日之一——圣诞节悄然而至。 今年打算怎么过？和一大群人好友租个跨空间设计的艺术空间办个派对；为年会预热也是个不错的想法！小型空间，高性价比包场办个主题趴，从平安夜嗨到圣诞！</p>
                        <div class="skim"><i class="icon-icon_articleBrowserLine"></i>2088</div>
                    </div>
                </div>
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
                siteRecommend:[1,2,3,4,5]
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