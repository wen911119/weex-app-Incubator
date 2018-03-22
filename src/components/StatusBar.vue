<template>
    <div class="status-bar" :style="{backgroundColor:bgColor}" v-if="!isWeb"></div>
</template>
<script>
    export default {
        props:{
            bgColor:{
                type:String,
                default:'#f8584f'
            }
        },
        data() {
            return {
                isWeb: weex.config.env.platform === 'Web'
            }
        }
    }
</script>
<style scoped>
    .status-bar {
        height: 40px;
    }
</style>