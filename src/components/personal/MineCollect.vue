<template>
    <div>
        <div class="alink mb20">
            <a href="javascript:;" :class="showType == 'Site' ? 'active' : '' " @click="showType ='Site'">场地</a>
            <a href="javascript:;" :class="showType == 'Space' ? 'active' : '' "  @click="showType ='Space'">空间</a>
            <a href="javascript:;" :class="showType == 'Article' ? 'active' : '' "   @click="showType ='Article'">资讯</a>
        </div>
        <div v-if="showType == 'Site' ">
            <div class="collection" v-for="item in Site.follows">
                <i @click="changeCollect($event,'Site',item.id)" class="icons icon-collect icon-collect-hv"></i>
                <router-link class="fl img" :to="'/site/'+item.id">
                    <img :src="item.site_pictures.length > 0 ? item.site_pictures[0]['url_150_100'] : ''"/>
                </router-link>
                <div class="fl divc">
                    <h3><router-link  :to="'/site/'+item.id">{{item.title}}</router-link ></h3>
                    <!--<p class="qy">徐汇区 ｜ 中山西路</p>-->
                    <p class="qy">{{item.address}}</p>
                    <ul>
                        <li>{{item.max_people}}人</li>
                        <li>{{item.max_size}}㎡</li>
                        <li>{{item.service_type}}</li>
                    </ul>
                </div>
            </div>
            <div class="text-center">
                <p v-if="Site.follows.length <= 0">暂无收藏</p>
                <el-pagination
                        @current-change="handleSitePageChange"
                        :current-page="Site.page"
                        :page-size="12"
                        layout="prev, pager, next, jumper"
                        :total="Site.total"
                        v-if="Site.follows.length > 0">
                </el-pagination>
            </div>

        </div>

        <div v-if="showType == 'Space' ">
            <div class="collection" v-for="item in Space.follows">
                <i @click="changeCollect($event,'Space',item.id)" class="icons icon-collect icon-collect-hv"></i>
                <router-link class="fl img" :to="'/space/'+item.id">
                    <img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_150_100'] : ''"/>
                </router-link>
                <!--<a class="fl img" :href="'/site/'+item.id"><img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_150_100'] : ''"/></a>-->
                <div class="fl divc">
                    <h3><router-link  :to="'/space/'+item.id">{{item.name}}</router-link ></h3>
                    <!--<p class="qy">徐汇区 ｜ 中山西路</p>-->
                    <p class="qy">{{item.address}}</p>
                    <ul>
                        <li>{{item.Max_seating_capacity}}人</li>
                        <li>{{item.area}}㎡</li>
                        <li>{{item.site_type}}</li>
                    </ul>
                </div>
            </div>
            <div class="text-center">
                <p v-if="Space.follows.length <= 0">暂无收藏</p>

                <el-pagination
                        @current-change="handleSpacePageChange"
                        :current-page="Space.page"
                        :page-size="12"
                        layout="prev, pager, next, jumper"
                        :total="Space.total"
                        v-if="Space.follows.length > 0">

                </el-pagination>
            </div>

        </div>

        <div v-if="showType == 'Article' ">
            <div class="collection" v-for="item in Article.follows">
                <i @click="changeCollect($event,'Article',item.id)" class="icons icon-collect icon-collect-hv"></i>
                <router-link class="fl img" :to="'/article/'+item.id">
                    <img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_150_100'] : ''"/>
                </router-link>
                <!--<a class="fl img" :href="'/aticle/'+item.id"><img :src="item.site_pictures.length > 0 ? item.site_pictures[0]['url_150_100'] : ''"/></a>-->
                <div class="fl divc">
                    <h3><router-link :to="'/article/'+item.id">{{item.title}}</router-link></h3>
                    <!--<p class="qy">徐汇区 ｜ 中山西路</p>-->
                    <!--<p class="qy">{{item.address}}</p>-->
                    <p class="qy">
                        {{item.abstract}}
                    </p>
                </div>
            </div>
            <div class="text-center">
                <p class="text-center" v-if="Article.follows.length <= 0">暂无收藏</p>
                <el-pagination
                        @current-change="handleArticlePageChange"
                        :current-page="Article.page"
                        :page-size="12"
                        layout="prev, pager, next, jumper"
                        :total="Article.total"
                        v-if="Article.follows.length > 0">
                </el-pagination>
            </div>

        </div>
        <!--<div class="hide">-->
            <!--<div class="collection" v-for="item in follows">-->
                <!--<i class="icons icon-collect-hv"></i>-->
                <!--<a class="fl img" href=""><img :src="item.img_paths.length > 0 ? item.img_paths[0]['url_400_267'] : ''"/></a>-->
                <!--<div class="fl divc">-->
                    <!--<h3><a href="">{{item.name}}</a></h3>-->
                    <!--&lt;!&ndash;<p class="qy">徐汇区 ｜ 中山西路</p>&ndash;&gt;-->
                    <!--<p class="qy">{{item.address}}</p>-->
                    <!--<ul>-->
                        <!--<li>{{item.Max_seating_capacity}}人</li>-->
                        <!--<li>{{item.area}}㎡</li>-->
                        <!--<li>{{item.site_type}}</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

        <!--<div class="collection">-->
            <!--<i class="icons icon-collect-hv"></i>-->
            <!--<a class="fl img" href=""><img src=""/></a>-->
            <!--<div class="fl divc">-->
                <!--<h3><a href="">奢居会派对会所－5楼露台</a></h3>-->
                <!--<p class="qy">徐汇区 ｜ 中山西路</p>-->
                <!--<ul>-->
                    <!--<li>200人</li>-->
                    <!--<li>500㎡</li>-->
                    <!--<li>大型活动</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->


    </div>
