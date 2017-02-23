<template>
    <div class="cont404">
        <img src="/static/images/404.jpg">
        <a class="btn-backhome" href="/" title="回主页"></a>
    </div>
</template>
<script>
    function fetchData(store){
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
    }

</script>
<style lang="sass" scoped>
    .cont404{
        position: relative;
        width: 260px;
        height: 530px;
        height:-moz-calc(100% - 398px);
        height:-webkit-calc(100% - 398px);
        height: calc(100% - 398px);
        margin: 0 auto;
    }
    .cont404 img{
        width: 260px;
        height: 530px;
    }
    .btn-backhome{
        width: 120px;
        height: 30px;
        display: block;
        position: absolute;
        right: 7px;
        bottom: 59px;
        z-index: 1;
    }
</style>