<template>
    <div>
        <!--搜索版块-star-->
        <div class="site-search-bar">
            <div class="w1200">
                <!--搜索条-star-->
                <div class="search-bar clearfix">
                    <div class="fl search-box clearfix">
                        <div class="fl box-wrap">
                            <input class="box" type="text" placeholder="请输入场地名称">
                        </div>
                    </div>
                    <button class="fl btn btn-black search-btn"><i class="icon icon-icon_searchBarSearch"></i>搜索</button>
                    <button class="fl btn btn-red" style="margin-right: 0"><i class="icon icon-icon_searchBarOne"></i>一键租场地</button>

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
                <div class="itembox position clearfix">
                    <div class="title">地理位置</div>
                    <div class="red unlimited"></div>
                    <ul class="list clearfix">
                        <li>
                            <select>
                                <option>上海</option>
                                <option>北京</option>
                                <option>广州</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>商圈</option>
                                <option>北京</option>
                                <option>广州</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>地铁</option>
                                <option>北京</option>
                                <option>广州</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>环线</option>
                                <option>北京</option>
                                <option>广州</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>行政区</option>
                                <option>北京</option>
                                <option>广州</option>
                            </select>
                        </li>
                    </ul>
                </div>

                <div class="itembox clearfix">
                    <div class="title">场地类型</div>
                    <div class="red unlimited">不限</div>
                    <ul class="list clearfix">
                        <li>影院剧院</li>
                        <li>秀场展馆</li>
                    </ul>
                    <p class="more-less">更多<i class="icon-icon_selectDownArrowThin"></i></p>
                </div>
                <div class="itembox clearfix">
                    <div class="title">活动类型</div>
                    <div class="red unlimited">不限</div>
                    <ul class="list clearfix">
                        <li>路演递推</li>
                        <li>商业发布</li>
                        <li>论坛会议</li>
                        <li>晚会年会</li>
                        <li>试乘试驾</li>
                        <li>亲子活动</li>
                        <li>路演递推</li>
                        <li>商业发布</li>
                        <li>论坛会议</li>
                        <li>晚会年会</li>
                        <li>试乘试驾</li>
                        <li>亲子活动</li>
                    </ul>
                    <p class="fr more-less">更多<i class="icon-icon_selectDownArrowThin"></i></p>
                </div>
                <div class="itembox clearfix">
                    <div class="title">价格范围</div>
                    <div class="red unlimited">不限</div>
                    <ul class="list clearfix">
                        <li>2万元以下</li>
                        <li>2~5万元</li>
                    </ul>
                </div>
                <div class="itembox clearfix">
                    <div class="title">容纳人数</div>
                    <div class="red unlimited">不限</div>
                    <ul class="list clearfix">
                        <li>100人以下</li>
                        <li>100~300人</li>
                    </ul>
                </div>
                <div class="itembox clearfix">
                    <div class="title">空间面积</div>
                    <div class="red unlimited">不限</div>
                    <ul class="list clearfix">
                        <li>200㎡以下</li>
                        <li>200~500㎡</li>
                    </ul>
                </div>
                <div class="itembox clearfix">
                    <div class="title">空间层高</div>
                    <div class="red unlimited">不限</div>
                    <div class="fl floor-height">
                        <input type="number">米
                    </div>
                </div>
                <!--展开/收起筛选-->
                <div class="slideup-down">收起筛选<i class="icon-icon_selectUpArrowThin"></i></div>

                <!--搜索条件-->
                <div class="screening-result clearfix">
                    <h5 class="fl">搜索条件</h5>
                    <ul class="fl result-list clearfix">
                        <li>影院剧院<span class="close icon-icon_deleteX"></span></li>
                        <li>路演递推<span class="close icon-icon_deleteX"></span></li>
                    </ul>
                    <div class="fl delete-all"><i class="icon-icon_deleteTrash"></i>删除全部</div>
                </div>
            </div>
            <!--筛选-end-->

            <div class="site-wrap clearfix">
                <div class="fl site-cont clearfix">
                    <!--过滤-star-->
                    <div class="filter-wrap">
                        <ul class="filter clearfix">
                            <li class="current">默认<span class="line"></span></li>
                            <li>价格<i class="icon-icon_rankArrowUp"></i></li>
                        </ul>
                        <p class="des">找到相关空间 131 个</p>
                    </div>

                    <!--列表-开始-->
                    <div class="box-list clearfix">
                        <div class="box-list-box" v-for="item in sites">
                            <a class="fl img" href="javascript:;">
                                <img src="" alt="列表模式">
                            </a>
                            <div class="fl text">
                                <h3>
                                    <a href="javascript:;">云SPACE 上海国际工业园秀场</a>
                                </h3>
                                <div class="assort clearfix">
                                    <p><i class="icon-icon_spaceBusiness"></i> 徐家汇 <span class="line"></span></p>
                                    <p><i class="icon-icon_spacePeople"></i> 500人 <span class="line"></span></p>
                                    <p><i class="icon-icon_spaceArea"></i> 300㎡</p>
                                </div>
                                <p><i class="icon-icon_spaceRecommend"></i> 推荐理由：Boom Shakalaka~</p>
                                <p class="keywords">商业发布／主题派对／时尚走秀／动漫游戏／展览展示</p>
                                <a class="btn btn-red" href="javascript:;">加入咨询</a>
                            </div>
                            <div class="fr price">
                                <p><strong>￥80,000</strong>/天 起</p>
                                <span>市场价: ¥ 100,000/天</span>
                            </div>

                            <div class="space-fit-details">
                                <table cellpadding="0" cellspacing="0">
                                    <tbody>
                                    <tr class="trfirst">
                                        <th width="33%">名称</th>
                                        <th width="16%">面积（㎡）</th>
                                        <th width="13%">人数</th>
                                        <th width="20%">参考价</th>
                                        <th width="18%">售价</th>
                                    </tr>
                                    <tr>
                                        <td>会议厅</td>
                                        <td>1200</td>
                                        <td>1000</td>
                                        <td>¥30,000／日</td>
                                        <td>¥20,000／日</td>
                                    </tr>
                                    <tr>
                                        <td>中厅</td>
                                        <td>1200</td>
                                        <td>1000</td>
                                        <td>¥30,000／日</td>
                                        <td>¥90,000／日</td>
                                    </tr>
                                    <tr>
                                        <td>宴会厅宴会厅宴会厅宴会厅宴会厅</td>
                                        <td>1000</td>
                                        <td>1000</td>
                                        <td>¥30,000／日</td>
                                        <td>¥20,000／日</td>
                                    </tr>
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
                    <div class="fr page">分页器</div>
                </div>

                <!--右边地图-star-->
                <div class="fr side-map">
                    <a class="btn btn-look-sitemap" href="javascript:;">
                        <i class=""></i>查看场地地图
                    </a>
                </div>
                <!--右边地图-end-->
            </div>
        </div>
    </div>
</template>
<script>
    function fetchData(store) {
        return store.dispatch(`getHomeData`)
    }
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
                sites:[1,2,3,4,5,6,7,8,9,10,11,12],
            }
        },
        components: {
        },
        mounted () {
            var self = this
            this.$store.commit('LOADING', false)
            $('.box-list-box').hover(function () {
                $('.box-list-box').removeClass('itemshow')
                $(this).addClass('itemshow')
            },function () {
                $(this).removeClass('itemshow')
            });
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
            allTags(){
                return this.$store.state.allTags
            }
        },
        methods: {
            homeDoSearch(){}
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