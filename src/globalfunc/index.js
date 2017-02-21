import {YUNAPI} from '../api'
export const FUNC = {
    isGetPhoneCode : false,
    sendPhoneCode : function (phone,success,$ele) {
        if(!phone){
            APP.$message({
                message: '手机号不能为空!',
                type: 'error',
                duration : 2000
            });
            return;
        }
        var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
        // console.log(mobile.test(mobile))
        if(phone.length == 11 && mobile.test(phone)){

        }else{
            APP.$message({
                message: '手机号格式不正确!',
                type: 'warning',
                duration : 2000
            });
            return;
        }

        if(this.isGetPhoneCode){
            return
        }
        this.isGetPhoneCode = true
        $.get({
            url: YUNAPI.sendPhoneCode,
            data : {
                phone : phone
            },
            success: function (data) {

                var status = data.status == 1 ? 'success' : 'warning';
                APP.$message({
                    message: data.message,
                    type: status,
                    duration : 2000
                });

                if(data.status == 1){
                    this.codeTiming($ele)
                }
                this.isGetPhoneCode = false
                if(success){
                    success(data);
                }

            }.bind(this),

            error : function () {
                this.isGetPhoneCode = false
            }.bind(this)

        });
    },
    codeTiming : function ($ele) {
        var time = 60;
        var btn = $($ele);
        btn.text('60s重新发送');
        btn.attr('disabled',true);
        var interval = setInterval(function () {
            time -- ;
            if(time < 0){
                time == 60;
                clearInterval(interval);
                btn.text('发送验证码');
                btn.attr('disabled',false);
            }else{
                btn.text(time+'s重新发送')
            }

        },1000)
    }
}