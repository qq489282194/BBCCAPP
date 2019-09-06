<template>
  <div style="height: 100vh;">
    <div class="header">
      <i class="icon icon-back" @click="backRouter()"></i>
      代付详情
    </div>

    <div class="banner1" v-show="shopMessage.order_status == 'CONFIRM'">
      进行中
      <p id="timeDiv"></p>
    </div>

    <div class="banner2" v-show="shopMessage.order_status == 'CANCELLED'">
      已取消
    </div>

    <div class="banner3" v-show="shopMessage.order_status == 'COMPLETE'">
      已完成
    </div>

    <div class="main">
      <div class="main1" v-for="item in shopMessage.sku_list" :key="item.seller_id">
        <div class="part1"><img :src="item.goods_image" alt=""><p class="title">{{item.name}}</p></div>
        <div class="part2"><p class="num">× {{item.num}}</p></div>
      </div>
      <div class="main3">
        <p class="price">总价：<i>￥</i><u>{{shopMessage.order_price}}</u></p>
      </div>
      <div class="main2">
        <p class="title">订单信息</p>
        <p>账号：<img :src="shopMessage.others_pay_order.owner_icon?'https://oss.meibbc.com/'+shopMessage.others_pay_order.owner_icon:require('../../assets/img/1123.png')" alt="">{{shopMessage.others_pay_order.owner_nick_name}}</p>
        <p>对方手机号：{{shopMessage.others_pay_order.owner_phone}}</p>
        <p>下单时间：{{shopMessage.create_time | changeDate1}}</p>
        <p v-show="shopMessage.payment_time">完成时间：{{shopMessage.payment_time | changeDate1}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopMessage: {},
    }
  },
  filters: {
    changeDate(date) {
      date = date * 1000
      let day = new Date(date).getDate()
      let hours = new Date(date).getHours()
      let minutes = new Date(date).getMinutes()
      return `${day}天${hours}小时${minutes}分`
    },
    changeDate1(date) {
      date = date * 1000
      let Year = new Date(date).getFullYear()
      let Month = new Date(date).getMonth() + 1
      let Day = new Date(date).getDate()
      return `${Year}-${Month}-${Day}`
    }
  },
  mounted() {
    console.log(this.$route)
    this.shopMessage = this.$route.params.all
    setTimeout(() => {
      this.countDown()
    })
  },
  methods: {
    countDown() {
      function addNumber(num){
        var num=(num>9)?num:('0'+num);
        return num;
      }
      var oldYear = new Date().getFullYear()
      var oldMonth = new Date().getMonth()+1
      var oldDate = new Date().getDate()
      var endTime = new Date(`${oldYear}-${oldMonth}-${oldDate} 23:30:00`)
      var leftDiv=function(){
        var leftTime=endTime-(new Date().getTime());
        var leftHours=addNumber(Math.floor(leftTime/1000/60/60%24));
        var leftMinutes=addNumber(Math.floor(leftTime/1000/60%60));
        var leftSeconds=addNumber(Math.floor(leftTime/1000%60));
        document.getElementById('timeDiv').innerHTML="剩余："+leftHours+"时"+leftMinutes+"分"+leftSeconds+"秒";
        if(leftTime>0){
          setTimeout(function(){
            leftDiv();
          },1000);
        }else{
          clearTimeout(leftDiv())
        }
      }
      leftDiv();
    }
  }
}
</script>

<style scoped>
.header {text-align: center; position: relative; width: 100%; height: 1.4rem; padding-top: .63rem; font-size: .36rem; color: #333333;}

.banner1 {width: 7.5rem; height: 1.5rem; background: url('../../assets/img/integralpaid/jinxingzhong.png') no-repeat center; background-size: contain; font-size: .32rem; color: #fff; padding-left: .24rem; line-height: .45rem; padding-top: .3rem;}
.banner1 p {font-size: .26rem;}

.banner2 {width: 7.5rem; height: 1.5rem; background: url('../../assets/img/integralpaid/yiquxiao.png') no-repeat center; background-size: contain; font-size: .32rem; color: #fff; padding-left: .24rem; line-height: 1.5rem}

.banner3 {width: 7.5rem; height: 1.5rem; background: url('../../assets/img/integralpaid/yiwancheng.png') no-repeat center; background-size: contain; font-size: .32rem; color: #fff; padding-left: .24rem; line-height: 1.5rem}

.main {height: 100%; background: #F2F2F2;}
.main>div {padding: .3rem .25rem; margin-bottom: .2rem; background: #fff;}
.main .main1 {display: flex; justify-content: space-between; margin-bottom: 0; padding-bottom: .1rem;}
.main .part1 {flex: 3;}
.main .part1 img {width: 1.4rem; height: 1.4rem; display: inline-block; margin-right: .2rem; float: left;}
.main .title {font-size: .26rem; color: #303030;}
.main .part2 {flex: 1; text-align: right;}
.main .num {font-size: .22rem; color: #666; margin-bottom: .9rem;}
.main .price {font-size: .24rem; color: #333;}
.main .price i {color: #F63B75;}
.main .price u {text-decoration: none; font-size: .32rem; color: #F63B75;}

.main .main2 {font-size: .26rem; color: #666; line-height: .45rem; height: 2.61rem;}
.main .main2 .title {font-size: .28rem; color: #2B2B2B;}
.main .main2 img {display: inline-block; width: .4rem; height: .4rem; border-radius: 50%; margin-right: .1rem;}

.main .main3 {text-align: right;}

.icon {display: block;}
.icon-back {width: .2rem; height: .35rem; background: url('../../assets/img/back.png') no-repeat center; background-size: contain; position: absolute; left: .24rem; top: .70rem;}
</style>
