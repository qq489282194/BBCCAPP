<template>
  <div>
   <!-- <topcomom>搜索</topcomom> -->
   <!-- <div class="header"><img @click="backRouter" src="../../assets/img/mymember/back@2x.png" class="icon-back">搜索</div> -->
  <div class="contIndex">
    <div class="flex_sprond">
      <div class="flex_start searchbox">
        <img src="../../assets/img/sharefriend/search.png" class="search"/>
        <input  v-model="keyword" placeholder="请输入" />
        <img @click="clearInput" src="../../assets/img/sharefriend/close.png" class="close"/>
      </div>
      <div @click="backRouter()" class="cancle">取消</div>
    </div>
    <div v-if="aaas">
      <div class="flex_sprond contbt"  v-for="(item,index) in datas.data" :key="index">
        <div class="flex_start">
          <!-- <img :src="item.icon" class="heading"/> -->
          <img :src="doImg(item.icon)" class="heading" @click="MIXINToDetailPersonal('51',item.userId,item.niceName,item.icon)"/>
            <div>
              <div class="flex_start">
                <div class="name" v-if="item.notename">{{item.niceName}}（{{ item.notename }}）</div>
                <div class="name" v-else>{{item.niceName}}</div>
                <!-- <img src="../../assets/img/sharefriend/pric1.png" class="roleimg"/> -->
                <img v-show="item.role==1" src="../../assets/img/sharefriend/putong.png" class="roleimg"/>
                <img v-show="item.role==2" src="../../assets/img/sharefriend/VIP@2x.png" class="roleimg"/>
                <img v-show="item.role==3" src="../../assets/img/sharefriend/bojin@2x.png" class="roleimg"/>
                <img v-show="item.role==5" src="../../assets/img/sharefriend/zhuanshi@2x.png" class="roleimg"/>
              </div>
              <div>
                  <!-- <span>订单: {{item.orders?item.orders.orderNums:0}}</span>
                  <span>收益: {{item.orders?item.orders.income:0}}</span> -->
                  <span v-if="datas2[index]">订单: {{datas2[index].orderNums||0}}</span>
                  <span v-if="datas2[index]">收益: {{datas2[index].income?parseFloat(datas2[index].income).toFixed(2): 0}}</span>
              </div>
            </div>
            </div>
        <img src="../../assets/img/sharefriend/pric4.png" class="back" @click="MIXINToDetailPersonal('51',item.userId,item.niceName,item.icon)"/>
      </div>
    </div>
     
    </div>
  </div>
   
  <!-- </div> -->
</template>

<script>
  import topcomom from '@/components/common/Topcomomnew'
  import * as USER_API from '@/api/user'
  import * as USER_score from '@/api/score'
import { Promise } from 'q';
  export default {
    name: "search",
    components: {
			topcomom
		},
    data(){
      return{
        dropSign:true,
        keyword: '',
        user_id: ''||this.$route.query.user_id,
        datas:{
          
        },
        datas2: [],
        aaas: false
    }
    },
    computed:{
     
    },
    watch: {
      keyword(n,o){
        if(n){
          console.log(n,o)
          this.aaas = false;
          this.getData()
        }
        
      },
      user_id(val){
      //  if(val){
      //    this.friendslist();
      //   //  this.friendslist('vip')
      //   //   this.friendslist('plat')
      //   //   this.friendslist('diamond')
      //     this.selectcountBylevel();
      //  }
     }
    },
    created(){
    //  this.user_id = this.$route.query.user_id;
    },
    mounted(){
      // let self = this;
      // window.setUserId = self.setUserId;
      // this.$jsToJava(function(userId) {
      //   console.log(userId)
      //   if(!userId||userId.length<10){

      //   }else{
      //     self.user_id = userId;
      //   }
      // });
    },
    methods:{
      // setUserId(userId){
      //     this.user_id = userId;
      //     console.log('ppppppppppppp',userId);
      //   },
      gobackRouter(){
        this.$router.back(-1);
        // window.history.go(-1);
      },
      doImg(url){
        if(url=='null'||url==""||url.includes('http')==-1){
          return require('../../assets/img/user.png')
        }else{
          return 'http://oss.meibbc.com'+url
        }
      },
      goBack(){
        this.$router.back(-1)
      },
     dropDown(){
       this.dropSign = !this.dropSign
     },
     clearInput(){
       this.keyword = ''
     },
    //  async aaao(){
    //    return new Promise()
    //  },
     getData(){
      //  this.data = ''
      let self = this;
       let params = {
          name: this.keyword,
          pageNum: 1,
          pageSize: 1000,
          role: '',
          userId: '',//94c5785408e6421e9571552374791853 ,d2c41befb4af42e7a2b1565764846517
          // userId: this.user_id
        }
        if(!params.userId){
          params.userId = this.$route.query.user_id;
        }
        USER_score.friendslist(params).then(res=>{
          console.log('----------99999',res)
            if(res&&res.length){
              for(var key in res){
                USER_score.getCounts(self.user_id,res[key].userId).then(res2=>{
                  // res[key].orders = res2.data
                  // self.datas2.push(res2.data)
                  this.$set(this.datas2, key, res2.data);
                })
              }
              // res.forEach(item=>{
              //   USER_score.getCounts(self.user_id,item.userId).then(res2=>{
              //     item.orders = res2.data
              //   })
              // })
              console.log('ppppppppppppppp',res);
              // this.data = '';
              this.$set(this.datas, 'data', res);
              // this.datas.data = res;
              console.log('===========',this.datas)
              this.aaas = true;
            }else{
              this.datas.data = []
              this.aaas = true;
            }
            
        })
     }
    },
  }
</script>

<style  scoped  lang="scss">
@import "../../assets/css/shareFriend/com.scss";
.header{
  text-align: center;
  line-height: 0.8rem /* 50/100 */;
  padding-top: .6rem;
  // background: #000;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  color: #333;
  flex: 0 0 .4rem; /* 40/100 */
  font-size: .36rem /* 36/100 */;
  .icon-back{ 
    position: absolute;
    width: .28rem;
    height: .32rem;
    left: 0.4rem;
    bottom: .3rem;
  }
}
.contIndex{
  margin-top: .6rem;
  padding-top: .4rem;
  height: auto;
  padding: .3rem .3rem .1rem;
  border-bottom: 1px solid #f1f1f1;
  .searchbox{
    width: 6.2rem;
    margin-bottom: 0;
  }
  input{
    border: none;
    width: 4.75rem;
    background-color: #f2f2f2f2;
  }
  .cancle{
    font-size: 0.3rem;
    color: #666;
    margin-top: -0.15rem;
  }
  .close{
    width: 0.58rem;
    height: 0.58rem;
    border-radius: 100%;
  }
}
.heading{
  background: #f1f1f1;
}
 .contIndex .name{
    font-size: .28rem;
  }
  .contIndex .contbt span{
    margin-left: 0;
    margin-right: 0.3rem;
    padding-top: 0.1rem;
  }
</style>

