<template>
    <div>
        <!--面包屑-star-->
        <div class="breadCrumb w1200">
            <a href="javascript:;" class="red">首页</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;" class="red">场地列表</a>
            <span class="icon-icon_moreArrowRight"></span>
            <a href="javascript:;">咨询清单</a>
        </div>
        <!--面包屑-end-->

        <div class="w1200">
            <div class="inquiry-list">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox"></th>
                            <th>上海虹桥国家会展中心 </th>
                            <th>秀场展馆</th>
                            <th colspan="3">地址：上海市青浦区徐泾崧泽大道333号</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="95px"></td>
                            <td width="300px">场地空间</td>
                            <td width="250px">云SPACE价</td>
                            <td width="300px">最大容纳人数</td>
                            <td width="200px">面积</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>西厅</td>
                            <td>￥25元/㎡/天</td>
                            <td>10000人</td>
                            <td>9664㎡</td>
                            <td><span class="delete-one icon-icon_deleteTrash"></span></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>西厅</td>
                            <td>￥25元/㎡/天</td>
                            <td>10000人</td>
                            <td>9664㎡</td>
                            <td><span class="delete-one icon-icon_deleteTrash"></span></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr>
                        <th><input type="checkbox"></th>
                        <th>上海虹桥国家会展中心 </th>
                        <th>秀场展馆</th>
                        <th colspan="3">地址：上海市青浦区徐泾崧泽大道333号</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td width="95px"></td>
                        <td width="300px">场地空间</td>
                        <td width="250px">云SPACE价</td>
                        <td width="300px">最大容纳人数</td>
                        <td width="200px">面积</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>西厅</td>
                        <td>￥25元/㎡/天</td>
                        <td>10000人</td>
                        <td>9664㎡</td>
                        <td><span class="delete-one icon-icon_deleteTrash"></span></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>西厅</td>
                        <td>￥25元/㎡/天</td>
                        <td>10000人</td>
                        <td>9664㎡</td>
                        <td><span class="delete-one icon-icon_deleteTrash"></span></td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr>
                        <th><input type="checkbox"></th>
                        <th>上海虹桥国家会展中心 </th>
                        <th>秀场展馆</th>
                        <th colspan="3">地址：上海市青浦区徐泾崧泽大道333号</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td width="95px"></td>
                        <td width="300px">场地空间</td>
                        <td width="250px">云SPACE价</td>
                        <td width="300px">最大容纳人数</td>
                        <td width="200px">面积</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>西厅</td>
                        <td>￥25元/㎡/天</td>
                        <td>10000人</td>
                        <td>9664㎡</td>
                        <td><span class="delete-one icon-icon_deleteTrash"></span></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>西厅</td>
                        <td>￥25元/㎡/天</td>
                        <td>10000人</td>
                        <td>9664㎡</td>
                        <td><span class="delete-one icon-icon_deleteTrash"></span></td>
                    </tr>
                    </tbody>
                </table>

                <div class="inquiry-handle clearfix">
                    <label class="fl choice-all">
                        <input type="checkbox">全选
                    </label>
                    <a class="fl delete-all" href="javascript:;">删除</a>
                    <p class="fl statement">声明：免费咨询意向场地，不收取任何费用。</p>
                    <button class="fr btn-rental btn btn-red">立即提交</button>
                </div>

            </div>

            <div class="inquiry-list-no hide">
                <div class="cont">
                    <img src="/static/images/delete.jpg">
                    <div class="text">您暂时没有意向场地询价前往 <a class="red underline" href="javascript:;">找场地&gt;&gt;</a></div>
                    <div class="btn-wrap clearfix">
                        <p class="fl">或者</p>
                        <button class="fr btn-rental btn btn-red">一键租场地</button>
                    </div>
                </div>

                <p class="statement">声明：免费咨询意向场地，不收取任何费用。</p>
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
    @import "../../assets/scss/inquiry.scss";
</style>