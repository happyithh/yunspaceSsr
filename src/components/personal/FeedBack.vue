<template>
    <div class="feedback">
        <div class="tblist feedbackfont">感谢您的意见和反馈，我们会努力优化、提高体验，感谢您的支持！</div>
        <textarea v-model="FeedbackText" class="feedbackText" rows="22" placeholder="请填写具体内容帮助我们了解您的意见和建议"></textarea>
        <button @click="getFeedbackText" class="fl submit-btn submit-btn-sm btn js-feedback-btn">提交</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showstate: 0,
                FeedbackText: '',
            }
        },
        components: {},
        mounted(){

        },
        computed : {
            personalData (){
                return this.$store.state.personalData
            }
        },
        methods: {
            getFeedbackText(){
                var self=this;
                var FeedbackText = $('.feedbackText').val();

                if(FeedbackText.length < 3){
                    return false;
                }
                $.post({
                    url: window.YUNAPI.feedBack,
                    data:{
                        user_id: self.personalData.id,
                        content: self.FeedbackText
                    },
                    success : function (data) {
//                        console.log(data);
                        self.$message({
                            message: '提交成功!',
                            type: 'success',
                            duration : 2000
                        });
                        self.FeedbackText='';


                        self.$parent.loading = false;
                    }
                });
            }
        }
    }
</script>