</template>

<script>

    import Lib from 'assets/Lib.js'
    import 'assets/css/component.css';
    import 'assets/css/personal.css';

    export default {
        data() {
            return {
                subPage: '',
//                placePage: 1,
//                placeTotal : 0,
//                placeFollows : [],
                Site : {
                    follows : [],
                    total : 0,
                    page: 1
                },
                Space : {
                    follows : [],
                    total : 0,
                    page: 1
                },
                Article : {
                    follows : [],
                    total : 0,
                    page: 1
                },
                showType : 'Site'
            }
        },
        components: {},
        computed : {
            inquiryList () {
                return this.$store.state.inquiryList
            },
            inquiryCount () {
                return this.$store.state.inquiryCount
            },
            personalData (){
                return this.$store.state.personalData
            }
        },
        mounted(){
            this.getPlaceCollect()
            this.getPlaceCollect('Space')
            this.getPlaceCollect('Article')
        },
        methods: {
//            handleSizeChange(val) {
//                console.log(`每页 ${val} 条`);
//            },
            handleSitePageChange(val) {
                this.getPlaceCollect('Site',val)
            },
            handleSpacePageChange(val) {
                this.getPlaceCollect('Space',val)
            },
            handleArticlePageChange(val) {
                this.getPlaceCollect('Article',val)
            },

            getPlaceCollect(type,page){

                var self = this;
                var type = type || 'Site'
                var page = page || 1

                $.get({
                    url: window.YUNAPI.collection,
                    data : GlobleFun.objConcat(self.$store.getters.validationData,{followable_type : type,page : page}),
                    success:function (data) {
//                        console.log(data);
                        self.$data[type].total = data.page_count * 1
                        self.$data[type].follows = data.follows
//                        self.$data[type].$parent.loading = false;
//                        console.log(self.$data['Article'])
                    }
                });
            },
            changeCollect(e,type,id){
                var self = this;
                $.post({
                    url: window.YUNAPI.changeCollect,
//                    data : {
//                        user_id : self.personalData.id,
//                        followable_type : 'Space',
//                        followable_id : self.spaceDtl.id
//                    },
                    data : GlobleFun.objConcat(self.$store.getters.validationData,{
                        user_id : self.personalData.id,
                        followable_type : type,
                        followable_id : id
                    }),
                    success: function (data) {
                        if(data.status == 1){
                            $(e.target).toggleClass('icon-collect-hv')
                        }
                    },
                    error : function () {

                    }
                });
            }
        }
    }
</script>