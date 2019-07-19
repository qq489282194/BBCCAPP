<template>
  <div>
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

