<template>
    <div class="search-bar flex flex-x-center">
        <div class="search-bar-inner flex flex-row flex-v-center" @click="goto">
            <text class="search-bar-text iconfont text30">&#xe60f;</text>
            <text class="search-bar-text text26">{{search.placeholder}}</text>
        </div>
    </div>
</template>
<script>
    import navigator from '../../../../plugins/navigator'
    export default {
        props: {
            search: {
                type: Object,
                default: function(){
                    return {}
                }
            }
        },
        methods: {
            goto() {
                navigator.push('search', { searchInfo: this.search })
            }
        }
    }
</script>
<style scoped>
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