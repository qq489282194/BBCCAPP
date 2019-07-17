<template>
  <div>
    <!-- 分享者内容 -->
    <div class="sharer">
      this is bysharer content
    </div>
    <!-- 我要参与 -->
    <div class="join">
      <el-button type="primary" plain @click="wejoin" size="small">我要参与</el-button>
      <el-button type="primary" plain @click="wejoin" size="small">我要分享</el-button>
    </div>
    <!-- 活动细则 -->
    <div class="actrules">
      <div class="rulestit">活动细则</div>
      <ul class="rulescon">
        <li>1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>2.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>3.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    wejoin() {
      console.log(1)
    }
  }
}
</script>
<style lang="css" scoped>
.sharer {width: 100%; height: 8rem; background: pink; text-align: center; line-height: 8rem; margin-bottom: .8rem;}
.join {text-align: center; margin-bottom: .8rem;}
.actrules {width: 100%; border-top: .02rem solid #bbb; padding-top: .2rem; color: #101010;}
.rulestit {margin: auto; font-size: .36rem; text-align: center; margin-bottom: .04rem;}
.rulescon li {font-size: .28rem; margin-left: .4rem; margin-bottom: .2rem;}
</style>

