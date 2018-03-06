<template>
    <div class="panel-box">
        <div class="panel" v-for="panel in panels">
            <div class="template wap_index_banner1 flex flex-row" v-if="panel.template==='wap_index_banner1' && panel.content.length>0">
                <image class="entry-item flex-1" v-for="item in panel.content" :src="item.src" @click="goto(item.target)"></image>
            </div>
            <div class="template wap_dailymodel22" v-if="panel.template==='wap_dailymodel22' && panel.content.length>0">
                <image style="height:117px" :src="panel.content[0].src"></image>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:312.5px" :src="panel.content[1].src"></image>
                    <image class="flex-1" style="height:312.5px" :src="panel.content[2].src"></image>
                </div>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:312.5px" :src="panel.content[3].src"></image>
                    <image class="flex-1" style="height:312.5px" :src="panel.content[4].src"></image>
                </div>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:312.5px" :src="panel.content[5].src"></image>
                    <image class="flex-1" style="height:312.5px" :src="panel.content[6].src"></image>
                </div>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:312.5px" :src="panel.content[7].src"></image>
                    <image class="flex-1" style="height:312.5px" :src="panel.content[8].src"></image>
                </div>
            </div>
            <div class="template mobile_index_banner14" v-if="panel.template==='mobile_index_banner14' && panel.content.length>0">
                <text>mobile_index_banner14</text>
            </div>
            <div class="template wap_index_man" v-if="panel.template==='wap_index_man' && panel.content.length>0">
                <text>wap_index_man</text>
            </div>
            <div class="template wap_index_woman" v-if="panel.template==='wap_index_woman' && panel.content.length>0">
                <text>wap_index_woman</text>
            </div>
            <div class="template wap_index_hotkids" v-if="panel.template==='wap_index_hotkids' && panel.content.length>0">
                <text>wap_index_hotkids</text>
            </div>
            <div class="template wap_product" v-if="panel.template==='wap_product' && panel.content.length>0">
                <text>wap_product</text>
            </div>
        </div>
        <div class="panel-bottom" ref="panelBottom"></div>
    </div>
</template>
<script>
    import Router from '../../../../plugins/router'
    import { mapState, mapActions } from 'vuex'
    const dom = weex.requireModule('dom')
    export default {
        computed: {
            ...mapState({
                panels: state => state.panel.panels
            })
        },
        created() {
            this.fetchPanels()
        },
        watch: {
            panels: {
                handler: function (nv, ov) {
                    this.detect()
                },
                deep: true
            }
        },
        methods: {
            ...mapActions({
                fetchPanels: 'panel/fetchPanels',
                fetchPanelContent: 'panel/fetchPanelContent'
            }),
            goto(where) {
                Router.push(where)
            },
            detect() {
                let self = this
                dom.getComponentRect(this.$refs.panelBottom, option => {
                    console.log('getComponentRect:', option)
                    if (option.result && option.size.top < 1000) {
                        let last = {}
                        for (let i = 0; i < self.panels.length; i++) {
                            if (self.panels[i].content.length === 0) {
                                last.id = self.panels[i].id
                                last.index = i
                                last.template = self.panels[i].template
                                break
                            }
                        }
                        if (last.id) {
                            self.fetchPanelContent(last)
                        }
                    }
                })
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

    .wap_index_banner1 {
        height: 180px;
    }

    .wap_dailymodel22 {
        height: 1367px;
    }

    .mobile_index_banner14 {
        height: 225px;
    }

    .wap_index_man {
        height: 726px;
    }

    .wap_index_woman {
        height: 726px;
    }

    .wap_index_hotkids {
        height: 726px;
    }

    .entry-item {
        width: 150px;
        height: 180px;
    }
</style>