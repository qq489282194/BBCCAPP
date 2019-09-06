<template>
  <div>
    <div class="title" v-show="headerShow">
      <!-- <van-icon name="arrow-left" @click="backRouter()" /> -->
      <i @click="closeHtml()"></i>
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
}
</script>
<style lang="css" scoped>
.title {width: 100%; height: 1.1rem; text-align: center; font-size: .36rem; line-height: 1.5rem; position: fixed; top: 0; left: 0; background: #fff; z-index: 10;}
.title i {position: absolute; display: block; width: .19rem; height: .34rem; left: .5rem; top: .58rem; background: url('../../assets/img/back.png') no-repeat center; background-size: cover;}
</style>

