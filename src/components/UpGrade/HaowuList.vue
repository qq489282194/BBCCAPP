<template>
  <div class="haowuList">
    <ul>
      <li v-for="item in goodsList" :key="item.goods_id" @click="MIXINToDetailShops(item.goods_id,'0','5')">
        <div class="haowuImg"><img :src="item.thumbnail" alt=""></div>
        <div class="haowuCon">
          <div class="title">{{ item.name }}</div>
          <div class="num">月销量{{ item.buy_count }}</div>
          <div class="price">￥<span>{{ item.price.toFixed(2) }}</span><span>￥{{ item.mkt_price }}</span><span></span></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['goodsList'],
  data() {
    return {

    }
  }
}
</script>
<style lang="css" scoped>
.haowuList {padding: 0 .24rem;}
.haowuList li {border-bottom: .01rem solid #E6E7E8; padding: .31rem 0;}
.haowuList li::after {content: ""; display: block; height: 0; clear: both; overflow: hidden; visibility: hidden;}
.haowuImg {width: 1.88rem; height: 1.88rem; border-radius: .1rem; float: left; margin-right: .26rem;}
.haowuImg img {width: 100%; height: 100%;}
.haowuCon {float: left; width: 4.5rem}
.haowuCon .title {font-size: .28rem; color: #03D7B1; margin-bottom: .25rem; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;}
.haowuCon .num {font-size: .22rem; color: #163354; margin-bottom: .25rem;}
.haowuCon .price {font-size: .27rem; color: #163354;}
.haowuCon .price span:nth-child(1) {font-size: .48rem; color: #03D7B1; margin-right: .2rem;}
.haowuCon .price span:nth-child(2) {text-decoration: line-through;}
.haowuCon .price span:nth-child(3) {display: inline-block; width: .42rem; height: .38rem; background: url('../../assets/img/upgrade/gouwuche1.png') no-repeat center; background-size: cover;float: right;margin-top: .2rem;}
</style>
