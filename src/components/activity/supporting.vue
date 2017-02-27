<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">活动</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">配套服务</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200 center-box supporting">
            <div class="title ">
                <h1 class="font-medium">配套服务</h1>
            </div>

            <!--配套服务-->
            <ul class="SupportingList clearfix">
                <li class="red">
                    <div class="box"><i class="icon-icon_serveStage"></i></div>
                    <p>场地搭建</p>
                </li>
                <li class="red">
                    <div class="box"><i class="icon-icon_serveSound"></i></div>
                    <p>音响灯光</p>
                </li>
                <li>
                    <div class="box"><i class="icon-icon_serveLed"></i></div>
                    <p>视频投影</p>
                </li>
                <li>
                    <div class="box"><i class="icon-icon_servePhoto"></i></div>
                    <p>摄影摄像</p>
                </li>
                <li>
                    <div class="box"><i class="icon-icon_serveCar"></i></div>
                    <p>车辆服务</p>
                </li>
                <li>
                    <div class="box"><i class="icon-icon_serveDesign"></i></div>
                    <p>设计策划</p>
                </li>
            </ul>

            <!--联系方式-->
            <div class="phone">
                客户需求请拨打：400-056-0599 &nbsp;&nbsp;&nbsp; 商务合作请联络：400-056-0599
            </div>

            <!--配套服务详情-->
            <ul class="SupportingDtl">
                <li class="clearfix">
                    <div class="fl img">
                        <img src="" alt="">
                    </div>
                    <div class="fr cont">
                        <h3>场地搭建</h3>
                        <span>舞台 / 背板 / 龙门架</span>

                        <div class="text">
                            在举办会议展览或者庆典活动时，通常会需要舞台和背景板，如果有这方面的要求，只需一个电话，会小二就会安排搭建厂商亲临活动场所，观察量场地大小，给出专业的建议。会小二的供应商具备丰富的设计、现场施工及全案执行能力，能为客户提供由设计制作到后期安装的一条龙服务，为客户减少了中间环节带来的风险和成本。
                            根据客户的历史数据，会小二为合作伙伴提供更多的背景信息，以提高成单率并提升对客户的服务质量。
                        </div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="fl img">
                        <img src="" alt="">
                    </div>
                    <div class="fr cont">
                        <h3>音响灯光</h3>
                        <span>舞台 / 背板 / 龙门架</span>

                        <div class="text">
                            在举办会议展览或者庆典活动时，通常会需要舞台和背景板，如果有这方面的要求，只需一个电话，会小二就会安排搭建厂商亲临活动场所，观察量场地大小，给出专业的建议。会小二的供应商具备丰富的设计、现场施工及全案执行能力，能为客户提供由设计制作到后期安装的一条龙服务，为客户减少了中间环节带来的风险和成本。
                            根据客户的历史数据，会小二为合作伙伴提供更多的背景信息，以提高成单率并提升对客户的服务质量。
                        </div>
                    </div>
                </li>
            </ul>

            <!--合作伙伴-->
            <div class="friends mt50">
                <div class="item-title clearfix">
                    <h2><span class="redline"></span>合作伙伴</h2>
                    <a class="more" href="/site/hot">更多 <i class="icon icon-icon_moreArrowRight"></i></a>
                </div>
                <ul class="item-cont clearfix">
                    <li v-for="item in 8">
                        <a href="javascript:;" class="img">
                            <img src="" alt="">
                        </a>
                        <h3>
                            <a href="javascript:;">圣诞晚会 万圣节晚会 主题晚会</a>
                        </h3>
                        <p>上海联智会展服务有限公司</p>
                    </li>
                </ul>
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
    @import "../../assets/scss/activity.scss";
</style>