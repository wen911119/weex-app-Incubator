<template>
    <div class="search-bar flex flex-x-center">
        <div class="search-bar-inner flex flex-row flex-v-center" @click="goto">
            <text class="search-bar-text iconfont text30">&#xe60f;</text>
            <text class="search-bar-text text26">冬季新品</text>
        </div>
    </div>
</template>
<script>
    import Router from '../../../../plugins/router'    
    export default {
        data() {
            return {
                placeHold: "冬季新品"
            }
        },
        methods:{
            goto(){
                Router.push('search')
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

    .search-bar {
        height: 100px;
        background-color: #f8584f;
    }

    .search-bar-inner {
        width: 690px;
        height: 70px;
        background-color: rgba(255, 255, 255, .5);
        border-radius: 40px;
    }

    .search-bar-text {
        color: #fff;
        padding-left: 30px;
    }
</style>