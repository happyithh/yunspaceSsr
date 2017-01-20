<template>
    <header id="header">
        <nav class="clearfix">
            <div class="fl">
                <div class="fl logo">
                    <router-link to="/">云SPACE</router-link>
                    <!--<a href="javascript:;">云SPACE</a>-->
                </div>
                <div class="fl nav-location dorpdown city-choose">
                    <div style="position: relative">
                        <p>热门测试</p>
                        <i class="icon-triangedown"></i>
                    </div>
                    <!--<template>-->
                        <!--<el-select v-model="city_id" v-on:change="cityChange" id="cityId">-->
                            <!--<el-option-->
                                    <!--v-for="item in cities"-->
                                    <!--:label="item.name"-->
                                    <!--:value="item.id">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                    <!--</template>-->
                    <div class="city-dorpdown">
                        <div class="hot-city">
                            <span class="active">热门城市</span>
                            <span>北京</span>
                            <span>北京</span>
                            <span>北京</span>
                            <span>北京</span>
                        </div>
                        <div class="border-line"></div>
                        <div class="common-city">
                            <span v-for="item in [1,1,1,1,1,1,1,1,1,1,1,]">北京</span>
                            <span>北京</span>
                            <span>北京</span>
                            <span>北京</span>
                        </div>
                    </div>
                </div>
                <ul class="fl navbar clearfix">
                    <!--<router-link tag="li" to="/">-->
                    <!--<a href="/" target="_blank">首页</a>-->
                    <!--</router-link>-->
                    <!--<li :class="this.$router.path == '/' ? 'current' : '' ">-->
                    <!--<router-link to="/">首页</router-link>-->
                    <!--</li>-->
                    <router-link tag="li" to="/" exact>
                        <a>首页</a>
                    </router-link>
                    <router-link tag="li" to="/site">
                        <a>找场地</a>
                    </router-link>
                    <router-link tag="li" to="/activity">
                        <a>活动</a>
                    </router-link>
                    <router-link tag="li" to="/ip">
                        <a>资讯</a>
                    </router-link>

                    <li>
                        <a href="http://www2.yunspace.com.cn/">
                            返回旧版
                        </a>
                    </li>
                    <!--<li><a target="_blank" href="javascript:;">新发现</a></li>-->
                </ul>
            </div>
        </nav>
        </div>

    </header>

</template>

<script>
    const fetchInitialData = store => {

//            store.dispatch(`getHomeData`)
//            store.dispatch(`getAllTags`)
//            store.dispatch(`getTopics`)
        return store.dispatch(`getAllTags`)
    }
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
