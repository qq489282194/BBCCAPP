<template>
  <div class="expcard">
    <div class="header">
      我的体验卡
      <i class="icon-back" @click="backRouter()"></i>
    </div>

    <div class="xxk">
      <div :class="activeXXK == 1 ? 'active' : ''" @click="changeXXKStatus(1)">可使用</div>
      <div :class="activeXXK == 2 ? 'active' : ''" @click="changeXXKStatus(2)">已失效</div>
    </div>

    <div class="xxkContent">
      <ul v-show="activeXXK == 1">
        <li v-for="item in cardList" :key="item.cashCardId" @click="toCardDetail(item.cashCardId)">
          <p class="card_name">{{item.name}}</p>
          <p class="card_number">NO:{{item.cardNum}}<i class="card_price">{{item.amount}}元</i></p>
        </li>
      </ul>
      <ul v-show="activeXXK == 2" class="failure">
        <li v-for="item in cardList" :key="item.cashCardId" @click="toCardDetail(item.cashCardId)">
          <i class="icon icon-zhuxiao" v-show="item.status == 1"></i>
          <i class="icon icon-shixiao" v-show="item.status == 2"></i>
          <p class="card_name">{{item.name}}</p>
          <p class="card_number">NO:{{item.cardNum}}<i class="card_price">{{item.amount}}元</i></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import * as USER1_API from '@/api/user1'
import store from '@/store'
export default {
  data() {
    return {
      activeXXK: 1, // 活动的选项卡
      cardList: [],
      newCardList: [],
      searchParams: {
        page: 1,
        pageSize: 10,
      }
    }
  },
  mounted() {
    console.log(111111, this.$route.params.status)
    var status = this.$route.params.status
    if (status && (status == 1 || status == 2)) {
      console.log('ssssssssss')
      this.activeXXK = 2
      this.initExpCardList(3)
    } else {
      this.initExpCardList()
    }
  },
  methods: {
    initExpCardList(status = 0) {
      // 初始化列表
      let params = {
        ...this.searchParams,
        status,
        userId: store.state.userId
      }
      // console.log(params)
      USER1_API.findCardList(params).then(res=>{
        console.log(res)
        if (res.data) {
          this.cardList = res.data.data
        } else {
          this.cardList = []
        }
      })
    },
    changeXXKStatus(status) {
      // 选项卡
      this.activeXXK = status
      if (status == 1) {
        this.initExpCardList()
      } else {
        this.initExpCardList(3)
      }
    },
    toCardDetail(cashCardId) {
      // 点击查看卡详情
      this.$router.push({
        name: 'cmi-expcard-detail',
        query: {
          cashCardId
        }
      })
    }
  }
}
</script>
<style scoped>
.header {text-align: center; font-size: .36rem; color: #333; font-weight: bold; padding-top: .71rem; padding-bottom: .61rem; position: relative;}
.icon-back {display: block; width: .2rem; height: .35rem; color: #999; background: url('../../assets/img/back.png') no-repeat center; background-size: contain; position: absolute; left: .24rem; top: .79rem;}

.xxk {display: flex; margin-bottom: .3rem;}
.xxk>div {flex: 1; text-align: center; font-size: .3rem; color: #666; border-bottom: .01rem solid #E5E5E5; padding-bottom: .25rem;}
.xxk>.active {color: #F63B75; position: relative;}
.xxk>.active::after {content: ""; display: block; width: .48rem; height: .06rem; background: #F63B75; position: absolute; left: 50%; bottom: 0; transform: translateX(-50%);}

.xxkContent ul li {width: 6.4rem; height: 2.71rem; background: #252525 url('../../assets/img/expcard/card_background.png') no-repeat center; background-size: contain; margin: auto; margin-bottom: .3rem; border-radius: .2rem; position: relative;}
.xxkContent ul li .card_name {font-size: .36rem; color: #FFEAB3; margin-left: .47rem; margin-bottom: 1rem; margin-top: .51rem; display: inline-block;}
.xxkContent ul li .card_number {font-size: .26rem; color: #FFEAB1; margin-left: .49rem; background:linear-gradient(0deg,rgba(255,202,126,1) 0%, rgba(255,238,159,1) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent;}
.xxkContent ul li .card_price {display: block; float: right; color: #FFEAB1; margin-right: .48rem; background:linear-gradient(0deg,rgba(255,202,126,1) 0%, rgba(255,238,159,1) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent;}
.xxkContent .failure li::after {content: ""; display: block; width: 100%; height: 100%; background: rgba(255,255,255,.4); position: absolute; top: 0; left: 0;}

.icon {display: block; position: absolute;}
.icon-zhuxiao {width: 1.13rem; height: 1.04rem; background: url('../../assets/img/expcard/zhuxiaozhong.png') no-repeat center; background-size: contain; top: 0; right: 0;}
.icon-shixiao {width: 1.13rem; height: 1.04rem; background: url('../../assets/img/expcard/yishixiao.png') no-repeat center; background-size: contain; top: 0; right: 0;}
</style>

