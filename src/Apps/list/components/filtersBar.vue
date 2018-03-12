<template>
    <div class="wrap">
        <div class="filters-bar flex flex-row flex-v-center">
            <div>
                <text class="item text32">综合</text>
            </div>
            <div>
                <text class="item text32">价格</text>
            </div>
            <div>
                <text class="item text32">有货</text>
            </div>
            <div>
                <text @click="openRightPopup" class="item text32">筛选</text>
            </div>
            <div>
                <text class="item text32">icon</text>
            </div>
        </div>
        <wxc-popup :show="isRightShow" @wxcPopupOverlayClicked="popupOverlayRightClick" pos="right" width="645">
            <text>wwwwwjjjjjj</text>
        </wxc-popup>
    </div>
</template>

<script>
    import { WxcPopup } from 'weex-ui'
    export default {
        data() {
            return {
                isRightShow: false
            }
        },
        methods: {
            openRightPopup() {
                this.isRightShow = true
            },
            popupOverlayRightClick() {
                this.isRightShow = false
            }
        },
        components:{
            WxcPopup
        }
    }
</script>

<style scoped>
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

    .flex-row {
        flex-direction: row;
    }

    .flex-column {
        flex-direction: column;
    }

    .iconfont {
        font-family: iconfont;
    }

    .text {
        color: #333;
    }

    .text24 {
        font-size: 24px;
    }

    .text26 {
        font-size: 26px;
    }

    .text28 {
        font-size: 28px;
    }

    .text30 {
        font-size: 30px;
    }

    .text32 {
        font-size: 32px;
    }

    .text34 {
        font-size: 34px;
    }

    .text36 {
        font-size: 36px;
    }

    .text38 {
        font-size: 38px;
    }

    .filters-bar {
        padding-left: 35px;
        padding-right: 35px;
        height: 103px;
        justify-content: space-between;
        background-color: #f7f7f7;
    }

    .item {
        text-align: center;
        color: #919191;
    }
</style>