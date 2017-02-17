<template>
    <header id="header">
        <nav class="clearfix">
            <div class="fl">
                <div class="fl logo">
                    <router-link to="/" title="云SPACE" class="img">
                        <img src="/static/images/logo.png" alt="云SPACE">
                    </router-link>
                    <!--<a href="javascript:;">云SPACE</a>-->
                </div>
                <div class="fl nav-location dorpdown city-choose">
                    <div style="position: relative">
                        <p>上海</p>
                        <i class="icon-triangedown"></i>
                    </div>
                    <div class="city-dorpdown">
                        <div class="hot-city">
                            <span class="active">热门城市</span>
                            <a href="?city_id=1">上海</a>
                            <a href="?city_id=2">北京</a>
                            <a>广州</a>
                        </div>
                        <div class="border-line"></div>
                        <div class="common-city">
                            <a :href="'?city_id='+item.id" v-for="item in cities">{{item.name}}</a>
                        </div>
                    </div>
                </div>
                <ul class="fl navbar clearfix">
                    <router-link tag="li" to="/" exact>
                        <a>首页</a>
                    </router-link>
                    <router-link tag="li" to="/site">
                        <a>找场地</a>
                    </router-link>
                    <router-link tag="li" to="/activity">
                        <a>活动</a>
                    </router-link>
                    <router-link tag="li" to="/news">
                        <a>资讯</a>
                    </router-link>
                    <!--<li><a target="_blank" href="javascript:;">新发现</a></li>-->
                </ul>
            </div>
            <!--工具条-开始-->
            <div class="fr clearfix">
                <ul class="fl tools clearfix">
                    <router-link tag="li" to="/">
                        <a href="javascript:;" title="场地加盟">场地加盟<i class="line"></i></a>
                    </router-link>
                    <router-link tag="li" to="/">
                        <a href="javascript:;" title="城市运营商">城市运营商<i class="line"></i></a>
                    </router-link>
                    <router-link class="phone" tag="li" to="/">
                        <i class="icon-icon_headerTel"></i>
                        400-056-0599
                    </router-link>
                </ul>
                <div class="fl logreg">
                    <a href="javascript:;" class="fl log">登录</a>
                    <a href="javascript:;" class="fr reg">注册</a>
                </div>
                <div class="fl aboutlist">
                    <i class="icon-icon_headerList red"></i>
                    <a href="javascript:;">咨询清单(0)</a>
                </div>
            </div>
        </nav>

    </header>

</template>

<script>
//    const fetchInitialData = store => {
//
////            store.dispatch(`getHomeData`)
////            store.dispatch(`getAllTags`)
////            store.dispatch(`getTopics`)
//        return store.dispatch(`getAllTags`)
//    }
    module.exports = {
        data() {
            const isInitialRender = !this.$root._isMounted
            return {
                options: [{
                    value: '选项1',
                    label: '全国'
                }, {
                    value: '选项2',
                    label: '上海'
                }, {
                    value: '选项3',
                    label: '北京'
                }, {
                    value: '选项4',
                    label: '广州'
                }, {
                    value: '选项5',
                    label: '深圳'
                }],
                navValCity: '上海',
                firstTime:true, // 第一次加载设置城市的时候 会无限刷新,
                city_id : 1,
            }
        },
        computed: {
            personalData (){
                return this.$store.state.personalData
            },
            cities (){
                return this.$store.state.cities
            }
        },
        props: {

        },
//        prefetch: fetchInitialData,
        preFetch (store) {
            return store.dispatch('getAllTags')
        },
        mounted () {
        },
        methods: {
            toggleLoginForm(){},
            cityChange(e){},

        }

    }
</script>

<style scoped lang="sass">

    @import "../assets/scss/header.scss";

</style>
