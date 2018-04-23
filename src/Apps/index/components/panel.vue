<template>
    <div class="panel-box">
        <div class="panel" v-for="panel in panels">
            <div class="template wap_index_banner1 flex flex-row" v-if="panel.template==='wap_index_banner1' && panel.content.length>0">
                <image class="entry-item flex-1" v-for="item in panel.content" :src="item.src" @click="goto(item.target)"></image>
            </div>
            <div class="template wap_index_banner2 flex flex-row" v-if="panel.template==='wap_index_banner2' && panel.content.length>0">
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
            <div class="template liyantest10" v-if="panel.template==='liyantest10' && panel.content.length>0">
                <image style="height:93.8px" :src="panel.content[0].src"></image>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:312.5px" :src="panel.content[1].src"></image>
                    <image class="flex-1" style="height:312.5px" :src="panel.content[2].src"></image>
                </div>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:312.5px" :src="panel.content[3].src"></image>
                    <image class="flex-1" style="height:312.5px" :src="panel.content[4].src"></image>
                </div>
            </div>
            <div class="template mobile_index_zhekou3" v-if="panel.template==='mobile_index_zhekou3' && panel.content.length>0">
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:225px" :src="panel.content[0].src"></image>
                    <image class="flex-1" style="height:225px" :src="panel.content[1].src"></image>
                </div>
            </div>
            <div class="template mobile_index_banner14" v-if="panel.template==='mobile_index_banner14' && panel.content.length>0">
                <image style="height:225px" :src="panel.content[0].src"></image>
            </div>
            <div class="template wap_index_man" v-if="panel.template==='wap_index_man' && panel.content.length>0">
                <image style="height:93.8px" :src="panel.content[0].src"></image>
                <image style="height:211px" :src="panel.content[1].src"></image>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:211px" :src="panel.content[2].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[3].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[4].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[5].src"></image>
                </div>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:211px" :src="panel.content[6].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[7].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[8].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[9].src"></image>
                </div>
            </div>
            <div class="template wap_index_woman" v-if="panel.template==='wap_index_woman' && panel.content.length>0">
                <image style="height:93.8px" :src="panel.content[0].src"></image>
                <image style="height:211px" :src="panel.content[1].src"></image>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:211px" :src="panel.content[2].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[3].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[4].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[5].src"></image>
                </div>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:211px" :src="panel.content[6].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[7].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[8].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[9].src"></image>
                </div>
            </div>
            <div class="template wap_index_hotkids" v-if="panel.template==='wap_index_hotkids' && panel.content.length>0">
                <image style="height:93.8px" :src="panel.content[0].src"></image>
                <image style="height:211px" :src="panel.content[1].src"></image>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:211px" :src="panel.content[2].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[3].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[4].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[5].src"></image>
                </div>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:211px" :src="panel.content[6].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[7].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[8].src"></image>
                    <image class="flex-1" style="height:211px" :src="panel.content[9].src"></image>
                </div>
            </div>
            <div class="template wap_product" v-if="panel.template==='wap_product' && panel.content.length>0">
                <div class="title flex flex-x-center" style="height:84px">
                    <text class="text34" style="color:#6e6e6e;">———&nbsp;热销商品&nbsp;———</text>
                </div>
                <div class="hot-list flex flex-row" style="flex-wrap: wrap;justify-content: space-around;">
                    <goods-item01 v-for="goodsId in panel.content" :id="goodsId" :key="goodsId"></goods-item01>
                </div>
            </div>
            <div class="template wap_index_zhuxian" v-if="panel.template==='wap_index_zhuxian' && panel.content.length>0">
                <image style="height:152px" :src="panel.content[0].src"></image>
            </div>
            <div class="template wap_thsgd" v-if="panel.template==='wap_thsgd' && panel.content.length>0">
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:312.5px" :src="panel.content[0].src"></image>
                    <image class="flex-1" style="height:312.5px" :src="panel.content[1].src"></image>
                </div>
                <div class="row flex flex-row">
                    <image class="flex-1" style="height:312.5px" :src="panel.content[2].src"></image>
                    <image class="flex-1" style="height:312.5px" :src="panel.content[3].src"></image>
                </div>
            </div>
        </div>
        <div class="panel-bottom" ref="panelBottom">
        </div>
    </div>
</template>
<script>
    import navigator from '../../../../plugins/navigator'
    import { mapState, mapActions } from 'vuex'
    import GoodsItem01 from '@/components/GoodsItem01.vue'
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
                    setTimeout(() => {
                        this.$emit('update')
                    }, 0)
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
                // navigator.push(where)
            },
            detect() {
                let self = this
                dom.getComponentRect(this.$refs.panelBottom, option => {
                    // 这里的2000是pc的chrome模拟的1000
                    if (option.result && option.size.top < 2000) {
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
        },
        components: {
            GoodsItem01
        }
    }
</script>
<style scoped>
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