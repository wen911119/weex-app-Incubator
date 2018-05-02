<template>
    <scroller>
        <div class="item flex flex-x-center" v-for="item in items" :key="item" @click="go">
            <text>{{item}}</text>
        </div>
    </scroller>
</template>

<script>
// weex-ui 文档地址 https://alibaba.github.io/weex-ui/#/cn/with-weex-toolkit
// import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      items: []
    }
  },
  computed: {
    // ...mapState({
    //   count: state => state.count
    // })
  },
  mounted() {
    // alert(111)
    for (let i = 1; i < 10; i++) {
      this.items.push(i)
    }
  },
  methods: {
    // ...mapActions({
    //   add: 'add'
    // }),
    go(){
        location.href = '/index.html'
    }
  },
  components: {
  }
}
</script>

<style scoped>
.item {
  height: 600px;
  width: 700px;
  background-color: #ccc;
  margin-bottom: 100px;
  margin-left: 25px;
}
</style>