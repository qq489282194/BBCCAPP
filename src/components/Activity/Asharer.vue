<template>
  <div>
    <!-- 分享者内容 -->
    <div class="sharer">
      this is sharer content
    </div>
    <!-- 我要参与 -->
    <div class="join">
      <el-button type="primary" plain @click="wejoin" size="small">我要参与</el-button>
    </div>
    <!-- 我的商家 -->
    <div class="business">
      <div class="bustit">我的商家</div>
      <div class="bus_con">
        <dl>
          <dd>
            <ul>
              <li><img src="" alt=""/><p>用户名字</p><span>成为下线时间</span></li>
              <li>用户电话</li>
            </ul>
          </dd>
          <dd>
            <ul>
              <li><img src="" alt=""/><p>用户名字</p><span>成为下线时间</span></li>
              <li>用户电话</li>
            </ul>
          </dd>
          <dd>
            <ul>
              <li><img src="" alt=""/><p>用户名字</p><span>成为下线时间</span></li>
              <li>用户电话</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="loadmore">
        <el-button type="primary" plain @click="wejoin" size="small">点击展开更多</el-button>
      </div>
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
.business {width: 100%; border-top: .02rem solid #bbb; padding-top: .2rem; margin-bottom: .36rem; color: #101010;}
.bustit {margin: auto; font-size: .36rem; text-align: center; margin-bottom: .6rem;}
.bus_con dd {margin-bottom: .2rem; position: relative;}
.bus_con dd li{font-size: .28rem;}
.bus_con dd li span {font-size: .2rem;}
.bus_con dd li:nth-child(1) {float: left; margin-left: 1rem;}
.bus_con dd li:nth-child(2) {float: right; margin-right: .2rem;}
.bus_con dd img {position: absolute; left: .2rem; width: .6rem; height: .6rem; float: left;}
.bus_con dd::after {content: ""; display: block; clear: both; overflow: hidden; visibility: hidden; height: 0;}
.loadmore {text-align: center;}
.actrules {width: 100%; border-top: .02rem solid #bbb; padding-top: .2rem; color: #101010;}
.rulestit {margin: auto; font-size: .36rem; text-align: center; margin-bottom: .04rem;}
.rulescon li {font-size: .28rem; margin-left: .4rem; margin-bottom: .2rem;}
</style>

