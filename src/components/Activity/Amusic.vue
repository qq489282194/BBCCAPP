<template>
  <div class="amusic">
    <div class="logo" @click="playMusic"></div>
    <div class="music">
      <audio src="https://oss.meibbc.com/meibbc_xcx/open/music/jianchimengxiang.mp3" ref="audio"></audio>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPlay: true
    }
  },
  mounted() {
    this.$refs.audio.autoplay = 'autoplay'
  },
  methods: {
    playMusic() {
      if (this.isPlay) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
      this.isPlay = !this.isPlay
    }
  }
}
</script>
<style lang="css" scoped>
.logo {width: .56rem; height: .56rem; background: url('../../assets/img/activity/yinyue.png') no-repeat center; background-size: cover; position: absolute; top: .27rem; left: 6.66rem; animation: xuanzhuan 2s infinite linear; z-index: 99;}
.music {display: none;}
</style>

