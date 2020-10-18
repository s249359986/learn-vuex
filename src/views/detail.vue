<template>
  <div>
    <div>起点：{{curOrder.start}}</div>
    <div>终点：{{curOrder.end}}</div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex"
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'curOrder'
    ])
  },
  methods: {
  },
  activated() {
  },
  created() {
  }
}
</script>

