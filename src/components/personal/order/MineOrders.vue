<template>
    <div>
        <!--<div class="alink">-->
            <!--<a href="" class="active">全部</a>-->
            <!--<a href="">场地方待接单</a>-->
            <!--<a href="">场地方已接单</a>-->
            <!--<a href="">活动执行中</a>-->
            <!--<a href="">活动已结束</a>-->
            <!--<a href="">订单已取消</a>-->
        <!--</div>-->
        <table class="tblist" cellspacing="0" cellpadding="0">
            <tr>
                <th width="20%">提交时间</th>
                <th width="10%">城市</th>
                <th width="25%">活动时间</th>
                <th width="10%">活动类型</th>
                <th width="15%">总金额</th>
                <!--<th width="10%">关闭理由</th>-->
                <th width="10%">操作</th>

            </tr>
            <tr v-for="item in orderlist">
                <td>{{item.updated_at}}</td>
                <td>{{item.order_city}}</td>
                <td>{{item.s_time}}~{{item.e_time}}</td>
                <td>{{item.activity_type}}</td>
                <td>{{item.budget_amount}}</td>
                <!--<td>已收到2份报价</td>-->
                <td><router-link :to="'/personal/order/dtl/'+item.id">查看</router-link></td>
            </tr>
        </table>
        <div class="text-center">
            <p v-if="orderlist.length <= 0">暂无订单</p>

            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    :page-size="12"
                    layout="prev, pager, next"
                    :total="total"
                    v-if="orderlist.length > 0">
            </el-pagination>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                page: 1,
                recordCount: 205,
                orderlist: [],
                total : 0
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
            this.getList()

        },
        methods: {
            handleCurrentChange(val) {
                this.getList(val)
            },
            getList(page){
                var self = this;
                var page = page || 1
                $.ajax({
                    url: window.YUNAPI.host + 'api/users/' + self.personalData.id + '/orders',
                    data: GlobleFun.objConcat(self.$store.getters.validationData,{page:page}),
                    success:function (data) {
                        self.orderlist=data.orders;
                        self.total = data.page_count

                        self.$parent.loading = false;
                    }
                });
            }
        }
    }
</script>