<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;">首页</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">场地名称</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">立即预定</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200">
            <div class="w710 mt30">
                <div class="form-title clearfix">
                    <h2>立即预订</h2>
                </div>

                <div class="box-list-box reserve-dtl">
                    <a class="fl img" href="javascript:;">
                        <img src="" alt="列表模式">
                    </a>
                    <div class="fl text">
                        <h3>
                            <a href="javascript:;">云SPACE 上海国际工业园秀场</a>
                        </h3>
                        <p>地址:上海市 徐汇区 幸福路 298号</p>
                        <p>场地类型 </p>
                        <div class="assort clearfix">
                            <p><i class="icon-icon_spaceArea"></i> 300㎡ <span class="line"></span></p></p>
                            <p><i class="icon-icon_spacePeople"></i> 500人 <span class="line"></span></p>
                            <p><i class="icon-icon_spaceHeight"></i> 30m <span class="line"></span></p>
                            <p><i class="icon-icon_spaceWeight"></i> 300t</p>
                        </div>
                        <p>套餐详情：？？？</p>
                        <p>预订须知：？？？</p>
                    </div>
                    <div class="fr price">
                        <p><strong>￥80,000</strong>/天 起</p>
                        <span>市场价: ¥ 100,000/天</span>
                    </div>
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
                            <a class="setphone" href="javascript:;">修改手机</a>
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
        store.commit('LOADING', true)
        return store.dispatch(`getBookingData`,{
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
        computed: {
            cities (){
                return this.$store.state.cities
            },
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
        methods: {

        }
    }

</script>
<style lang="sass" scoped>
    @import "../../assets/scss/form.scss";
</style>