<template>
    <div>
        <div id="map" ></div>
        <div class="content">
            <div class="price">
                <div class="title">
                    <span>价格范围</span>
                    <span>不限</span>
                </div>
                <div class="price-slider">
                    <input class="range-slider" type="hidden" value="0,150"/>
                </div>
                <div class="title mb10">
                    <span>配套服务</span>
                    <i class="icon icon-icon_selectDownArrowThin"></i>
                </div>
                <div class="choose-fw">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用"></el-checkbox>
                        <el-checkbox label="选中且禁用"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <button class="search-btn mb20">搜索</button>
                <div class="sort-type mb15">
                    <span>默认</span>
                    <font>|</font>
                    <span>价格<i class="icon icon-icon_rankArrowUp"></i></span>
                    <font>|</font>
                    <span>人数<i class="icon icon-icon_rankArrowUp"></i></span>
                </div>
                <div class="site-list">
                    <ul>
                        <li v-for="i in [1,1,1,1]">
                            <a href=""><img src="/static/images/test/3to2.png" alt=""></a>
                            <a class="title">上海龙猫咖啡</a>
                            <div class="dtl">
                                <span><i class="icon icon-icon_spaceArea"></i>300㎡</span>
                                <font>|</font>
                                <span><i class="icon icon-icon_spacePeople"></i> 500人</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import {yunspaceMapStyle} from '../../api/mapStyle'
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
                mapOptions : {minZoom:12,maxZoom:18,enableMapClick:false},
                checkList: ['选中且禁用','复选框 A']
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
            $('.view,#map,#app').css({
                'height' : '100%',
                'width' : '100%'
            })

            var self = this;
            self.$store.commit('LOADING', false)
            var map = new BMap.Map("map",self.mapOptions);
            map.setMapStyle({styleJson:yunspaceMapStyle});
            var myGeo = new BMap.Geocoder();

            myGeo.getPoint("上海市中心", function(point){
                if (point) {
                    map.centerAndZoom(point,12);
                    //self.request();
                }else{
                    //TODO //没有这个点的提示
                }
            },'上海');

            $('.range-slider').jRange({
                from: 0,
                to: 150,
                step: 25,
                scale: [0,'2万','5万','10万','20万','50万','不限'],
                format: '%s',
                width: 380,
                showLabels: false,
                isRange : true,
                snap: true
            });

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
    @import "../../assets/scss/map.scss";
    @import "../../assets/range/jquery.range.css";
    @import "../../assets/range/range-change.css";
    @import "../../assets/css/el-change-new.css";
</style>