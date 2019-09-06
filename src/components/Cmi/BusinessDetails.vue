<template>
  <div>
    <div class="header">
      <i class="icon icon-back" @click="toInvitation()"></i>
      商家详情
    </div>

    <div class="banner">
      <img v-if="type==1" :src="shopDetail1.shop_logo ? shopDetail1.shop_logo : require('../../assets/img/replace_bus.png')" alt="">
      <img v-if="type==2" :src="shopDetail2.shop_logo ? shopDetail2.shop_logo : require('../../assets/img/replace_bus.png')" alt="">
      <img v-if="type==3" :src="shopDetail3.shop_logo ? shopDetail3.shop_logo : require('../../assets/img/replace_bus.png')" alt="">
    </div>

    <!-- <div class="miaoshu" v-if="type == 1 || type == 3">
      <div class="mioashu_title">{{shopDetail1.shop_name}}</div>
      <div class="miaoshu_main">
        <div><p class="num">{{shopDetail1.shop_createtime ? $options.filters.changeDate(shopDetail1.shop_createtime) : '暂无'}}</p><p class="txt"><i class="icon icon-jointime"></i><span>加入时间</span></p></div>
        <div v-show="type == 1"><p class="num">{{shopDetail1.shop_createtime ? $options.filters.changeDate(shopDetail1.shop_createtime) : '暂无'}}</p><p class="txt"><i class="icon icon-jointime"></i><span>加入时间</span></p></div>
        <div v-show="type == 3"><p class="num">{{shopDetail3.shop_createtime ? $options.filters.changeDate(shopDetail3.shop_createtime) : '暂无'}}</p><p class="txt"><i class="icon icon-jointime"></i><span>加入时间</span></p></div>
        <div v-show="type == 1"><p class="num">{{shop_profit}}</p><p class="txt"><i class="icon icon-earnings"></i><span>收益</span></p></div>
        <div v-show="type == 3"><p class="num">{{shop_profit}}</p><p class="txt"><i class="icon icon-earnings"></i><span>收益</span></p></div>
      </div>
    </div> -->

    <div class="miaoshu2">
      <div class="miaoshu2_title" v-show="type == 1">{{shopDetail1.shop_name}}</div>
      <div class="miaoshu2_title" v-show="type == 2">{{shopDetail2.shop_name}}</div>
      <div class="miaoshu2_title" v-show="type == 3">{{shopDetail3.shop_name}}</div>
    </div>

    <div class="shouyi" v-show="type == 1 || type == 3">
      <p v-show="type == 1"><i class="icon icon-jointime"></i>加入时间&nbsp;&nbsp;&nbsp;{{shopDetail1.shop_createtime ? $options.filters.changeDate(shopDetail1.shop_createtime) : '暂无'}}</p>
      <p v-show="type == 3"><i class="icon icon-jointime"></i>加入时间&nbsp;&nbsp;&nbsp;{{shopDetail3.shop_createtime ? $options.filters.changeDate(shopDetail3.shop_createtime) : '暂无'}}</p>
      <p><i class="icon icon-earnings"></i>收益&nbsp;&nbsp;&nbsp;<span>{{shop_profit}}</span></p>
    </div>

    <div class="main">
      <p class="phone" v-if="type == 1"><i>联系电话：</i><span>{{shopDetail1.company_phone}}</span></p>
      <p class="phone" v-if="type == 2"><i>联系电话：</i><span>{{shopDetail2.link_phone}}</span></p>
      <p class="phone" v-if="type == 3"><i>联系电话：</i><span>{{shopDetail3.link_phone}}</span></p>
      <p v-if="type == 1"><i></i><span><u>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</u>{{shopDetail1.shop_province + ' ' + shopDetail1.shop_city + ' ' + shopDetail1.shop_county + ' ' + shopDetail1.shop_add}}</span></p>
      <p v-if="type == 2"><i></i><span><u>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</u>{{shopDetail2.shop_province + ' ' + shopDetail2.shop_city + ' ' + shopDetail2.shop_county + ' ' + shopDetail2.shop_add}}</span></p>
      <p v-if="type == 3"><i></i><span><u>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</u>{{shopDetail3.shop_province + ' ' + shopDetail3.shop_city + ' ' + shopDetail3.shop_county + ' ' + shopDetail3.shop_add}}</span></p>
    </div>
  </div>
