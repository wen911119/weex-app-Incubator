<template>
    <div class="filter-panel">
        <div class="top-area" @click="show">
            <text>{{pool.cName}}</text>
        </div>
        <div class="content-area"></div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import store from './store.js'
    export default {
        computed: {
            ...mapState({
                pool: state => state._filter_panel_.pool
            })
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
            show(){
                console.log(this.pool)
            },
            ...mapActions({
                init: '_filter_panel_/init'
            })
        }
    }
</script>

<style scoped>
</style>