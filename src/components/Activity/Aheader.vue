<template>
  <div>
    <div class="title" v-show="headerShow">
      <van-icon name="arrow-left" @click="goBack" />
      <span v-text="title"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['headerShow'],
  data() {
    return {
      title: '活动详情'
    }
  },
  methods: {
    goBack() {
      window.history.back()
    }
  }
}
</script>
<style lang="css" scoped>
.title {width: 100%; height: 1.1rem; text-align: center; font-size: .36rem; line-height: 1.1rem; position: fixed; top: 0; left: 0; background: #fff; z-index: 10;}
.title i {position: absolute; left: .38rem; top: .3rem; font-size: .48rem; font-weight: bold;}
</style>

