<template>
    <div>
        <!--搜索版块-star-->
        <div class="site-search-bar">
            <div class="w1200">
                <!--搜索条-star-->
                <div class="search-bar clearfix">
                    <div class="fl search-box clearfix">
                        <div class="fl box-wrap">
                            <input @keyup.enter="doSearch" v-model="parameter.keyword" class="box" type="text" placeholder="请输入场地名称">
                        </div>
                    </div>
                    <button @click="doSearch" class="fl btn btn-black search-btn"><i class="icon icon-icon_searchBarSearch"></i>搜索</button>
                    <router-link to="/form/rent" class="fl btn btn-red" style="margin-right: 0;color: #fff;"><i class="icon icon-icon_searchBarOne"></i>一键租场地</router-link>

                    <a class="fr show" href="javascript:;"><img src="" alt="魔都首个泰迪之家博物馆"></a>
                </div>
                <!--搜索条-end-->

                <!--热门标签-->
                <dl class="hot-tags clearfix">
                    <dt class="fl clearfix">
                        <i class="fl icon icon-icon_detailsType"></i>
                        <p class="fl">热门标签</p>
                        <span class="fl cutoff-rule">|</span>
                    </dt>
                    <dd class="fl" v-for="item in hotTags"><a href="">热门标签</a></dd>
                </dl>
            </div>
        </div>
        <!--搜索版块-end-->

        <div class="w1200">
            <!--筛选-star-->
            <div class="screening">
                <!--<div class="itembox position clearfix">-->
                    <!--<div class="title">地理位置</div>-->
                    <!--<div class="red unlimited"></div>-->
                    <!--<ul class="list clearfix">-->
                        <!--<li>-->
                            <!--<select>-->
                                <!--<option>上海</option>-->
                                <!--<option>北京</option>-->
                                <!--<option>广州</option>-->
                            <!--</select>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<select>-->
                                <!--<option>商圈</option>-->
                                <!--<option>北京</option>-->
                                <!--<option>广州</option>-->
                            <!--</select>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<select>-->
                                <!--<option>地铁</option>-->
                                <!--<option>北京</option>-->
                                <!--<option>广州</option>-->
                            <!--</select>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<select>-->
                                <!--<option>环线</option>-->
                                <!--<option>北京</option>-->
                                <!--<option>广州</option>-->
                            <!--</select>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<select>-->
                                <!--<option>行政区</option>-->
                                <!--<option>北京</option>-->
                                <!--<option>广州</option>-->
                            <!--</select>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->

                <div class="itembox clearfix" :class="{ 'hide-more' : !moreSpaceType }">
                    <div class="title">场地类型</div>
                    <div @click="resetOneSearchParameter(parameter.site_type)" class="unlimited"
                         :class="{ 'red': parameter.site_type == ''}">不限</div>
                    <ul class="list clearfix">
                        <!--<li>影院剧院</li>-->
                        <li :class="{'current' : parameter['site_type'] && parameter['site_type'].key == v}"
                            @click="changeSearchParameter('site_type',v,k)"
                            v-for="(v,k) in allTags.space_type">{{k}}</li>
                    </ul>
                    <p @click="moreSpaceType = !moreSpaceType" class="more-less">
                        <span v-text="moreSpaceType?'收起':'更多'"></span>
                        <i :class=" moreSpaceType ?'icon-icon_selectUpArrowThin':'icon-icon_selectDownArrowThin'"></i>
                    </p>
                </div>
                <div class="itembox clearfix" :class="{ 'hide-more' : !moreEventType }">
                    <div class="title">活动类型</div>
                    <div @click="resetOneSearchParameter(parameter.event_type)"
                         class="unlimited"
                         :class="{ 'red': parameter.event_type == ''}">不限</div>
                    <ul class="list clearfix">
                        <!--<li>路演递推</li>-->
                        <li :class="{'current' : parameter['event_type'] && parameter['event_type'].key == k}"
                            @click="changeSearchParameter('event_type',v,k)"
                            v-for="(v,k) in allTags.activity_type">{{v}}</li>
                    </ul>
                    <p @click="moreEventType = !moreEventType" class="fr more-less">
                        <span v-text="moreEventType?'收起':'更多'"></span>
                        <i :class=" moreEventType ?'icon-icon_selectUpArrowThin':'icon-icon_selectDownArrowThin'"></i>
                    </p>
                </div>
                <div class="itembox clearfix" v-if="isMoreParameter">
                    <div class="title">价格范围</div>
                    <div @click="resetOneSearchParameter(parameter.price_range)" class="unlimited"
                         :class="{ 'red': parameter.price_range == ''}">不限</div>
                    <ul class="list clearfix">
                        <!--<li>2万元以下</li>-->
                        <li :class="{'current' : parameter['price_range'] && parameter['price_range'].key == k}"
                            @click="changeSearchParameter('price_range',k,v)"
                                v-for="(v,k) in priceRange">{{v}}</li>

                    </ul>
                </div>
                <div class="itembox clearfix" v-if="isMoreParameter">
                    <div class="title">容纳人数</div>
                    <div @click="resetOneSearchParameter(parameter.activity_people)"
                         class="unlimited"
                         :class="{ 'red': parameter.activity_people == ''}">不限</div>
                    <ul class="list clearfix">
                        <li :class="{'current' : parameter['activity_people'] && parameter['activity_people'].key == k}"
                            @click="changeSearchParameter('activity_people',k,v)"
                                v-for="(v,k) in searchPeople">{{v}}</li>
                    </ul>
                </div>
                <div class="itembox clearfix" v-if="isMoreParameter">
                    <div class="title">空间面积</div>
                    <div @click="resetOneSearchParameter(parameter.area_size)" class="unlimited"
                         :class="{ 'red': parameter.area_size == ''}">不限</div>
                    <ul class="list clearfix">
                        <li :class="{'current' : parameter['area_size'] && parameter['area_size'].key == k}"
                            @click="changeSearchParameter('area_size',k,v)"
                                v-for="(v,k) in areaSize">{{v}}</li>
                    </ul>
                </div>
                <div class="itembox clearfix" v-if="isMoreParameter">
                    <div class="title">空间层高</div>
                    <div class="unlimited" :class="{ 'red': !parameter.height}">不限</div>
                    <div class="fl floor-height">
                        <input @keyup.enter="doSearch" v-model="parameter.height" type="number">米
                    </div>
                </div>
                <!--展开/收起筛选-->
                <div @click="isMoreParameter = !isMoreParameter" class="slideup-down">
                    <span v-text="isMoreParameter?'收起筛选':'更多筛选'"></span>
                    <i :class=" isMoreParameter ?'icon-icon_selectUpArrowThin':'icon-icon_selectDownArrowThin'"></i>
                </div>

                <!--搜索条件-->
                <div class="screening-result clearfix">
                    <h5 class="fl">搜索条件</h5>
                    <ul class="fl result-list clearfix">
                        <!--<li>影院剧院<span class="close icon-icon_deleteX"></span></li>-->

                        <li v-for="(v,k) in parameter"
                                v-if="v.value">
                            <span v-text="v.value" ></span>
                            <span class="close icon-icon_deleteX" @click="resetOneSearchParameter(v)"></span>
                        </li>

                    </ul>
                    <div @click="resetSearchParameter" class="fl delete-all"><i class="icon-icon_deleteTrash"></i>删除全部</div>
                </div>
            </div>
            <!--筛选-end-->

            <div class="site-wrap clearfix">
                <div class="fl site-cont clearfix">
                    <!--过滤-star-->
                    <div class="filter-wrap">
                        <ul class="filter clearfix">
                            <li :class="{ 'current': !parameter.order_price }" @click="defaultSort">默认<span class="line"></span></li>
                            <li :class="{ 'current': !!parameter.order_price }" @click="priceSort">价格<i class="icon-icon_rankArrowUp"></i></li>
                        </ul>
                        <p class="des">找到相关空间 {{siteCount}} 个</p>
                    </div>

                    <!--列表-开始-->
                    <div class="box-list clearfix">
                        <div class="box-list-box" v-for="item in sites" :id="item.id">
                            <router-link class="fl img" :to=" '/site/dtl/' + item.id">
                                <img :src="item.logos && item.logos.length > 0 ? item.logos[0].url_250_186 : '' " alt="列表模式">
                            </router-link>
                            <div class="fl text">
                                <h3>
                                    <router-link :to=" '/site/dtl/' + item.id" v-text="item.title">云SPACE 上海国际工业园秀场</router-link>
                                </h3>
                                <div class="assort clearfix">
                                    <p><i class="icon-icon_spaceBusiness"></i> {{item.district}} <span class="line"></span></p>
                                    <p><i class="icon-icon_spacePeople"></i> {{item.max_people}}人 <span class="line"></span></p>
                                    <p><i class="icon-icon_spaceArea"></i> {{item.size}}</p>
                                </div>
                                <p><i class="icon-icon_spaceRecommend"></i> 推荐理由：{{item.recommend_reason}}</p>
                                <!--<p class="keywords">商业发布／主题派对／时尚走秀／动漫游戏／展览展示</p>-->
                                <p class="keywords" v-text="item.event_type">商业发布／主题派对／时尚走秀／动漫游戏／展览展示</p>
                                <a class="btn btn-red" href="javascript:;">加入咨询</a>
                            </div>
                            <div class="fr price">
                                <p><strong>{{item.lower_price}}</strong></p>
                                <span>市场价: {{item.market_price}}</span>
                            </div>

                            <div class="space-fit-details">
                                <table cellpadding="0" cellspacing="0">
                                    <thead>
                                    <tr class="trfirst">
                                        <th width="33%">名称</th>
                                        <th width="16%">面积（㎡）</th>
                                        <th width="13%">人数</th>
                                        <th width="20%">参考价</th>
                                        <th width="18%">售价</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="space in item.spaces">
                                        <td>{{space.title}}</td>
                                        <td>{{space.area}}</td>
                                        <td>{{space.people}}</td>
                                        <td>{{space.market_price}}</td>
                                        <td>{{space.inner_price}}</td>
                                    </tr>
                                    <!--<tr>-->
                                        <!--<td>中厅</td>-->
                                        <!--<td>1200</td>-->
                                        <!--<td>1000</td>-->
                                        <!--<td>¥30,000／日</td>-->
                                        <!--<td>¥90,000／日</td>-->
                                    <!--</tr>-->
                                    <!--<tr>-->
                                        <!--<td>宴会厅宴会厅宴会厅宴会厅宴会厅</td>-->
                                        <!--<td>1000</td>-->
                                        <!--<td>1000</td>-->
                                        <!--<td>¥30,000／日</td>-->
                                        <!--<td>¥20,000／日</td>-->
                                    <!--</tr>-->
                                    <tr>
                                        <td colspan="7">
                                            <a class="lookmore"
                                               href=""
                                               target="_blank">查看更多空间(5)</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!--列表-结束-->
                    <div class="fr page">
                        <el-pagination
                                @sizechange="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="parameter.page"
                                :page-size="12"
                                v-show="siteCount >= 12"
                                layout="prev, pager, next, jumper"
                                :total="siteCount">
                        </el-pagination>
                    </div>
                </div>

                <!--右边地图-star-->
                <div class="fr side-map" >
                    <a class="btn btn-look-sitemap" href="javascript:;">场地地图
                    </a>
                    <div id="siteMap" class="site-map-inner"></div>
                </div>
                <!--右边地图-end-->
            </div>
        </div>
    </div>
