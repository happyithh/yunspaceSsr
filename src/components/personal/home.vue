<template>

    <div class="w1200 mt30 clearfix personal">
        <div style="background-color: #fff;position: absolute;height: 100%;width: 100%;z-index: -1;top:0;left: 0"></div>
        <div class="per-left">
            <div class="per-left-top">
                <div class="head-img">
                    <img width="100" height="100" src="/static/images/avatar.png" alt="">
                    <!--<img :src="personalData.head_portrait.url" alt="">-->

                </div>
                <div class="p-text name">
                    <!--{{personalData.name}}{{nowtime}}-->
                </div>
                <div class="p-text">
                    <i class="icons icon-mobile"></i>
                    <!--{{telnumbs}}-->
                </div>
                <a href="javascript:;" class="fr log-out" @click="logout">
                    退出
                </a>
            </div>
            <ul class="mt20 alist">
                <li><router-link to="/personal/info">个人信息</router-link></li>
                <li><router-link to="/personal/password">密码设置</router-link></li>
                <li><router-link to="/personal/enquiry">我的询价</router-link></li>
                <!--<li><router-link to="/personal/order">我的订单</router-link></li>-->
                <li><router-link to="/personal/collect">我的收藏</router-link></li>
                <!--<li><router-link to="/personal/collect">我的消息</router-link></li>-->
                <li><router-link to="/personal/feedback">意见反馈</router-link></li>
            </ul>
        </div>
        <div class="per-right">
            <div v-if='activeNav == "我的订单"' class="order-process clearfix">
                <div class="process-piece success">
                    <span class="process-title">提交预订</span>
                    <div class="clearfix">
                        <div class="num">1</div>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="process-piece red">
                    <span class="process-title">待接单</span>
                    <div class="clearfix">
                        <div class="num">2</div>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="process-piece">
                    <span class="process-title">已接单</span>
                    <div class="clearfix">
                        <div class="num">3</div>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="process-piece">
                    <span class="process-title">活动执行中</span>
                    <div class="clearfix">
                        <div class="num">4</div>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="process-piece">
                    <span class="process-title">活动已结束</span>
                    <div class="clearfix">
                        <div class="num">5</div>
                    </div>
                </div>
            </div>
            <div class="info-top clearfix">
                <h2>{{this.$route.name}}</h2>
                <!--<p class="state">【收到报价】</p>-->
                <div v-if="this.$route.path == '/personal/enquiry/dtl'" class="inq-btnwrap clearfix">
                    <a class="fl btn-cancel" href="JavaScript:;" @click="showstate=!showstate">取消资询</a>
                    <a class="fr btn-goback" href="JavaScript:;">返回</a>
                </div>
            </div>

            <router-view></router-view>


        </div><!--per-right-end-->
        <!--取消资询-弹窗-->
        <div class="cancel-wp" v-show="showstate && !showmask">
            <div class="mask-bg" @click="showstate=!showstate"></div>
            <div class="cancelcont">
                <!--关闭按钮-->
                <a class="icons icon-bgclose btnclose" @click="showstate=!showstate"></a>

                <!--取消资询-->
                <div class="c-consulting">
                    <h2>取消资询</h2>
                    <div class="cont">
                        <textarea rows="15" placeholder="请输入取消理由（至少15字）"></textarea>
                    </div>
                </div>

                <!--取消资询-->
                <div class="c-reason hide">
                    <h2>填写理由</h2>
                    <div class="cont">
                        <div class="title">不感兴趣（可多选）</div>
                        <ul>
                            <li class="active">
                                <i class="icons icon-atv"></i>报价太高
                            </li>
                            <li>
                                <i class="icons icon-atv"></i>
                                收到报价太高，已找到场地
                            </li>
                            <li>
                                <i class="icons icon-atv"></i>
                                场地本身条件不匹配
                            </li>
                            <li>
                                <i class="icons icon-atv"></i>
                                <textarea rows="5" placeholder="请输入其他理由"></textarea>
                            </li>
                        </ul>
                    </div>
                </div>

                <!--我要看场地-->
                <div class="c-lookplace hide">
                    <h2>我要看场地</h2>
                    <div class="cont">
                        <div class="plantime">
                            <div class="title">计划看场时间</div>
                            <div class="schedule">
                                <i class="icons icon-schdl"></i>
                                <input type="text" value="2016-09-10 14:30">
                            </div>
                        </div>
                        <textarea rows="10" placeholder="备注"></textarea>
                    </div>
                </div>

                <button class="submit-btn submit-btn-sm btn">确定</button>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                title:'',
                nav: [
                    '个人信息', '密码设置', '我的询价', '我的订单', '我的收藏', '我的消息', '意见反馈'
                ],
                activeNav: '个人信息',
                subPage: '',
                page: 1,
                recordCount: 205,
                showstate: 0,
                authorize:{},
                nowtime:{},
                telnumbs:''
            }
        },
        components: {},
        computed: {
            personalData (){
                var data = this.$store.state.personalData
                this.telnumbs = data.mobile.substr(0,3)+"****"+data.mobile.substr(7);
                return data
            }
        },
        mounted(){
//            this.authorize.uid = personalData.uid
//            this.authorize.access_token = personalData.access_token
            //personalData.mobile=personalData.substr(0,3)+"****"+str.substr(7);
            var now = new Date(),
                    hour = now.getHours();
            if(hour < 6){this.nowtime='，凌晨好！'}
            else if (hour < 9){this.nowtime='，早上好！'}
            else if (hour < 12){this.nowtime='，上午好！'}
            else if (hour < 14){this.nowtime='，中午好！'}
            else if (hour < 17){this.nowtime='，下午好 ~'}
            else if (hour < 19){this.nowtime='，傍晚好！'}
            else if (hour < 22){this.nowtime='，晚上好！'}
            else {this.nowtime='，夜里好！'}


        },
        methods: {
            navClick(event){
                this.activeNav = event.target.innerHTML;
            },
            xjContent(){
                this.subPage = '询价详情';
                this.activeNav = '询价详情'
            },
            logout(){
                this.$store.commit('personalDataChange',{});//保存个人信息
                router.replace('/')
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../../assets/css/personal.css";
</style>




