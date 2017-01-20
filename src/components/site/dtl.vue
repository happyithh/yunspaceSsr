<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">首页</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;" class="red">找场地</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">场地名称</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200 mt30">
            <div class="site-dtl-left">
                <h1>场地名称</h1>
                <div class="banner" >
                    <div class="swiper-container banner-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in [1,2,3,1,1]">
                                <img class="imgload" src="/static/images/test/3to2.png">
                            </div>
                            <!--<div class="swiper-slide">-->
                            <!--<img class="imgload" src="http://www.atool.org/placeholder.png?size=790x526&text=图片&&bg=836&fg=fff" alt="首页banner图片01">-->

                            <!--</div>-->
                            <!--<div class="swiper-slide">-->
                            <!--<img class="imgload" src="http://www.atool.org/placeholder.png?size=790x526&text=图片&&bg=836&fg=fff" alt="首页banner图片01">-->
                            <!--</div>-->
                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination"></div>

                        <!-- 如果需要导航按钮 -->
                        <div class="yun-swiper-prev" v-if="siteDtl.img_paths.length > 1">
                            <span class="icon-arrowleft"></span>
                        </div>
                        <div class="yun-swiper-next" v-if="siteDtl.img_paths.length > 1">
                            <span class="icon-arrowright"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return {
                siteDtl:{
                    img_paths:[]
                }
            }
        },
        computed: {
            loading(){
                return this.$store.state.loading
            }
        },

        mounted () {
            var swiper = new Swiper('.banner-swiper', {
                nextButton: '.yun-swiper-next',
                prevButton: '.yun-swiper-prev',
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                paginationHide:true,
                autoplay: 3000
            });
        },

        methods: {}

    }
</script>

<style src="../../assets/scss/site-dtl.scss" lang="sass">

</style>