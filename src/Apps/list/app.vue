<template>
    <div>
        <filters-bar></filters-bar>

    </div>
</template>

<script>
    import navigator from '../../../plugins/navigator'
    import FiltersBar from './components/filtersBar.vue'
    export default {
        data() {
            return {

            }
        },
        mounted() {
            let self = this
            this.$getNavigatorInfo().then(function (data) {
                console.log(data, 22222)
            })
        },
        components: {
            FiltersBar
        }
    }
</script>

<style scoped>
</style>