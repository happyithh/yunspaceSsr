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
                    <input class="range-slider" type="hidden" value="25,75"/>
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
                to: 100,
                step: 25,
                scale: [0,25,50,75,100,125,150],
                format: '%s',
                width: 300,
                showLabels: true,
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
</style>