</template>
<script>
    import {yunspaceMapStyle} from '../../api/mapStyle'
    function fetchData(store) {
//        return store.dispatch(`getHomeData`)
    }
    import {YUNAPI} from '../../api'
    import store from '../../store'
    export default {
        data() {
            const isInitialRender = !this.$root._isMounted
            return {
                city_id : '',
                homeSearchCondition : {
                    city_id : 1,
                    project_type : '',
                    doWhat : '',
                    q : {
                        site_site_type_eq : '',
                        keyword : '',
                        preKeyword : ''
                    }
                },
                reSites:[1,2,3,4,5,6,7,8],
                selection:[1,2,3,4,5,6],
                media:[1,2,3,4,5,6,7,8],
                hotTags:[1,2,3,4,5],
                sites:[],
                parameter :{
                    site_type : '',
                    event_type : '',
                    price_range :'',
                    activity_people : '',
                    area_size : '',
                    height:'',
                    order_price : '',
                    keyword : '',
                    page:1
                },
                realParameter : {},
                siteCount:0,
                isMoreParameter : false,
                moreSpaceType : false,
                moreEventType : false,
                map : {},
                allFieldPoint : {},
                page: 1,
                total: 0,
                ajaxSearch : null

            }
        },
        components: {
        },
        mounted () {
            var self = this

            self.map = new BMap.Map("siteMap",{minZoom:12,maxZoom:18,enableMapClick:false});

            this.$store.commit('LOADING', false)

//            $('.box-list-box').hover(function () {
//                $('.box-list-box').removeClass('itemshow')
//                $(this).addClass('itemshow')
//            },function () {
//                $(this).removeClass('itemshow')
//            });
            $(document).on('mouseenter','.box-list-box',function(){
                var id = $(this).attr('id')
                var thisPoint = self.allFieldPoint[id]
                if(!thisPoint){
                   return
                }
                self.pointClick(thisPoint)
                var point = thisPoint.getPosition()
                self.map.centerAndZoom(point, 12);
            });

            if(this.$route.query.event_type){
                var object = {
                    key : this.$route.query.event_type
                }
                this.parameter.event_type = object
            }
            if(this.$route.query.area_size){
                var object = {
                    key : this.$route.query.area_size
                }
                this.parameter.area_size = object
            }
//            if(this.$route.query.area_size){
//                this.parameter.area_size['key'] = this.$route.query.area_size
//            }
            this.initMap()
            this.doSearch()

        },
        metaInfo: {
            title: '【云SPACE－商业空间短租平台】提供全国活动场地_发布会场地_场地租赁_活动资讯_找场地上云SPACE',
            // override the parent template and just use the above title only
            titleTemplate: null,
            meta: [
                { charset: 'utf-8' },
                { name: 'keywords', content: '快闪店,商业空间,场地,活动场地,北京活动场地,上海活动场地,场地租赁,会议场地,上海会议场地,年会场地' },
                { name: 'description', content: `云SPACE是专业的活动场地预订、租赁平台。为您提供上海、北京、广州、深圳、成都、杭州、南京、
                苏州等一二线城市活动场地,年会场地,购物中心,秀场,商场,loft空间,适合开办特卖,试乘试驾,走秀,
                高级定制,沙龙,集客等活动的特价活动空间。举办路演、推广活动、发布会选址是关键.一键直达,专业的服务,精准的报价,轻松搞定` },
            ]
        },
        computed: {
            cities (){
                return this.$store.state.cities
            },
            searchParameter(){
                return this.$store.state.searchParameter
            },
            allTags(){
                return this.$store.state.allTags
            },
            priceRange(){
                var price = this.$store.state.allTags.budget_amount
                for(var i in price){ // 需要去掉 空的
                    if(!i){
                        delete price[i]
                    }
                }
                return price
            },
            activityPeople(){
                var value = this.$store.state.allTags.activity_people
                for(var i in value){ // 需要去掉 空的
                    if(value[i] == '不限'){
                        delete value[i]
                    }
                }
                return value
            },
            areaSize(){
                var value = this.$store.state.allTags.area_size
                for(var i in value){ // 需要去掉 空的
                    if(value[i] == '不限'){
                        delete value[i]
                    }
                }
                return value
            },
            searchPeople(){
                var value = this.$store.state.allTags.search_people
                for(var i in value){ // 需要去掉 空的
                    if(value[i] == '不限'){
                        delete value[i]
                    }
                }
                return value
            },

        },
        methods: {
            changeSearchParameter(name,key,value){
                console.log(name,key,value)
                if(!this.parameter[name]){
                    this.parameter[name] = {}
//                    this.searchParameter[name]['key'] = null
//                    this.searchParameter[name]['value'] = null
                }

                var object = {
                    key : key,
                    value : value
                }

                this.parameter[name] = object
//                this.parameter[name]['key'] = key
//                this.parameter[name]['value'] = value
//                console.log(this.parameter)
//                Vue.set(this.parameter,name,object)
//                this.$store.commit('SEARCH_PARAMETER', this.searchParameter)
                this.doSearch()
            },
            resetSearchParameter(){
                for(var i in this.parameter){
                    this.parameter[i] = ""
                }
                this.doSearch()
            },
            resetOneSearchParameter(value){
                for(var i in this.parameter){
                    if(this.parameter[i] == value){
                        this.parameter[i] = ''
                    }
                }
                this.doSearch()
            },
            priceSort(){
                if(this.parameter.order_price){
                    this.parameter.order_price = this.parameter.order_price == 'desc' ? 'asc' : 'desc';
                }else{
                    this.parameter.order_price = 'desc'
                }
                this.doSearch();
            },
            defaultSort(){
                this.parameter.order_price = ''
            },

            doSearch(page){
                var self = this

                self.realParameter = {
                    q : {}
                }
                self.realParameter.order_price = this.parameter.order_price
                self.realParameter.q.keyword = this.parameter.keyword
                self.realParameter.q.height = self.parameter.height
                if(page){
                    self.realParameter.page = self.parameter.page = page
                }else{
                    self.parameter.page = 1
                }

                self.realParameter.q.site_type = self.parameter.site_type.key;
                self.realParameter.q.event_type = self.parameter.event_type.key;

                if(self.parameter.price_range.key){ // 价格范围
                    self.realParameter.q.min_price = self.parameter.price_range.key.split('-')[0]
                    self.realParameter.q.max_price = self.parameter.price_range.key.split('-')[1]
                }
                if(self.parameter.activity_people.key){ // 人数范围
                    self.realParameter.q.min_people = self.parameter.activity_people.key.split('-')[0]
                    self.realParameter.q.max_people = self.parameter.activity_people.key.split('-')[1]
                }

                if(self.parameter.area_size.key){ // 空间面积
                    self.realParameter.q.min_size = self.parameter.area_size.key.split('-')[0]
                    self.realParameter.q.max_size = self.parameter.area_size.key.split('-')[1]
                }

                if (self.ajaxSearch && self.ajaxSearch.state() === 'pending') {
                    self.ajaxSearch.abort()
                }

                self.ajaxSearch = $.ajax({
                    url:YUNAPI.siteSearch,
                    data:self.realParameter,
                    success:function (data) {
//                        console.log(data)
                        self.sites = data.sites
                        self.map.clearOverlays()
                        for(var i = 0; i < self.sites.length; i++){
                            self.drawingPoint(self.sites[i])
                        }
                        self.siteCount = data.page_count
                    },
                    error:function (data) {
                        
                    }
                })
            },
            initMap(){
                var self = this
                var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});


                self.map.setMapStyle({styleJson:yunspaceMapStyle});

                setTimeout(function () {
                    self.map.addControl(top_right_navigation);
                },300)

                var myGeo = new BMap.Geocoder();

                myGeo.getPoint("红坊创意园", function(point){
                    if (point) {
                        self.map.centerAndZoom(point, 12);  // 初始化地图,设置中心点坐标和地图级别
                        var marker = new BMap.Marker(point);  // 创建标注
                        self.map.addOverlay(marker);
                        //self.request();
                    }else{
                        //TODO //没有这个点的提示
                    }

                },'上海');
            },
            pointClick(target){

                var node = target._container.childNodes[0];
                var self = this;

                var href = node.href;
                for(var i in self.allFieldPoint){
                    var node2 = self.allFieldPoint[i]._container.childNodes[0];
                    $(node2).removeClass('pt-click');
                    $(node2).removeClass('deal');
                    $(node2).find('.icon-map-marker').removeClass('icon-map-pointer').addClass('icon-map-nopointer');
                    //node2.className = "icon-c icon-map-marker icon-map-nopointer";
                }
                if(!$(node).hasClass('deal')){
                    $(node).find('.pt-detail').css({
                        'left': - $(node).find('.pt-detail').width()/2 + 'px',
                    });
                }

                $(node).addClass('deal');
                $(node).find('.icon-map-marker').addClass('icon-map-pointer');
                $(node).addClass('pt-click');
                //node.className = "icon-c icon-map-marker icon-map-nopointer pt-click";
                //self.getOnePlaceInfo(id);
            },
            drawingPoint(pointData){
                var lat,lng,point,htm,rm,product_name,url,space_name_url;
                var self = this;
                lat = pointData.x_coordinates;
                lng = pointData.y_conrdinates;
//                lat = "31.2051";
//                lng = "121.4294";
                product_name = pointData.title;
                space_name_url = '';
                //url = '/service_info/'+ pointData['id'] +'.html';
                url = '/site/'+space_name_url;
                point = new BMap.Point(lng,lat);
                htm = '<div class="pt-wrap" id='+pointData['id']+'>'
                        + '<a class="icon-c icon-map-marker icon-map-nopointer" href="javascript:;"></a>'
                        + '<div class="pt-detail">'
                        +'<a class="blank" href="'+url+'" target="_blank">'+product_name
                        +'<span class="img-blank"></span>'
                        +'<span class="jiao">◆</span>'
                        +'</a>'
                        +'</div>'
                        + '</div>';

                //htm = '<p>css</p>' +
                //    '<a id='+pointData['id']+' class="icon-c icon-map-marker icon-map-nopointer" href="javascript:;">' +
                //    '</a>';

                rm = new BMapLib.RichMarker(htm, point, { "anchor": new BMap.Size(0, 0)});
                self.map.addOverlay(rm);

                var rNode = rm._container.childNodes[0].childNodes[1];
                var container = $(rm._container);

                rm.addEventListener('click',function(e){

                    self.pointClick(this)
                });


                self.allFieldPoint[pointData['id']] = rm;

            },
            handleCurrentChange(val) {
                this.parameter.page = val
                this.doSearch(val)
            },
            handleSizeChange(e){

            }
        },

        preFetch: fetchData,
        beforeMount () {
            fetchData(this.$store)
        }

    }
</script>
<style lang="sass" scoped>
    @import "../../assets/scss/site-search.scss";
</style>