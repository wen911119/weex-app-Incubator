<template>
    <div @click="goto">
        <slot></slot>
    </div>
</template>

<script>
    import router from '../../plugins/router.js'
    export default {
        props: {
            target: {
                type: String,
                required: true
            }
        },
        methods: {
            goto() {
                router.push(this.target)
            }
        }
    }
</script>

<style scoped>
</style>