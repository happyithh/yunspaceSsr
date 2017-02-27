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
                        <img :src="spaceDtl.logo" alt="列表模式">
                    </a>
                    <div class="fl text">
                        <h3>
                            <a href="javascript:;" v-text="spaceDtl.name">云SPACE 上海国际工业园秀场</a>
                        </h3>
                        <p>地址:{{spaceDtl.city_name}}市 {{spaceDtl.district}} {{spaceDtl.address}}</p>
                        <p>场地类型: {{spaceDtl.site_type}}</p>
                        <div class="assort clearfix">
                            <p><i class="icon-icon_spaceArea"></i> {{spaceDtl.area}}㎡ <span class="line"></span></p></p>
                            <p><i class="icon-icon_spacePeople"></i> {{spaceDtl.site_max_people}}人 <span class="line"></span></p>
                            <p><i class="icon-icon_spaceHeight"></i> {{spaceDtl.height}}m <span class="line"></span></p>
                            <p><i class="icon-icon_spaceWeight"></i> {{spaceDtl.accept_weight}}</p>
                        </div>
                        <p v-if="!!spaceDtl.set_info">套餐详情: {{spaceDtl.set_info}}</p>
                        <p v-if="!!spaceDtl.booking_notes">预订须知：{{spaceDtl.booking_notes}}</p>
                    </div>
                    <div class="fr price">
                        <!--<p><strong>￥80,000</strong>/天 起</p>-->
                        <p><strong>{{spaceDtl.special_price}}</strong></p>
                        <span>市场价: {{spaceDtl.market_price}}</span>
                    </div>
                </div>

                <!--表单-star-->
                <!--<table class="form-fill" cellpadding="0" cellspacing="0">-->
                    <!--<tbody>-->
                    <!--<tr>-->
                        <!--<td class="label">-->
                            <!--<span class="red">*</span>-->
                            <!--您的称呼-->
                        <!--</td>-->
                        <!--<td class="fill">-->
                            <!--<input type="text" placeholder="请输入您的姓名">-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td class="label">-->
                            <!--<span class="red">*</span>-->
                            <!--联系方式-->
                        <!--</td>-->
                        <!--<td class="fill">-->
                            <!--<input type="text" placeholder="11位手机号">-->
                            <!--<a class="setphone" href="javascript:;">修改手机</a>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td class="label">-->
                            <!--使用日期-->
                        <!--</td>-->
                        <!--<td class="fill">-->
                            <!--<select>-->
                                <!--<option>开始时间</option>-->
                            <!--</select>-->
                            <!--<span class="line"> - </span>-->
                            <!--<select>-->
                                <!--<option>结束时间</option>-->
                            <!--</select>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td class="label">-->
                        <!--</td>-->
                        <!--<td class="fill">-->
                            <!--<button class="btn btn-red">提交</button>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--</tbody>-->
                <!--</table>-->
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
                            <span class="fl line"> - </span>
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
        store.commit('LOADING', true)
        return store.dispatch(`getSpaceDtlData`,{
                    id : store.state.route.params.id
                }).then(() => {
                    store.commit('LOADING', false)
        })
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
        computed: {
            cities (){
                return this.$store.state.cities
            },
            spaceDtl (){
                return this.$store.state.SpaceDtlData[this.$route.params.id]
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