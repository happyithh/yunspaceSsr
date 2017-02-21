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
                            <input v-model="rent.contact" type="text" placeholder="请输入您的姓名">
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                            <span class="red">*</span>
                            联系方式
                        </td>
                        <td class="fill">
                            <input v-model="rent.phone" type="text" placeholder="11位手机号">
                            <button @click="sendPhoneCode" class="btn btn-black send-code">发送验证码</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                            <span class="red">*</span>
                            短信验证码
                        </td>
                        <td class="fill">
                            <input v-model="rent.auth_code" type="text" placeholder="请输入6位短信验证码">
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                            活动信息
                        </td>
                        <td class="fill">
                            <select v-model="rent.order_city">
                                <option :value="v.name" v-for="(v,k) in cities">{{v.name}}</option>
                            </select>
                            <select v-model="rent.activity_type">
                                <option :value="v" v-for="(v,k) in eventType">{{v}}</option>
                            </select>
                            <select v-model="rent.numberof_activities">
                                <option :value="k" v-for="(v,k) in activityPeople">{{v}}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                            使用日期
                        </td>
                        <td class="fill">
                            <el-date-picker
                                    v-model="rent.s_time"
                                    align="left"
                                    type="date"
                                    class="fl box-wrap"
                                    placeholder="选择日期">
                            </el-date-picker>
                            <span class="line"> - </span>
                            <el-date-picker
                                    v-model="rent.e_time"
                                    align="left"
                                    type="date"
                                    class="fl box-wrap"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                            其他要求
                        </td>
                        <td class="fill">
                            <textarea v-model="rent.activities_required" placeholder="提供更多的信息以方便为您服务"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="label">
                        </td>
                        <td class="fill">
                            <button @click="submitData" class="btn btn-red">提交</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script>
    import {YUNAPI} from '../../api'
    import {FUNC} from '../../globalfunc/index'
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
                rent:{
                    s_time:'',
                    e_time : '',
                    activities_required : '',
                    city_id : 1,
                    order_city : '上海',
                    code_token : '',
                    phone:'',
                    contact:'',
                    auth_code : '',
                    numberof_activities : '50',
                    activity_type : '展览展示'
                },


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
            cities (){
                return this.$store.state.cities
            },
            eventType(){
                return this.$store.state.allTags.activity_type
            },
            allTags(){
                return this.$store.state.allTags
            },
            activityPeople(){
                return this.$store.state.allTags.activity_people
            },

        },
        methods: {
            submitData(){
                var self = this;
                var sd = new Date(this.rent.s_time);
                var ed = new Date(this.rent.e_time);

                this.rent.s_time = sd.getFullYear() + '-' + (sd.getMonth() + 1) + '-' + sd.getDate() ;
                this.rent.e_time = ed.getFullYear() + '-' + (ed.getMonth() + 1) + '-' + ed.getDate() ;

                $.post({
                    url:YUNAPI.submitOnekeyDemand,
                    data:self.rent,
                    success:function (data) {

                        if(data.status == 1 || data.state == 1){

                            router.replace('/form/success');
                        }else{
                            APP.$message({
                                message: data.message,
                                type: 'warning',
                                duration : 2000
                            });
                        }
                    },
                    error:function () {

                    }
                })
            },
            sendPhoneCode(e){
                var self = this;
                var success = function (data) {
                    self.rent.code_token = data.data;
                };
                FUNC.sendPhoneCode(this.rent.phone,success,e.target);
            }
        }
    }

</script>
<style lang="sass" scoped>
    @import "../../assets/scss/form.scss";
</style>