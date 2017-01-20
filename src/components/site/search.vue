<template>
    <div>
        <div class="search-bar-wrap">
            <div class="w1200">
                <!--搜索条-star-->
                <div class="search-bar clearfix">
                    <div class="fl search-box clearfix">
                        <div class="fl box-wrap">
                            <input class="box" type="text" placeholder="目的">
                            <i class="icon icon-icon_selectDownArrowThin"></i>
                        </div>
                    </div>
                    <button class="fl btn btn-black search-btn"><i class="icon icon-icon_searchBarSearch"></i>搜索</button>
                    <button class="fl btn btn-red" style="margin-right: 0"><i class="icon icon-icon_searchBarOne"></i>一键租场地</button>
                </div>
                <!--搜索条-end-->
            </div>
        </div>
    </div>
</template>
<script>
    function fetchData(store) {
        return store.dispatch(`getHomeData`)
    }
    export default {
        data() {
            const isInitialRender = !this.$root._isMounted
            return {
                city_id : '',
                homeSearchCondition : {
                    city_id : 1,
                    project_type : '',
                    doWhat : '',
                    q : {
                        site_site_type_eq : '',
                        keyword : '',
                        preKeyword : ''
                    }
                },
                reSites:[1,2,3,4,5,6,7,8],
                selection:[1,2,3,4,5,6],
                media:[1,2,3,4,5,6,7,8]
            }
        },
        components: {
        },
        mounted () {
            var self = this
            this.$store.commit('LOADING', false)
        },
        metaInfo: {
            title: '【云SPACE－商业空间短租平台】提供全国活动场地_发布会场地_场地租赁_活动资讯_找场地上云SPACE',
            // override the parent template and just use the above title only
            titleTemplate: null,
            meta: [
                { charset: 'utf-8' },
                { name: 'keywords', content: '快闪店,商业空间,场地,活动场地,北京活动场地,上海活动场地,场地租赁,会议场地,上海会议场地,年会场地' },
                { name: 'description', content: `云SPACE是专业的活动场地预订、租赁平台。为您提供上海、北京、广州、深圳、成都、杭州、南京、
                苏州等一二线城市活动场地,年会场地,购物中心,秀场,商场,loft空间,适合开办特卖,试乘试驾,走秀,
                高级定制,沙龙,集客等活动的特价活动空间。举办路演、推广活动、发布会选址是关键.一键直达,专业的服务,精准的报价,轻松搞定` },
            ]
        },
        computed: {
            cities (){
                return this.$store.state.cities
            },
            allTags(){
                return this.$store.state.allTags
            }
        },
        methods: {
            homeDoSearch(){}
        },

        preFetch: fetchData,
        beforeMount () {
            fetchData(this.$store)
        }

    }
</script>
<style>

</style>