<template>
  <div>
    <!-- <div class="header">
      <i class="icon icon-back" @click="backRouter()"></i>
      积分明细
    </div> -->
    <topcomom>积分明细</topcomom>

    <div :class="[{'fixed-headipx':phoneSignX},'fixed-head']">
      <div class="wanav">
        <div>
          <p @click="show = !show" :class="show ? 'active':''">{{ changeCard }}<i :class="show ? 'icon-top':'icon-bot'"></i></p>
          <ul v-if="show" @click="show = false">
            <div>
              <li v-for="(item,index) in allmoney" @click="switchtime(item,index)" :key="index">
                <p :class="aiiIndex == index ? 'allmoney':''">{{item.label1}}</p>
                <!-- <i :class="aiiIndex == index ? 'icon-gou':''"></i> -->
              </li>
            </div>
          </ul>
        </div>
        <ul>
          <!-- <li v-for="(item, index) in alltime" :key="index" :class="navActiveNum == item.value ? 'active' : ''" @click="switchtime(item)">{{item.label}}</li> -->
          <li v-for="(item, index) in alltime" :key="index" :class="navActiveNum == item.value ? 'active' : ''" @click="switchtime(item)">{{item.label}}</li>
        </ul>
      </div>
    </div>

    <!-- <div class="Shade" v-if="show" @click="show = false"></div> -->

    <div class="wamain">
      <ul v-if="moneyData.length" :class="[{'ulipx':phoneSignX},'uland']">
        <li v-for="(item,index) in moneyData" :key="index">
          <p><span class="title" v-if="item.title">{{item.title}}</span><span class="time">{{ item.time }}</span></p>
          <p><span class="name"><img :src="item.icon_url" v-if="item.icon_url" alt="">{{item.account_type}}</span><span :class="item.income_type == 0 ? 'pricec1':'price'">{{ item.income_type == 0 ? '+':'-' }}{{item.money}}</span></p>
        </li>
      </ul>
    </div>

    <div class="nothing" v-if="moneyData.length==0">
      <img src="../../assets/img/invitation/tongyong_wk_bg@2x.png" alt="">
      <p style="text-align:center;color:#999;margin-top:.4rem;">暂无数据</p>
    </div>

  </div>
