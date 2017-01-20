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

</style>
