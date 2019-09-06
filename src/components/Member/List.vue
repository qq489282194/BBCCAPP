<template>
  <ul class="goods-boxIn">
    <li v-for="(item, index) in goodsList" :key="index" @click="MIXINToDetailShops(item.goods_id,'0','1')">
      <div class="good-img">
        <!-- <img v-lazy="item.thumbnail" alt=""> -->
        <img :src="item.thumbnail" alt="">
      </div>
      <div class="good-title">
        <div class="top-title">
          <p>{{item.goods_name}}</p>
        </div>
        <span>月销量<span class="buy_count">{{item.buy_count_virtual + item.buy_count}}</span></span>
        <div class="price-tags">
          <span>￥<span class="price-pre">{{item.activity_price}}</span> </span>
          <del>￥{{item.mktprice}} </del>
          <i class="icon-shoppingcart"></i>
          <!-- <span>{{item.buy_count}}人付款</span> -->
          <!-- <img @click.stop="addShopCart(item.goods_id)" src="" alt=""> -->
        </div>
        <div class="price-tags">
          
        </div>
        
      </div>
      <!-- <div class="price-tags">
        <div class="tags-left">
          <span>￥</span><span class="price">{{item.price}}</span><del>&#165;{{item.mkt_price}}</del>
        </div>
        <div class="tags-right">已售{{item.buy_count}}件</div>
      </div> -->
      <!-- <div class="sales">
        <span>月销量{{item.buy_count}}</span>
      </div> -->
      <!-- <div class="price-tags">
        <del>￥{{item.mkt_price}} </del>
      </div> -->
      <!-- <div class="price-tags2">
        <span>￥<span class="price-pre">{{item.price}}</span> </span>
        <img @click.stop="addShopCart(item.goods_id)" src="" alt="">
      </div> -->
    </li>
  </ul>
</template>
<script>
export default {
  name: 'goodList',
  props: {
    goodsList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted () {
    // console.log('---===----')
    // console.log(this.$refs.footer.children)
  },
  methods: {
    toGoodDetail(goods_id){
      this.$router.push({path: '/Productdetails', query: {goods_id: goods_id}})
    },
    addShopCart(id) {
      this.$emit('addShopCart', id)
    }
  }
}
</script>
<style scoped>
.goods-boxIn{width: 100%;display: flex;flex-direction: row;flex-wrap: wrap;}
.goods-boxIn li{width: 7rem;border-bottom: 0.01rem solid #E6E7E8;margin-top: .32rem;padding-bottom: .2rem;}
.goods-boxIn .good-img{display: inline-block;}
.goods-boxIn .good-img img{width: 1.88rem;height: 1.88rem;object-fit: cover;border-radius: .1rem;}
.goods-boxIn .good-title{width:4.7rem;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;box-sizing: border-box;float: right;}
.goods-boxIn .good-title p{margin-bottom: .2rem;line-height: .42rem;color: #2B2B2B;font-size: .28rem;margin-top: -.07rem;
text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;line-clamp: 2;-webkit-box-orient: vertical;}
.goods-boxIn .good-title .top-title{height: .84rem;margin-bottom: .06rem;}
.goods-boxIn .good-title span{color: #999;font-size: .22rem;}
.goods-boxIn .good-title .buy_count{color: #FF9CBB;margin-left: .04rem;}
.goods-boxIn .price-tags{margin-top: .06rem;}
.goods-boxIn .price-tags span, del{ color: #999;font-size: .28rem;}
.goods-boxIn .price-tags>span{font-size: .28rem;color: #333333;margin-right: .48rem;}
.goods-boxIn .price-tags .price-pre{font-size: .48rem;color: #FF163D}
.goods-boxIn .price-tags i{float: right;margin-right: .44rem;margin-top: .16rem;}

.goods-boxIn .price-tags2{margin-top: 26px;display: flex;justify-content: space-between;padding: 0 12px;margin-bottom: 10px;box-sizing: border-box;align-items: center;}
.goods-boxIn .price-tags2 span{font-size: 22px;color: #F63B75;}
.goods-boxIn .price-tags2 span .price-pre{font-size: 28px;}
.goods-boxIn .price-tags2 img{width: 40px;height: 40px;border: 1px solid #F63B75;box-sizing: border-box;padding: 6px;border-radius: 50%;}
.goods-boxIn li:nth-child(2n){margin-right: 0;}

.icon-shoppingcart{width: .42rem; height: .38rem; background: url("../../assets/img/mymember/shoppingcart.png");background-size: 100% 100%;display: inline-block}
</style>
