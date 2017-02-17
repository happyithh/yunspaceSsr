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
                <div class="box" v-for="item in siteEssence">
                    <a class="img" :href="'/article/'+item.id" :title="item.title">
                        <img :src="item.img_paths[0].url_420_300" :alt="item.title">
                    </a>
                    <div class="text">
                        <h2><a :href="'/article/'+item.id">{{item.title}}</a></h2>
                        <p class="des">{{item.abstract}}</p>
                        <div class="skim"><i class="icon-icon_articleBrowserLine"></i>{{item.viewed}}</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    function fetchData(store){
        store.commit('LOADING', true)
        return store.dispatch(`getSiteSelectedData`,{
//                    type : 'chosen'
        }).then(() => {
            store.commit('LOADING', false)
        })
    }

    export default {
        data() {
            return {

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
            siteEssence(){
                return this.$store.state.SiteEssence
            },
        },
        methods: {

        }
    }

</script>
<style lang="sass" scoped>
    @import "../../assets/scss/news.scss";
</style>