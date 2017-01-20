<template>
    <div>
        <!--提交成功-star-->
        <div class="success">
            <h2><span></span>️提交成功</h2>
            <p>您的需求已提交成功，我们将在30分钟内与您取得联系，请保持电话畅通！</p>
            <p>客服工作时间：09:00-18:00（周末除外）
            <br/>客服电话：400-056-0599</p>

            <p class="jump">5秒后自动跳转到首页
                <br>点击手动跳转到<a class="red underline" href="javascript:;">首页</a>
            </p>

        </div>
        <!--提交成功-end-->
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
    .success{
        width: 500px;
        margin: 50px auto;
        border: 1px solid #DDDFE2;
        text-align: center;
    }
    .success h2{
        width: 500px;
        height: 55px;
        line-height: 55px;
        background: #000;
        color: #fff;
        text-align: center;
        font-size: 16px;
        margin-left: -1px;
    }
    .success p{
        color: #000;
        line-height: 1.6em;
        margin: 15px 0 10px;
    }
    .success .jump{
        font-size: 12px;
        color: #73777C;
        line-height: 1.8em;
        margin: 20px 0 15px;
    }
    .success .jump a{
        margin-left: 10px;
    }
</style>