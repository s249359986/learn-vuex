<template>
  <div @click="goDetail(item)" v-for="item in list">
    <div>起点：{{item.start}}</div>
    <div>终点：{{item.end}}</div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "vuex"

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      "list"
    ])
  },
  methods: {
    ...mapMutations(["setCurOrder"]),
    ...mapActions(["getList"]),
    goDetail(item) {
      this.setCurOrder(item);
      // to detail 页面
    }
  },
  created() {
    this.getList();
  }
}
</script>

