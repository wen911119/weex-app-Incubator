<template>
    <div class="flex flex-column">
        <filters-bar @filter="openRightPopup"></filters-bar>
        <list class="flex-1">
            <cell v-for="item in test">
                <text style="height:150px;">{{item}}</text>
            </cell>
        </list>
        <wxc-popup :show="isRightShow" :animation="{duration:200}" :overlay-cfg="{opacity:0.2,duration:200}" @wxcPopupOverlayClicked="popupOverlayRightClick"
            pos="right" width="645">
            <text>wwwwwjjjjjj</text>
        </wxc-popup>
    </div>
</template>

<script>
    import navigator from '../../../plugins/navigator'
    import FiltersBar from './components/filtersBar.vue'
    import { WxcPopup } from 'weex-ui'

    export default {
        data() {
            return {
                test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                isRightShow: false
            }
        },
        beforeCreate() {
            const domModule = weex.requireModule('dom')
            domModule.addRule('fontFace', {
                'fontFamily': "iconfont",
                'src': "url('http://s.banggo.com/pub1/bgwap/public/icon/bgwap-iconfont.ttf?20170904')"
            })
        },
        mounted() {
            let self = this
            this.$getNavigatorInfo().then(function (data) {
                console.log(data, 22222)
            })
        },
        methods: {
            openRightPopup() {
                this.isRightShow = true
            },
            popupOverlayRightClick() {
                this.isRightShow = false
            }
        },
        components: {
            FiltersBar,
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
</style>