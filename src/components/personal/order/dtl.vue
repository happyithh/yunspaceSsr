<template>
    <div>
        <div class="pinfo clearfix">
            <img src="/static/images/personal/head.png" alt="">
            <span>李丽丽(场地顾问)</span>
            <a href="">138656754389</a>
        </div>
        <div class="oinfo">
            <span>提交时间:</span>
            <span>{{ordersDtl.created_at}}</span>
        </div>
        <div class="oinfo">
            <span>联系人:</span>
            <span>{{ordersDtl.contact}}</span>
            <span>{{ordersDtl.uid}}</span>
        </div>
        <div class="oinfo">
            <span>城市:</span>
            <span>上海</span>
        </div>
        <div class="oinfo">
            <span>活动时间:</span>
            <span>{{ordersDtl.s_time}}至{{ordersDtl.e_time}}</span>
            <span><a href="">可改期</a></span>
        </div>
        <div class="oinfo">
            <span>活动人数:</span>
            <span>{{ordersDtl.number_of_activities}}人</span>
        </div>
        <div class="oinfo">
            <span>活动类型:</span>
            <span>{{ordersDtl.activity_type}}</span>
        </div>
        <div class="oinfo">
            <span>场地预算:</span>
            <span>{{ordersDtl.budget_amount}}</span>
        </div>
        <div class="oinfo">
            <span>具体要求:</span>
            <span>{{ordersDtl.activities_required}}</span>
        </div>


        <div class="place-info mt20" v-for="item in spaces">
            <div class="place-info-mian clearfix">
                <router-link :to="'/space/'+item.id" class="place-logo">
                    <img :src="item.first_picture.url_400_267" alt="">
                </router-link>
                <!--<a href="" class="place-logo">-->
                    <!---->
                <!--</a>-->
                <div class="info-detail">
                    <router-link :to="'/space/'+item.id">
                        {{item.title}}
                    </router-link>
                    <!--<p>{{item.title}}</p>-->
                    <p>{{item.district}} | {{item.address}}</p>
                    <div class="place-tags clearfix">
                        <span>{{item.max_seating_capacity}}人</span>
                        <span>{{item.area}}㎡</span>
                        <!--<span>{{item.event_type}}</span>-->
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ordersDtl: [],
                spaces:[]
            }
        },
        components: {},
        computed: {
            personalData (){
                return this.$store.state.personalData
            }
        },
        mounted(){
            var self = this;
            $.ajax({
                url: window.YUNAPI.host + 'api/users/' + self.personalData.id + '/orders/' + this.$route.params.id,
                data: self.$store.getters.validationData,
                success:function (data) {
                    self.ordersDtl = data.order;
                    self.spaces = data.order.spaces;

                    self.$parent.loading = false;
                }
            });
        },
        methods: {

        }
    }
</script>
