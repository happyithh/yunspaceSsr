<template>
    <div></div>
</template>
<script>

    function fetchData(store){
        store.commit('LOADING', true)
        return store.dispatch(`getSiteHomeData`,{
                    id : store.state.route.params.id
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
        },
        preFetch: fetchData,

        beforeMount () {
            fetchData(this.$store)
        },
        computed: {

        },
        methods: {
        },

        //记住密码
        rememberPassword(){}
    }

</script>