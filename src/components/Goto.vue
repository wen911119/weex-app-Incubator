<template>
    <div @click="goto">
        <slot></slot>
    </div>
</template>

<script>
    import router from '../../plugins/router.js'
    const storage = weex.requireModule('storage')
    export default {
        props: {
            target: {
                type: String,
                required: true
            }
        },
        methods: {
            goto() {
                router.go(this.target)
            }
        }
    }
</script>

<style scoped>
</style>