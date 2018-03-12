<template>
    <div>
        <text>list4</text>
        <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src"></image>
            </div>
        </slider>
        <text @click="show">{{test}}</text>
        <goto target="detail">
            <text>跳转到detail页</text>
        </goto>
        <text @click="back">返回</text>
    </div>
</template>

<script>
    import navigator from '../../../plugins/navigator'
    import Goto from '@/components/Goto'
    
    export default {
        data() {
            return {
                imageList: [
                    { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' },
                    { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' },
                    { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }
                ],
                test: 'show'
            }
        },
        methods: {
            show() {
                let self = this
                var modal = weex.requireModule('modal')
                modal.toast({
                    message: self.$ENTERTYPE,
                    duration: 3.8
                })
            },
            back() {
                navigator.back()
            }
        },
        components:{
            Goto
        }
    }
</script>

<style scoped>
    .image {
        width: 700px;
        height: 700px;
    }

    .slider {
        margin-top: 25px;
        margin-left: 25px;
        width: 700px;
        height: 700px;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
    }

    .frame {
        width: 700px;
        height: 700px;
        position: relative;
    }
</style>