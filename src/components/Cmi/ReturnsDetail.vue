<template>
  <div>
    <div class="header">
      <i class="icon icon-back" @click="backRouter()"></i>
      收益明细
    </div>

    <div class="nav">
      <ul>
        <li v-for="(item, index) in navList" :key="index" :class="navActiveNum == index ? 'active' : ''" @click="changeNavActive(index)">{{item}}</li>
      </ul>
    </div>

    <div class="main">
      <div v-if="!contentList.length">
        <p class="nullImg"><img src="../../assets/img/null.png" alt=""> 暂无数据 ~</p>
      </div>
      <ul>
        <li v-for="item in contentList" :key="item.profit">
          <p><span class="title">{{item.title}}</span><span class="time">{{(item.create_time).split(' ')[0]}}</span></p>
          <p><span class="name"><img :src="item.icon_url" alt="">{{item.account_type}}</span><span class="price">{{item.money}}</span></p>
        </li>
      </ul>
    </div>
    <!-- <div class="main">
      <div v-if="!contentList.length">
        <p class="nullImg"><img src="../../assets/img/null.png" alt=""> 暂无数据 ~</p>
      </div>
      <ul v-else>
        <li v-for="item in contentList" :key="item.profit">
          <p><span class="time">{{item.create_time}}</span><span class="price">{{item.income_type == 0 ? '+' : '-'}} {{item.money}}</span></p>
        </li>
      </ul>
    </div> -->

  </div>
</template>
<script>
import * as USER_API from '@/api/user'
import store from '@/store'
export default {
  data() {
    return {
      navActiveNum: 0,
      navList: ['全部', '本周', '本月', '半年', '一年'],
      contentList: [],
      searchParams: {
        page: 1,
        pageSize: 10,
      }
    }
  },
  computed: {
    userId() {
      return store.state.userId
    }
  },
  filters: {
    changeDate(date) {
      date = date * 1000
      let Year = new Date(date).getFullYear()
      let Month = new Date(date).getMonth() + 1
      let Day = new Date(date).getDate()
      return `${Year}.${Month}.${Day}`
    }
  },
  mounted() {
    this.initContentList()
  },
  methods: {
    initContentList(type = 'ALL') {
      // 初始化收益明细
      let params = {
        ...this.searchParams,
        type,
        userId: this.userId,
        shopType: 2
      }
      USER_API.findUserProfitList(params).then(res => {
        console.log(res)
        this.contentList = res

        console.log(this.contentList)
      })
    },
    changeNavActive(index) {
      this.navActiveNum = index
      switch (index) {
        case 0: this.initContentList(); break;
        case 1: this.initContentList('THIS_WEEK'); break;
        case 2: this.initContentList('THIS_MONTH'); break;
        case 3: this.initContentList('HALF_YEAR'); break;
        case 4: this.initContentList('THIS_YEAR'); break;
      }
    }
  }
}
</script>
<style scoped>
.header {text-align: center; position: fixed; width: 100%; height: 1.4rem; padding-top: .63rem; font-size: .36rem; color: #333333; left: 0; top: 0; background: #fff;}

.nav {border-bottom: .01rem solid #CFCFCF; position: fixed; top: 1.4rem; left: 0; width: 100%; background: #fff;}
.nav ul {display: flex;}
.nav ul li {flex: 1; text-align: center; font-size: .3rem; color: #999; padding: .23rem 0;}
.nav ul .active {color: #F63B75; position: relative;}
.nav ul .active::after {content: ""; display: block; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: .58rem; height: .06rem; background: #F63B75; border-radius: .03rem;}

.main {margin-top: 2.3rem;}
.main ul li {height: 1.5rem; border-bottom: .01rem solid #e5e5e5; display: flex; flex-direction: column; justify-content: center;}
.main ul li p {display: flex; justify-content: space-between; padding: 0 .23rem;}
.main ul li p:nth-of-type(1) {margin-bottom: .2rem;}
.main .title {font-size: .28rem; color: #333; flex: 3; text-overflow: -o-ellipsis-lastline; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical;}
.main .time {font-size: .20rem; color: #909090; /*flex: 1;*/ text-align: right;}
.main .name {font-size: .26rem; color: #666;}
.main .name img {width: .39rem; height: .39rem; border-radius: 50%; float: left; margin-right: .2rem;}
.main .price {font-size: .3rem; color: #F63B75;}

.nullImg {width: 4rem; height: 4rem; margin: 4rem auto; text-align: center; font-size: .26rem; color: #999;}
.nullImg img {width: 100%; height: 100%; margin-bottom: .4rem;}

.icon {display: block;}
.icon-back {width: .2rem; height: .35rem; background: url('../../assets/img/back.png') no-repeat center; background-size: contain; position: absolute; left: .24rem; top: .70rem;}
</style>
