<template>
  <div id="app">
    <topcoom v-if="!show"></topcoom>
    <!-- <router-view/> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {
		isShow
	} from '@/assets/js/share.js'
	import topcoom from '@/components/common/Topcoom'
export default {
  name: 'App',
  components: {
    topcoom
  },
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.show = isShow()
  }
}
</script>

<style>
@import "assets/css/rem640.css";
@import "assets/css/animate.css";
.nut-forget a{ display: none!important;}
.my-bullet {background: rgba(255, 255, 255, .3); display: block; width: .12rem; height: .12rem; border-radius: 50%; margin: .09rem 0;}
.my-bullet-active {background: rgba(255, 255, 255, 1); border: .06rem solid rgba(255, 255, 255, .4)}
</style>
