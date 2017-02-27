<template>
    <div>
        <div class="info-from-piece">
            <span>手机号</span>
            <input type="text" v-model="changePassWordData.mobile" class="disable" disabled>
        </div>
        <div class="info-from-piece clearfix">
            <span>验证码</span>
            <input  v-model="changePassWordData.auth_code" type="text" placeholder="请输入短信验证码" class="w410 fl">
            <button class="getCode btn fl" id="personalChangePasswordGetCode" @click="sendPhoneCode($event)">获取验证码</button>
        </div>
        <div class="info-from-piece">
            <span>新密码</span>
            <input type="password" v-model="changePassWordData.password" placeholder="请输入新密码">
        </div>
        <div class="info-from-piece">
            <span>确认密码</span>
            <input type="password" v-model="changePassWordData.password_confirmation" placeholder="确认新密码">
        </div>

        <button type="button" class="submit-btn btn" @click="changePasswordNow">提交</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showstate: 0,
                FeedbackText: '',
                changePassWordData : {
                    type : 'sms',
                    mobile : '',
                    code_token : '',
                    auth_code : '',
                    password : '',
                    password_confirmation : ''
                },
            }
        },
        components: {},
        mounted(){
            this.changePassWordData.mobile = this.personalData.mobile
        },
        computed : {
            personalData (){
                return this.$store.state.personalData
            }
        },
        methods: {
            sendPhoneCode(e){
                var self = this;
                var success = function (data) {
//                    self.inquiryData.code_token = data.data;
                    self.changePassWordData.code_token = data.data;
                };
                GlobleFun.sendPhoneCode(self.personalData.mobile,success,e.target);
            },
            changePasswordNow(){
                var self = this;
                if(!this.changePassWordData.password || !this.changePassWordData.password_confirmation){
                    APP.$message({
                        message: "密码及确认密码不能为空",
                        type: 'warning',
                        duration : 2000
                    });
                    return
                }
                $.ajax({
                    type :'put',
                    url: window.YUNAPI.host + 'api/auth/password',
                    data : self.changePassWordData,
                    success: function (data ,status, xhr) {

                        GlobleFun.httpMessage(data)

                        if(data.status == 1){
                            router.replace('/personal/info')
                            GlobleFun.clearObj(self.changePassWordData)
                            self.changePassWordData.type = 'sms'
                        }
                    },
                    error : function () {
                    }
                });

            }
        }
    }
</script>