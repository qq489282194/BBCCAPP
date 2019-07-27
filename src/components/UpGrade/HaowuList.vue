<template>
  <div class="haowuList">
    <div class="two-goods-cell">
      <div class="two-goods-cell-img">
        <img v-lazy="url" :src="url" alt="">
      </div>
      <div class="two-goods-cell-bottoms">
        <div class="price-tags">
          <span>￥<span class="price">789</span></span>
          <span style="color: #999;">10人付款</span>
        </div>
        <!-- <div class="buy-btn" @click.stop="toBuy(item.goods_id)">立即购买</div> -->
        <div class="buy-btn">立即购买</div>
      </div>
    </div>
    <div class="two-goods-cell">
      <div class="two-goods-cell-img">
        <img v-lazy="url" :src="url" alt="">
      </div>
      <div class="two-goods-cell-bottoms">
        <div class="price-tags">
          <span>￥<span class="price">789</span></span>
          <span style="color: #999;">10人付款</span>
        </div>
        <!-- <div class="buy-btn" @click.stop="toBuy(item.goods_id)">立即购买</div> -->
        <div class="buy-btn">立即购买</div>
      </div>
    </div>
    <div class="two-goods-cell">
      <div class="two-goods-cell-img">
        <img v-lazy="url" :src="url" alt="">
      </div>
      <div class="two-goods-cell-bottoms">
        <div class="price-tags">
          <span>￥<span class="price">789</span></span>
          <span style="color: #999;">10人付款</span>
        </div>
        <!-- <div class="buy-btn" @click.stop="toBuy(item.goods_id)">立即购买</div> -->
        <div class="buy-btn">立即购买</div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: require('../../assets/img/mymember/swiper-one.png')
    }
  }
}
</script>
<style lang="css" scoped>
.haowuList {display: flex; padding-left: 5%;}
.two-goods-cell{width: 32%; background: #fff;  margin-right: .375rem; margin-bottom: .375rem;
 box-sizing: border-box; display: flex; flex-direction: column; overflow: hidden;}
.two-goods-cell:nth-child(3n){margin-right: 0;}
.two-goods-cell-img{
  width: 100%; flex: 1;
}
.two-goods-cell img{ width: 100%; height: 100%;}
.two-goods-cell-bottoms{ flex: 1; height: 50%; padding: .275rem; box-sizing: border-box;}
.two-goods-cell-bottoms p { font-size: 11px; color: #242424; display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden; margin-bottom:6%; height: 1.875rem;}
.two-goods-cell-bottoms .price-tags { display: flex; font-size: 9px; margin-bottom: 6%; display: flex;
justify-content: space-between; align-items: center;}
.buy-btn{ width: 100%; height: .4rem; background: #FF2F5D; text-align: center; line-height: .4rem; font-size: .2rem; color: #fff; border-radius: .3125rem;}
.two-goods-cell-bottoms .price-tags span{ color: #FF2F5D;}
.price-tags .price span{ font-size: 14px;}
.two-goods-more{ text-align: center; height: 1.875rem;line-height: 1.875rem;  font-size: .875rem;
 background: #fff; border-radius: .3125rem; color: #242424;}
 .two-goods-nomore {text-align: center; height: 1.875rem; line-height: 1.875rem; color: #fff;  font-size: .875rem;}
.activity_name{ background: linear-gradient( #ff0337,#f65f1c); padding: 0 3px;
 box-sizing: border-box; border-radius: 3px; color: #fff;}
</style>
