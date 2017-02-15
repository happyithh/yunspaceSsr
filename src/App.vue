<template>
    <div id="app">
        <module-header></module-header>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
        <module-footer></module-footer>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Element from 'element-ui'
    Vue.use(Element)

    function fetchData(store){
        return store.dispatch(`getAllTags`,{
                }).then(() => {
        })
    }

    import ModuleFooter from './components/module-footer.vue'
    import ModuleHeader from './components/module-header.vue'
    export default {
        name: 'app',
        data(){
            return {}
        },
        computed: {
            loading(){
                return this.$store.state.loading
            }
        },
        components: {
            ModuleFooter, ModuleHeader
        },
        mounted () {
        },
        preFetch: fetchData,

        beforeMount () {
            fetchData(this.$store)
        },

        methods: {}

    }
</script>

<style lang="sass">
    @import "assets/scss/list.scss";
    @import 'assets/css/css.css';
    @import 'assets/css/el-change.css';
    @import 'assets/css/public.css';
    @import 'assets/css/icon.css';
</style>
