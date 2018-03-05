<template>
    <wxc-tab-bar :tab-titles="tabTitles" :tab-styles="tabStyles" title-type="icon" @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <!-- 第一个页面内容-->
        <div class="item-container flex flex-column" :style="contentStyle">
            <home></home>
        </div>
        <!-- 第二个页面内容-->
        <div class="item-container" :style="contentStyle">
            <text>特别推荐</text>
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
                tabTitles: Config.tabTitles,
                tabStyles: Config.tabStyles
            }
        },

        created() {
            const tabPageHeight = Utils.env.getPageHeight();
            // 如果页面没有导航栏，可以用下面这个计算高度的方法
            // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
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

<style>
    .flex {
        display: flex;
    }

    .flex-1 {
        flex: 1;
    }

    .flex-h-center {
        justify-content: center;
    }

    .flex-v-center {
        align-items: center;
    }

    .flex-x-center {
        justify-content: center;
        align-items: center;
    }

    .hold {
        background-color: #f5f5f5;
        width: 700px;
    }

    .item-container {
        width: 750px;
        background-color: #f2f3f4;
    }
</style>