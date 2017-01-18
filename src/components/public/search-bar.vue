<template>

    <!--搜索条-star-->
    <div class="search-bar clearfix">
        <div class="fl search-box clearfix">
            <div class="fl box-wrap">
                <input class="box" type="text" placeholder="目的">
                <i class="icon icon-icon_selectDownArrowThin"></i>
            </div>
            <div class="fl box-wrap">
                <input class="box" type="text" placeholder="面积">
                <i class="icon icon-icon_selectDownArrowThin"></i>
            </div>
        </div>

        <button class="fl btn btn-black search-btn"><i class="icon icon-icon_searchBarSearch"></i>搜索</button>
        <button class="fl btn btn-red" style="margin-right: 0"><i class="icon icon-icon_searchBarOne"></i>一键租场地</button>
    </div>
    <!--搜索条-end-->

</template>

<script>

    module.exports = {
        props: {
            "title": {
                type: String,
                default: "标题"
            }
        }
    }
</script>

<style scoped>

    /***搜索条-开始***/
    .search-bar{
        height: 42px;
    }
    .search-bar .search-box{
        height: 100%;
        background: #fff;
        color: #181C1F;
        border: 1px solid #181C1F;
        border-radius: 3px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .search-bar .box-wrap{
        width: 280px;
        height: 100%;
        padding: 8px 0 8px 10px;
        position: relative;
    }
    .search-bar .box{
        height: 100%;
        width: 100%;
        border-right: 1px solid #ddd;
    }
    .search-bar .box-wrap:last-child .box{border: none;}
    .search-bar .box-wrap .icon{
        position: absolute;
        right: 10px;
        top: 12px;
        color: #999;
        font-size: 16px;
        font-weight: bold;
    }
    .search-bar .btn{
        width: 160px;
        height: 42px;
        line-height: 42px;
        margin-right: 8px;
    }
    .search-bar .btn .icon{
        margin-right: 5px;
    }
    .search-bar .search-btn{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    /***搜索条-结束***/

</style>
