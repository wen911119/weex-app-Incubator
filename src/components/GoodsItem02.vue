<template>
    <div class="goods-item-02 flex flex-row" @click="$emit('onclick')">
        <image :src="goods.imgUrl_300_300.replace('pic.banggo', 'pic.ruiyun2015').replace('w_300', 'w_160').replace('h_300', 'h_160').replace('m_lfit', 'm_fill')"
            class="goods-img"></image>
        <div class="desc flex-1 flex flex-column">
            <div class="row-1 flex flex-row flex-v-center">
                <text class="tag text24" v-if="goods.displayTag">{{goods.displayTag}}</text>
                <text class="text24 discount">{{parseInt(goods.discount)/10}}折</text>
            </div>
            <div class="brand flex flex-row flex-v-center">
                <text class="text24 sub-text">{{goods.brandName}}</text>
            </div>
            <div class="name flex-1">
                <text class="text32">{{ goods.productName}}</text>
            </div>
            <div class="price flex flex-row flex-v-center">
                <text class="sales-price text text34">¥{{ goods.salesPrice}}</text>
                <text class="market-price sub-text text28">¥{{ goods.marketPrice}}</text>
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

    .brand {
        height: 50px;
    }

    .tag {
        color: #f8584f;
        border-width: 1px;
        border-color: #f8584f;
        background-color: #fff1ee;
        margin-right: 8px;
        padding-left: 4px;
        padding-right: 4px;
    }

    .discount {
        color: #fff;
        background-color: #f8584f;
        padding-left: 15px;
        padding-right: 15px;
    }

    .market-price {
        text-decoration: line-through;
        margin-left: 20px;
    }
</style>