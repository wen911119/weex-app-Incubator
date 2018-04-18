<template>
    <div class="goods-item-02 flex flex-row">
        <image :src="goods.imgUrl_300_300.replace('pic.banggo', 'pic.ruiyun2015').replace('w_300', 'w_160').replace('h_300', 'h_160').replace('m_lfit', 'm_fill')"
            class="goods-img"></image>
        <div class="desc flex-1">
            <div class="row-1 flex flex-row">
                <text class="tag text24" v-if="goods.displayTag">{{goods.displayTag}}</text>
                <text>{{goods.discount}}</text>
            </div>
            <div class="brand">
                <text>{{goods.brandName}}</text>
            </div>
            <text class="goods-name">{{ goods.productName}}</text>
            <div class="price flex flex-row">
                <text class="goods-price">¥{{ goods.salesPrice}}</text>
                <text class="goods-price">¥{{ goods.marketPrice}}</text>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            goods: {
                type: Object,
                required: true
            }
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

    .sub-text {
        color: #919191;
    }

    .text {
        color: #333;
    }

    .text20 {
        font-size: 20px;
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

    .goods-item-02 {
        height: 307px;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-bottom-width: 1px;
        border-bottom-color: #eaeaea;
    }

    .goods-img {
        width: 235px;
        height: 235px;
        margin-right: 28px;
    }

    .tag {
        color: #f8584f;
        border-width: 1px;
        border-color: #f8584f;
        background-color: #fff1ee;
        margin-right: 8px;
    }
</style>