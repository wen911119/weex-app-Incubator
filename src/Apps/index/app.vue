<template>
    <wxc-tab-bar :tab-titles="tabTitles" :tab-styles="tabStyles" title-type="iconFont" @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <!-- 第一个页面内容-->
        <div class="item-container flex flex-column" :style="contentStyle">
            <home></home>
        </div>
        <!-- 第二个页面内容-->
        <div class="item-container" :style="contentStyle">
            <text>特别推荐</text>
            <text class="iconfont">&#xe60f;</text>
        </div>

        <!-- 第三个页面内容-->
        <div class="item-container" :style="contentStyle">
            <text>消息中心</text>
        </div>

        <!-- 第四个页面内容-->
        <div class="item-container" :style="contentStyle">
            <text>我的主页</text>
        </div>
    </wxc-tab-bar>
</template>

<script>
    import { WxcTabBar, Utils } from 'weex-ui'
    import Home from './components/home.vue'
    import Config from './config'
    export default {
        name: 'App',
        data() {
            return {
                tabTitles: Config.tabIconFontTitles,
                tabStyles: Config.tabIconFontStyles
            }
        },
        beforeCreate() {
            const domModule = weex.requireModule('dom')
            domModule.addRule('fontFace', {
                'fontFamily': "iconfont",
                'src': "url('http://s.banggo.com/pub1/bgwap/public/icon/bgwap-iconfont.ttf?20170904')"
            })
        },
        created() {
            // const tabPageHeight = Utils.env.getPageHeight();
            // 如果页面没有导航栏，可以用下面这个计算高度的方法
            const tabPageHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750;
            const { tabStyles } = this;
            this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
        },

        methods: {
            wxcTabBarCurrentTabSelected(e) {
                const index = e.page;
                // console.log(index);
            }
        },
        components: {
            WxcTabBar,
            Home
        }
    }
</script>

<style scoped>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
    }
</style>