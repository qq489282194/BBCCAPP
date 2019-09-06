<template>
  <div class="sharerImg">
    <img src="" alt="" ref="sharerImg">
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: ``
    }
  },
  mounted() {
    // console.log(this.$route.query)
    document.title = '美胸汇，让您更美'
    console.log(this.$route.query)
    let str = location.search;
    if (location.search.indexOf('isappinstalled') !== -1) {
      str = str.replace('&isappinstalled=0', '');
      location.href = str;
    }
    this.$refs.sharerImg.src = decodeURIComponent(this.$route.query.url)
  }
}
</script>

<style scoped>
.sharerImg {height: 100vh!important;}
img {width: 100%; height: auto;}
</style>
