<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;">首页</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">一键租场地</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200">
            <div class="w710 mt30">
                <div class="form-title clearfix">
                    <h2>一键租场地</h2>
                </div>
                <div class="process-img">
                    <img src="/static/images/rental-process.jpg">
                </div>

                <!--表单-star-->
                <table class="form-fill" cellpadding="0" cellspacing="0">
                    <tbody>
                    <tr>
                        <td class="label">
                            <span class="red">*</span>
                            您的称呼
                        </td>
                        <td class="fill">
                            <input type="text" placeholder="请输入您的姓名">
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                            <span class="red">*</span>
                            联系方式
                        </td>
                        <td class="fill">
                            <input type="text" placeholder="11位手机号">
                            <button class="btn btn-black send-code">发送验证码</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                            <span class="red">*</span>
                            短信验证码
                        </td>
                        <td class="fill">
                            <input type="text" placeholder="请输入6位短信验证码">
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                            活动信息
                        </td>
                        <td class="fill">
                            <select>
                                <option>上海</option>
                                <option>北京</option>
                                <option>广州</option>
                            </select>
                            <select>
                                <option>活动类型</option>
                            </select>
                            <select>
                                <option>容纳人数</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                            使用日期
                        </td>
                        <td class="fill">
                            <select>
                                <option>开始时间</option>
                            </select>
                            <span class="line"> - </span>
                            <select>
                                <option>结束时间</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                            其他要求
                        </td>
                        <td class="fill">
                            <textarea placeholder="提供更多的信息以方便为您服务"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                        </td>
                        <td class="fill">
                            <button class="btn btn-red">提交</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
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
    @import "../../assets/scss/form.scss";
</style>