</template>
<script>
import * as USER_API from '@/api/user3'
export default {
  data() {
    return {
      businessDetailShow: true, // 1.商家详情  0.可邀约商家详情
      shopDetail1: {}, // 我的商家列表
      shopDetail2: {}, // 可邀请商家列表
      shopDetail3: {}, // 服务商列表
      shop_profit: '',
      type: ''
    }
  },
  filters: {
    changeDate(date) {
      date = date * 1000
      let Year = new Date(date).getFullYear()
      let Month = new Date(date).getMonth() + 1
      let Day = new Date(date).getDate()
      return `${Year}-${Month}-${Day}`
    }
  },
  mounted() {
    this.initBusinessDetail()
  },
  methods: {
    initBusinessDetail() {
      // 初始化店铺详情
      console.log(this.$route.query)
      this.type = this.$route.query.type
      let query = this.$route.query
      if (query.type == 1) {
        this.businessDetailShow = true
        this.shop_profit = query.shop_profit
        let shop_id = query.shop_id
        USER_API.getShopDetailss(shop_id).then(res => {
          console.log(res)
          this.shopDetail1 = res
        })
      } else if (query.type == 2) {
        this.businessDetailShow = false
        let params = {
          shop_id: query.shop_id
        }
        USER_API.getShopDetailsss(params).then(res => {
          console.log(res)
          this.shopDetail2 = res
          console.log(2222222222222, this.shopDetail2)
        })
      } else if (query.type == 3) {
        this.businessDetailShow = false
        this.shop_profit = query.shop_profit
        let params = {
          shop_id: query.shop_id
        }
        USER_API.getShopDetailsss(params).then(res => {
          console.log(res)
          this.shopDetail3 = res
        })
      }
    },
    toInvitation(){
      this.$router.replace({name:'newinvitation',query:{type: this.type}})
    }
  }
}
</script>
<style scoped>
.header {text-align: center; position: relative; width: 100%; height: 1.4rem; padding-top: .63rem; font-size: .36rem; color: #333333;}

.banner {width: 100%; height: 3.6rem;}
.banner img {width: 100%; height: 3.6rem;}

/* .miaoshu {width: 100%; height: 2.3rem; background: url('../../assets/img/businessdetails/miaoshu_bg.png') no-repeat center; background-size: contain;}
.miaoshu .mioashu_title {font-size: .32rem; color: #333; padding-left: .24rem; padding-top: .36rem; margin-bottom: .48rem;}
.miaoshu .miaoshu_main {display: flex;}
.miaoshu .miaoshu_main div {flex: 1; text-align: center; position: relative;}
.miaoshu .miaoshu_main div:nth-of-type(1)::after {content: ""; display: block; width: .01rem; height: .28rem; background: #FF8AAE; position: absolute; top: .26rem; right: 0;}
.miaoshu .miaoshu_main .num {font-size: .30rem; color: #F63B75; margin-bottom: .18rem;}
.miaoshu .miaoshu_main .txt {font-size: .24rem; color: #333; display: flex; justify-content: center;}
.miaoshu .miaoshu_main .txt span {margin-left: .1rem;} */

.miaoshu2 .miaoshu2_title {font-size: .34rem; color: #333; padding-left: .24rem; padding-top: .36rem; font-family: 'PingFang-SC-Medium';}

.shouyi {width: 100%; height: .6rem; line-height: .6rem; background: #FFFBF1; margin-top: .31rem; display: flex; font-size: .22rem; color: #333333; padding: 0 .24rem; justify-content: space-between;}
.shouyi p {position: relative; padding-left: .35rem;}
.shouyi span {color: #FF5A5A; font-size: .3rem; vertical-align: middle; display: inline-block; margin-top: -.05rem;}

.main p {padding-left: .24rem; padding-top: .38rem; padding-right: .44rem; display: flex;}
.main p span {font-size: .26rem; color: #333333;}
.main p span u {text-decoration: none; color: #909090;}
.main .phone {align-items: center; font-size: .26rem; color: #999999;}

.icon {display: block; position: absolute;}
.icon-back {width: .2rem; height: .35rem; background: url('../../assets/img/back.png') no-repeat center; background-size: contain; position: absolute; left: .24rem; top: .70rem;}
.icon-jointime {width: .24rem; height: .24rem; background: url('../../assets/img/businessdetails/join_time1.png') no-repeat center; background-size: contain; left: 0; top: 50%; transform: translateY(-50%);}
.icon-earnings {width: .24rem; height: .24rem; background: url('../../assets/img/businessdetails/earnings1.png') no-repeat center; background-size: contain; left: 0; top: 50%; transform: translateY(-50%);}
/* .icon-jointime {width: .26rem; height: .26rem; background: url('../../assets/img/businessdetails/join_time.png') no-repeat center; background-size: contain;}
.icon-earnings {width: .21rem; height: .30rem; background: url('../../assets/img/businessdetails/earnings.png') no-repeat center; background-size: contain;}
.icon-phone {width: .41rem; height: .41rem; background: url('../../assets/img/businessdetails/phone.png') no-repeat center; background-size: contain;}
.icon-address {width: .28rem; height: .28rem; background: url('../../assets/img/businessdetails/address.png') no-repeat center; background-size: contain; margin-top: .05rem;}
.icon-openhours {width: .28rem; height: .28rem; background: url('../../assets/img/businessdetails/address.png') no-repeat center; background-size: contain; margin-top: .05rem;} */
</style>

