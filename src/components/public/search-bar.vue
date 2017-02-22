<template>

    <!--搜索条-star-->
    <div class="search-bar clearfix">
        <div class="fl search-box clearfix">
            <div class="fl box-wrap">
                <!--<input class="box" type="text" placeholder="目的">-->
                <!--<i class="icon icon-icon_selectDownArrowThin"></i>-->

                <!--<ul class="boxcont">-->
                    <!--<li>展览展示</li>-->
                    <!--<li class="current">商业发布</li>-->
                    <!--<li>晚会年会</li>-->
                    <!--<li>展览展示</li>-->
                    <!--<li>商业发布</li>-->
                    <!--<li>晚会年会</li>-->
                <!--</ul>-->
                <el-select v-model="searchEventType" placeholder="目的">
                    <el-option
                            v-for="(k,v) in eventType"
                            :label="v"
                            :value="v">
                    </el-option>
                </el-select>
            </div>
            <div class="fl box-wrap">
                <!--<input class="box" type="text" placeholder="面积">-->
                <!--<i class="icon icon-icon_selectDownArrowThin"></i>-->

                <el-select v-model="searchAreaSize" placeholder="面积">
                    <el-option
                            v-for="(k,v) in areaSize"
                            :label="k"
                            :value="v">
                    </el-option>
                </el-select>
            </div>
        </div>

        <button @click="goToSearch" class="fl btn btn-black search-btn"><i class="icon icon-icon_searchBarSearch"></i>搜索</button>
        <router-link to="/form/rent" class="fl btn btn-red" style="margin-right: 0;color:#fff"><i class="icon icon-icon_searchBarOne"></i>一键租场地</router-link>
    </div>
    <!--搜索条-end-->

</template>

<script>
    module.exports = {
        data(){
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                searchEventType: '',
                searchAreaSize : null
            }


        },

        components: {},
        computed: {
            eventType(){
                return this.$store.state.allTags.activity_type
            },
            areaSize(){
                return this.$store.state.allTags.area_size
            }
        },
        mounted () {
            var self=this;
//            self.getBanner();
        },
        methods: {
            goToSearch(){
                router.push('/site/search')
            }
        }
    }
</script>

<style scoped>

    .boxcont{
        width: 100%;
        max-height: 275px;
        background: #fff;
        text-align: left;
        border: 1px solid #181C1F;
        margin-left: -1px;
        margin-top: 11px;
    }
    .boxcont li{
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-indent: 10px;
        cursor: pointer;
    }
    .boxcont li:hover{
        background-color: #eee;
    }
    .boxcont li.current{
        background: #AA2C3C;
        color: #fff;
    }



</style>