</template>
<script>
import * as USER_API from '@/api/user'
import store from '@/store'
import topcomom from '@/components/common/Topcomomnew'
import {isIPhoneX,phoneSign} from '@/assets/js/share.js'
export default {
  data() {
    return {
      navActiveNum: 'THIS_WEEK',
      alltime:[
        // {value:0,label:'全部'},
        {value:'THIS_WEEK',label:'本周'},
        {value:'THIS_MONTH',label:'本月'},
        // {value:93,label:'三月'},
        {value:'HALF_YEAR',label:'半年'},
        {value:'THIS_YEAR',label:'一年'},
      ],
      allmoney:[
        {label1:'全部'},
        {label1:'好友收益'},
        {label1:'商家收益'},
        {label1:'消费'},
        {label1:'转赠'},
        {label1:'代付'},
        {label1:'兑换'},
      ],
      // C米筛选
      searchForm:{
        userId:store.state.userId,
        pagesize:200,
        page:1,
        shopType :0,
        type :'THIS_WEEK',
      },
      moneyData:[],
      show:false,
      aiiIndex:0,
      changeCard:'全部',
      phoneSignX:false,
      sign:false,
    }
  },
  computed: {
    userId() {
      return store.state.userId
    }
  },
  components: {
    topcomom
  },
  filters: {
    changeDate(date) {
      let Year = new Date(date).getFullYear()
      let Month = new Date(date).getMonth() + 1
      let Day = new Date(date).getDate()
      return `${Year}.${Month}.${Day}`
    }
  },
  mounted() {
    this.getFindUserProfitList()
    var phoneSignb = phoneSign()
    console.log(phoneSignb, '手机机型')
    if (phoneSignb == 'iOS') {
      this.sign = true
      this.phoneSignX = true
      console.log(phoneSignb, 'sign--ios标志')
    }
    var phoneSignX = isIPhoneX()
    if(phoneSignX){
      this.phoneSignX = true
      this.sign = true
    }
  },
  methods: {
    changeNavActive(index) {
      this.navActiveNum = index
      this.initContentList(index)
    },
    // 时间切换
      switchtime(item,index){
        if(item.label1){
          this.changeCard = item.label1
        }
        this.changTime(item.value,item.label,index)
        this.month = item.label
        if(index != undefined){
          this.aiiIndex = index
        }
        // debugger
      },
      getFindUserProfitList(){
        this.moneyData = []
        USER_API.getFindUserProfitList(this.searchForm).then(data => {
          if(data){
            for(let i in data){
              let time = data[i].create_time.split(' ')
              data[i].time = time[0]
            }
            // console.log(data)
            
            // debugger
            this.moneyData = data

            // debugger
          }
        });
        this.show = false
      },
      // C米筛选
      changTime(active,text,index){
        this.activeText = text
        if(active){
          this.active = active
          this.navActiveNum = active
          this.searchForm.type = active
        }
        if(index != undefined){
          this.searchForm.shopType = index
        }
        // debugger
        this.getFindUserProfitList()
      }
  }
}
</script>
<style scoped>
.header {text-align: center; position: relative; width: 100%; height: 1.4rem; padding-top: .63rem; font-size: .36rem; color: #333333;}

.nav {border-bottom: .01rem solid #CFCFCF;}
.nav ul {display: flex;}
.nav ul li {flex: 1; text-align: center; font-size: .3rem; color: #999; padding: .23rem 0;}
.nav ul .active {color: #F63B75; position: relative;}
.nav ul .active::after {content: ""; display: block; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: .58rem; height: .06rem; background: #F63B75; border-radius: .03rem;}

.fixed-head{position: fixed;top: 1.28rem;background: white;width: 100%;height: 1.15rem;padding-top: .4rem;}
.fixed-headipx{position: fixed;top: .7rem;background: white;width: 100%;height: 1.15rem;padding-top: .4rem;}

.wanav{font-size: .28rem;color: #666;background: #f2f2f2;}
.wanav>div{display: inline-block;}
/* .wanav div>p{margin-top: -.58rem;margin-left: .28rem;float: left;width: 1.6rem;} */
.wanav div>p{margin-top: -.63rem;margin-left: .2rem;float: left;height: .46rem;background: white;border-radius: .24rem;text-align: center;padding: 0 .15rem;line-height: .46rem;}
.wanav div>p i{margin-left: .1rem;}
.wanav div ul{position: absolute;width: 100%;color: #999999;font-size: .28rem;background: rgba(0, 0, 0,.6);height: 2000%;
margin-top: .1rem;z-index: 1;}
/* .wanav div ul li{height: .86rem;line-height: .86rem;border-top: 1px solid #E5E5E5;background: #F8F8F8;padding-left: .34rem;} */
.wanav div ul li{height: .56rem;line-height: .56rem;background: #f2f2f2;width: 1.6rem;float: left;margin: .3rem 0 0 .2rem;text-align: center;}
.wanav div ul div{background: white;height: 2rem;}
.wanav div ul li:nth-child(1){border-top: none;}

/* .wanav div ul li p{display: inline-block;} */
.wanav div ul li i{float: right;margin: .3rem;}
.wanav>ul{display: inline-block;width: 72%;}
/* .wanav>ul li{float: left;width: calc(100% / 4);text-align: center;padding-bottom: .2rem;} */
.wanav>ul li{float: left;width: 1.1rem;text-align: center;height: .46rem;border-radius: .24rem;background: white;margin: .2rem 0 .15rem .2rem;line-height: .46rem;}
.active {color: #F63B75;}
/* .wanav>ul .active {color: #F63B75; position: relative;} */
/* .wanav>ul .active::after {content: ""; display: block; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: .58rem; height: .06rem; background: #F63B75; border-radius: .03rem;} */
.wanav .allmoney{color: #F63B75;background: #FFEDF3;}
.Shade{position: absolute;height: 100%;width: 100%;background: #333;opacity: .6;margin-top: 6rem;z-index: 1;}

.wamain{position: relative;z-index: -2;}
.wamain .uland {padding: 0 .23rem;margin-top: 2.5rem;}
.wamain .ulipx {padding: 0 .23rem;margin-top: 1.8rem;}
.wamain ul li {height: 1.5rem; border-bottom: .01rem solid #e5e5e5; display: flex; flex-direction: column; justify-content: center;}
.wamain ul li p {display: flex; justify-content: space-between; }
.wamain ul li p:nth-of-type(1) {margin-bottom: .26rem;}
.wamain .title {font-size: .28rem; color: #333; flex: 3; 
text-overflow: -o-ellipsis-lastline; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; line-clamp: 1; -webkit-box-orient: vertical;}
.wamain .time {font-size: .20rem; color: #909090; flex: 1; text-align: right;}
.wamain .name {font-size: .26rem; color: #666;}
.wamain .name img {width: .39rem; height: .39rem; border-radius: 50%; float: left; margin-right: .2rem;}
.wamain .price {font-size: .3rem;}
.wamain .pricec1 {font-size: .3rem;color: #F63B75;}

.nothing{margin-top: 2rem;padding-top: 2rem;}
.nothing img{width: 50%;margin: 0 auto;}

.icon {display: block;}
.icon-back {width: .2rem; height: .35rem; background: url('../../assets/img/back.png') no-repeat center; background-size: contain; position: absolute; left: .24rem; top: .70rem;}
.icon-gou {width: .22rem; height: .15rem; background: url('../../assets/img/cmi/gou.png');display: inline-block; background-size: 100% 100%; }
.icon-bot {width: .21rem; height: .13rem; background: url('../../assets/img/cmi/bot.png');display: inline-block; background-size: 100% 100%; }
.icon-top {width: .21rem; height: .13rem; background: url('../../assets/img/cmi/top.png');display: inline-block; background-size: 100% 100%; }

</style>
