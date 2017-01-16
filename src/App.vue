<template>
    <div id="app">
        <module-header></module-header>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
        <module-footer></module-footer>
        <div v-loading="loading" class="el-loading-yun"></div>
        <div v-if="loading" class="loading-bg"></div>
    </div>
</template>

<script>
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
            this.$store.dispatch('getAllTags')
        },

        methods: {}

    }
</script>

<style lang="stylus">


</style>
