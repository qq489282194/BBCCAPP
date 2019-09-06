<template>
  <div class="aindex" ref="aindex">
    <Aheader :headerShow="headerShow"></Aheader>
    <router-view></router-view>
  </div>
</template>
<script>
import Aheader from './Aheader'
export default {
  data() {
    return {
      headerShow: true
    }
  },
  components: {
    Aheader
  },
  beforeCreate() {
    if (location.href.indexOf('abysharer') != -1) {
      this.headerShow = false
      this.$refs.aindex.style.paddingTop = 0
    }
  },
  mounted() {
  }
}
</script>
<style lang="css" scoped>
.aindex {padding-top: 1.1rem; width: 100%; height: 100%;}
</style>

