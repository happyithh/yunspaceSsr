<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">活动</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">配套服务</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200 site-essence-box">
            <div class="title">
                <h1 class="font-medium">配套服务</h1>
            </div>

            <div class="site-essence clearfix">

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