<template>
    <!-- 我的商家 -->
    <div class="business">
      <div class="bustit">我的商家列表</div>
      <div class="jiantou"></div>
      <div class="shade"></div>
      <div class="bus_con">
        <dl v-if="isShow">
          <dd v-for="item in businessList" :key="item.phone">
            <ul>
              <li><img :src="item.icon" alt=""/><p>{{ item.username ? item.username : '1' }}</p><span>{{ item.createDate ? item.createDate : '1' }}</span></li>
              <li>{{ item.phone ? item.phone : '1' }}</li>
            </ul>
          </dd>
        </dl>
        <p v-else class="noBusiness">暂无商家，请点击“我要参与”获取商家列表</p>
      </div>
      <div class="loadmore">
        <van-button type="primary" size="small" @click="loadMore" :loading="isLoading" :disabled="isDisabled" v-if="isShow">点击展开更多</van-button>
      </div>
    </div>
</template>
<script>
export default {
  props: ['isShow'],
  data() {
    return {
      businessList: []
    }
  }
}
</script>
<style lang="css" scoped>
/* 商家 */
.business {width: 100%; height: 1.54rem; position: fixed; bottom: 0; left: 0; background: url('../../assets/img/activity/白色底@2x.png') no-repeat center; background-size: cover; z-index: 99; padding-top: 0.3rem;}
.jiantou {width: .32rem; height: .32rem; position: absolute; background: url('../../assets/img/activity/shang.png') no-repeat center; background-size: cover; left: 3.5rem; top: 1rem; animation: shangxia 1.3s infinite linear;}
.shade {width: 100%; height: 100%; background: url('../../assets/img/activity/zhezhao.png') no-repeat center; background-size: cover;}
.bustit {margin: auto; font-size: .32rem; text-align: center; color: #333333; position: relative;}
.bustit::before {content: ""; display: block; width: 1.2rem; height: .16rem; background: url('../../assets/img/activity/shangjia_zuo.png') no-repeat center; background-size: cover; position: absolute; left: 1.5rem; top: .15rem;}
.bustit::after {content: ""; display: block; width: 1.2rem; height: .16rem; background: url('../../assets/img/activity/shangjia_you.png') no-repeat center; background-size: cover; position: absolute; left: 4.8rem; top: .15rem;}
.bus_con {position: fixed; top: 100%; left: 0;}
.bus_con dd {margin-bottom: .2rem; position: relative; border-bottom: 1px solid #E5E5E5; padding-bottom: .2rem;}
.bus_con dd li {font-size: 0.26rem; color: #333;}
.bus_con dd li span {font-size: 0.22rem; color: #999;}
.bus_con dd li:nth-child(1) {float: left; margin-left: 1.2rem;}
.bus_con dd li:nth-child(1) p {font-size: 0.28rem; color: #333;}
.bus_con dd li:nth-child(2) {float: right; margin-right: 0.2rem; line-height: .75rem;}
.bus_con dd img {position: absolute; left: 0.2rem; width: .84rem; height: .84rem; float: left; border-radius: 50%;}
.bus_con dd::after {content: ""; display: block; clear: both; overflow: hidden; visibility: hidden; height: 0;}
.loadmore {text-align: center;}
.noBusiness {text-align: center; font-size: .28rem; color: #999;}
</style>


