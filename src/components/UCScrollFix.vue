<template>
    <text class="hidden">{{hack}}</text>
</template>
<script>
    export default {
        data() {
            return {
                hack: ''
            }
        },
        mounted() {
            let self = this
            console.log(weex.config.env.userAgent)
            if (weex.config.env.platform === 'Web' && /UCBrowser/.test(weex.config.env.userAgent)) {
                self.hack = 0
                window.addEventListener('message', function (msg) {
                    if (msg.data === 'active') {
                        self.hack++
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .hidden {
        opacity: 0;
    }
</style>