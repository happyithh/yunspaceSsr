<template>

    <footer id="footer">
        <div class="footer-outside">
            <div class="footer">
                <ul class="footer_left">
                    <li>
                        <div class="footer-item-title">云·SPACE</div>
                        <span class="span-line"></span>
                        <!--<p><a target="_blank" href="/about/news">官方新闻</a></p>-->
                        <p><a target="_blank" href="http://www.yunspace.com.cn/yunspace/news">官方新闻</a></p>
                        <!--<p><a target="_blank" href="/about/aboutus">关于我们</a></p>-->
                        <p><a target="_blank" href="http://www.yunspace.com.cn/yunspace/about_us">关于我们</a></p>
                        <!--<p><a target="_blank" href="/about/recruitment">职位招聘</a></p>-->
                        <p><a target="_blank" href="http://www.yunspace.com.cn/yunspace/recruitment">职位招聘</a></p>
                        <!--<p><a target="_blank" href="/about/contact">联系我们</a></p>-->
                        <p><a target="_blank" href="http://www.yunspace.com.cn/yunspace/contact_us">联系我们</a></p>
                        <p><a href="http://www2.yunspace.com.cn/">返回旧版</a></p>
                    </li>
                    <li>
                        <div class="footer-item-title">业务合作</div>
                        <span class="span-line"></span>
                        <p><a target="_blank" href="http://www.yunspace.com.cn/join/index">城市合伙人</a></p>
                        <p><a target="_blank" href="http://www.yunspace.com.cn/site_join">场地出租</a></p>
                        <p><a target="_blank" href="http://www.yunspace.com.cn/article/3142345.html">文创项目加入</a></p>
                        <p><a target="_blank" href="http://www.yunspace.com.cn/article/3135554.html">关于短租/快闪店</a></p>
                    </li>
                    <li>
                        <div class="footer-item-title">我要办活动</div>
                        <span class="span-line"></span>
                        <p><a target="_blank" href="/spaces">空间场地</a></p>
                        <p><a target="_blank" href="http://www.yunspace.com.cn/service">配套服务</a></p>
                        <p><a target="_blank" href="http://www.yunspace.com.cn/set_list">超值套餐</a></p>
                        <p><a target="_blank" href="/found">云·发现</a></p>
                        <p><a target="_blank" href="http://www.yunspace.com.cn/vendor">服务商户</a></p>
                    </li>
                    <li class="code">
                        <div class="footer-item-title">服务号</div>
                        <span class="span-line"></span>
                        <p class="weixin2"><img src="/static/images/qrcode-cbz.jpg" width="120"></p>
                    </li>
                    <li class="code shanghai">
                        <div class="footer-item-title">云space上海</div>
                        <span class="span-line"></span>
                        <p class="weixin2"><img src="/static/images/qrcode-sh.jpg" width="120"></p>
                    </li>
                </ul>
            </div>

        </div>
        <div class="bottom-outside">
            <div class="bottom">
                <p>Copyright©2015 云·SPACE
                    <a href="http://www.miibeian.gov.cn/" target="_blank">
                        沪ICP备12039278号-2
                    </a>
                </p>
            </div>
        </div>
    </footer>

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

    /*11/29*/
    .tip-footer{
        margin-top: 40px;
    }
    .footer .tip-footer p{
        color: #fff;
        float: left;
        margin-right: 30px;
        width: auto;
    }

    .footer .tip-footer a{
        color: #fff;
    }

    /****公共尾部****/
    .footer-outside {
        width: 100%;
        min-width: 1200px;
        background-color: #181C1F;
        height: auto;
        overflow: hidden;
    }

    .footer {
        margin: 50px auto;
        width: 1200px;
        height: auto;
        overflow: hidden;
        margin-bottom: 40px;
    }

    .footer_left {
        height: auto;
        overflow: hidden;
    }

    .footer_left li {
        float: left;
        width: 265px;
        color: #c7c7c7;
    }

    .footer_left li p {
        height: 30px;
        line-height: 30px;
    }

    .footer_left li p a {
        color: #f2f2f2;
    }

    .footer_left li p a:hover {
        color: #fff;
    }
    .footer_left li.code{
        width: auto;
        padding: 0 30px;
    }
    .footer_left li.code p{
        height: auto;
        line-height: 1;
    }
    .footer_left li.code img{
        width: 80px;
        height: 80px;
    }
    .footer_left li.shanghai{
        margin-right: 0;
        float: right;
    }

    .footer-item-title {
        font-size: 14px;
        color: #fff;
        margin-bottom: 8px;
    }

    .weixin2 {
        margin-top: 18px;
    }

    .footer_right {
        float: right;
    }

    .footer_right a {
        color: #fff
    }

    .title_one {
        font-size: 18px;
        color: #fff;
    }

    .title_two {
        font-size: 18px;
        color: #fff;
        margin-top: 20px;
    }

    .title_two a {
        display: inline-block;
    }

    .title_content {
        font-size: 14px;
        color: #fff;
    }

    .bottom-outside {
        width: 100%;
        height: 50px;
        background-color: #181C1F;
        min-width: 1200px;
        overflow: hidden;
    }

    .bottom {
        margin: auto;
        font-size: 12px
    }

    .bottom p {
        text-align: center;
        color: #9e9e9e;
        line-height: 50px;
        margin: 0;
    }

    .title_content a {
        color: #fff;
    }

    .title_content a:hover {
        text-decoration: underline;
    }

    .bottom a {
        color: #6E7277;
        display: inline;
        font-size: 12px;
    }

    /*友情链接*/
    .link-outside {
        width: 100%;
        background-color: #f2f2f2;
    }

    .link {
        width: 1200px;
        margin: auto;
        padding: 30px 0px;
    }

    .link-left {
        float: left;
        color: #24252f;
        font-weight: bold;
        margin-right: 40px;
    }

    .link-right {
        float: left;
    }

    .link-right li {
        float: left;
        margin-right: 10px;
    }

    .link-right li:last-child {
        margin-right: 0px;
    }

    .link-right li a {
        color: #bbb;
        font-size: 12px;
    }

    .link-right li a:hover {
        color: #454c52;
    }

    .footer {
        background-color: inherit;
        border-top: hidden;
        text-align: left;
        font-size: 14px;
    }

    .footer p {
        margin: 0;
        font-size: 12px;
        line-height: 1.5em;
    }

    p.title_two {
        margin-top: 20px;
    }

    .weixin2 {
        margin-top: 18px !important;
    }

    .span-line {
        width: 30px;
        background: #cf484d;
        height: 2px;
        display: block;
        margin-bottom: 18px;
        margin-top: 0px;
    }

</style>
