<template>
  <div >
     <header>
      <div class="header-div" >
        <a @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">转赠记录</span>
      </div>
    </header>
    <div class="bbc-index" style="height:1.4rem;z-index:1;">
     <div class="title-view flex-row-center ">
       <div class="title-item" :class="index == idx ? active:''" v-for="(item,index) in title" :key="index" @click="chooseIdx(index)">{{item}}</div>
     </div>
    </div>
    <div class="bbc-index">
     <!-- <div class="list-view">
       <div class="list-items" v-for="(item,index) in listData" :key="index">
         <div class="list-item"> 
           <span>转赠给{{item.receiveUserPhone}}</span>
           <span>{{item.createTime}}</span>
         </div>
         <div class="list-item"> 
           <span style="color:#333333">{{item.integralNum}}积分</span>
           <span style="color:#F63B75">成功</span>
         </div>
       </div>
     </div> -->

      <van-list v-model="loading" :finished="finished"  finished-text="没有更多了" @load="onLoad">
        <!-- <van-cell  v-for="item in list"  :key="item"  :title="item" /> -->
        <div class="list-view">
         <div class="list-items" v-for="(item,index) in listData" :key="index">
          <div class="list-item"> 
           <span>转赠给{{item.receiveUserPhone}}</span>
           <span>{{item.createTime}}</span>
          </div>
          <div class="list-item"> 
           <span style="color:#333333">{{item.integralNum}}积分</span>
           <span style="color:#F63B75">成功</span>
         </div>
       </div>
     </div>
      </van-list>
    </div>
    <!-- <div class="null-view" v-show="listData.lenght == 0">
      <img class="null-view-img" src="../../assets/img/null.png">
      <span>暂无数据</span>
    </div> -->
  </div>
</template>
<script>
import * as USER_API from "@/api/user";
import store from "@/store";
export default {
  data() {
    return {
      title:['全部','本周','本月','半年','一年'],
      key:['ALL','THIS_WEEK','THIS_MONTH','HALF_YEAR','THIS_YEAR'],
      active:'active',
      listData: [],
      page:1,
      pageSize:10,
      idx:0,
      data_total:1000,
      user_id:'',
      list: [],
      loading: false,
      finished: false,
    };
  },
  components: {},
  mounted() {
    let self = this
    if(store.state.userId){
      this.user_id = store.state.userId
    }else{
      this.user_id = this.$route.query.userId
    }
    this.IntegralGive()
  },
  methods: {
   chooseIdx(index){
     this.idx = index
     this.listData = []
     this.finished = false;
     this.loading= false;
     this.page = 1
     this.IntegralGive()
   },
   //积分转赠记录 
   IntegralGive(index){
      let integralGivenLogQuery = {};
      integralGivenLogQuery.key = this.key[this.idx];
      integralGivenLogQuery.page = this.page;
      integralGivenLogQuery.pageSize = this.pageSize;
      integralGivenLogQuery.userId = this.user_id; 
      USER_API.listGiveLog(integralGivenLogQuery).then(data => {
        if(data.status == 1){
          data.data.data.map(res =>{
            this.listData.push(res)
          })
          this.data_total = data.data.dataTotal
          console.log('---dataTotal---',data.data.dataTotal)
        }else{
          Toast(data.msg);
        }
       })
    },
    //上拉刷新
    onLoad(){
      let that = this
      // 异步更新数据
      setTimeout(() => {
     
       this.page = this.page + 1
       if(this.listData.length == 0){
         this.finished = true;
         this.loading = false;
         return;
       }
       this.IntegralGive()
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        //  this.finished = true;
        console.log(this.listData.length)
        console.log('---dataTotal---',that.data_total)
        if (parseInt(this.listData.length) >= parseInt(that.data_total)) {
          this.finished = true;
        }
      }, 500);
    }
    
  },
 
    
};
</script>
<style lang="css" scoped>
 .header-div{background: white;display: flex;flex-direction: row;justify-content: space-between;align-items: center;}
 .header-div .header-title{z-index: 1}
 .head_img{width:0.36rem;height: 0.38rem;margin-right:0.3rem}
 .flex-row-center{ display: flex;flex-direction: row;align-items: center;}
 .title-view{width:100%;  border-bottom: 0.01rem solid #E6E7E8; justify-content: space-around;background: #FFF;z-index: 20;}
 .title-item { height: 0.8rem;text-align: center;line-height: 0.8rem;font-size:0.32rem}
 .active{ border-bottom: 0.04rem solid #F63B75;font-weight: 700; color:#F63B75}
 .list-view{width:100%;display: flex;flex-direction:column;align-items:flex-end;margin-top: 0.8rem;}
 .list-items{width:94%;border-bottom: 0.01rem solid #E5E5E5;height: 1.52rem;}
 .list-item{display: flex;flex-direction:row;justify-content: space-between;padding-right: 0.2rem;font-size: 0.26rem; margin: 0.28rem 0;}
 .null-view{width:100%;display: flex;flex-direction:column;justify-content: center;align-items: center;position: fixed;top:0;height: 100%; color: #FFA7B5}
 .null-view-img{width:3rem;height:3rem;}
</style>
