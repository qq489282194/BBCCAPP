<template>
  <div class="aindex">
    <Aheader></Aheader>
    <router-view></router-view>
  </div>
</template>
<script>
import Aheader from './Aheader'
export default {
  data() {
    return {}
  },
  components: {
    Aheader
  }
}
</script>
<style lang="css" scoped>
.aindex {padding-top: 1.1rem; width: 100%; height: 100%; overflow: hidden;}
</style>

