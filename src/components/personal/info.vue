<template>
    <div class="info-form" >
        <!--<div class="clearfix">-->
            <!--<div class="head-img-big">-->
                <!--<img :src="personalData.head_portrait.url" alt="">-->
                <!--&lt;!&ndash;<a href="" class="change-info">修改资料</a>&ndash;&gt;-->
            <!--</div>-->
        <!--</div>-->
        <div class="info-from-piece">
            <span>称 呼</span>
            <input class="w270" type="text" :value="personalData.name" disabled>
            <!--<input class="w270 ml15" type="text" :value="personalData.name" disabled>-->
        </div>
        <div class="info-from-piece">
            <span>手机号</span>
            <input type="text" :value="personalData.mobile" disabled>
        </div>
        <!--<div class="info-from-piece">-->
            <!--<span>公司名称</span>-->
            <!--<input type="text" :value="personalData.company_name" disabled>-->
        <!--</div>-->
        <!--<div class="info-from-piece">-->
            <!--<span>第三方绑定</span>-->
            <!--<div class="third-party-info">-->
                <!--<img src="/static/images/personal/weixin.png" alt="">-->
                <!--<p>lihb</p>-->
            <!--</div>-->
            <!--<div class="third-party-info">-->
                <!--<img src="/static/images/personal/xinlang.png" alt="">-->
                <!--<p>lihb</p>-->
            <!--</div>-->
            <!--<div class="third-party-info">-->
                <!--<img src="/static/images/personal/weixin.png" alt="">-->
                <!--<p>lihb</p>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        components: {},
        computed: {
            personalData (){
                return this.$store.state.personalData
            }
        },
        mounted(){
            this.$store.commit('loading',false);
        },
        methods: {

        }
    }
</script>