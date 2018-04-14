<template>
    <div class="filter-panel flex-1">
        <panel1 class="panel-1" v-if="!panel2.show" @more="openPanel2"></panel1>
        <panel2 class="panel-2" v-else :content="panel2.content" @back="openPanel1"></panel2>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import store from './store.js'
    import panel1 from './panel1.vue'
    import panel2 from './panel2.vue'
    export default {
        data() {
            return {
                panel2: {
                    show: false,
                    content: {}
                }
            }
        },
        computed: {
            // ...mapState({
            //     panel2: state => state._filter_panel_.panel2
            // })
        },
        beforeCreate() {
            // 避免重复注册
            if (!this.$store.state._filter_panel_) {
                this.$store.registerModule('_filter_panel_', store)
            }
        },
        created() {
            this.init('大衣')
        },
        methods: {
            openPanel1() {
                this.panel2.show = false
                this.panel2.content = {}
            },
            openPanel2(content) {
                this.panel2.show = true
                this.panel2.content = content
            },
            ...mapActions({
                init: '_filter_panel_/init'
            })
        },
        components: {
            panel1,
            panel2
        }
    }
</script>

<style scoped>
</style>