<template>
  <div>
   <!-- <topcomom>好友</topcomom> -->
   <!-- <div class="header"><img @click="closeHtml()" src="../../assets/img/mymember/back@2x.png" class="icon-back">好友</div> -->
   <Topcomom :icon="icon">好友</Topcomom>
  <div class="contIndex">
    <div @click="toSearch" class="flex_start searchbox">
      <img src="../../assets/img/sharefriend/search.png" class="search"/>
      <div>搜索</div>
    </div>
    <div class="flex_a">
       <div @click="toInvite" class="flexitem">
        
         <div class="flexbanner1">
            <img src="../../assets/img/sharefriend/a1.png" alt="">
            <div>邀请好友</div>
         </div>
       </div>
       <div @click="toShouyi" class="flexitem">
         <div class="flexbanner2">
            <img src="../../assets/img/sharefriend/a2.png" alt="">
            <div>数据收益</div>
         </div>
         
       </div>
    </div>
    <div class="contCent">
     <!-- <div class="flex_sprond contli" v-for="(item,index) in data" :key='index'>
       <div class="flex_start left">
          <img src="../../assets/img/sharefriend/pric3.png" class="pric3"/>
          <div>{{item.tit}}</div>
       </div>
       <div class="flex_end right">
         <div>{{item.num}}</div>
         <img src="../../assets/img/sharefriend/pric4.png" class="back"/>
       </div>
     </div> -->
     <div>
       <div @click="expendAll" class="flex_sprond contli">
        <div class="flex_start left">
            <!-- <img src="../../assets/img/sharefriend/pric3.png" class="pric3"/> -->
            <div>全部</div>
        </div>
        <div class="flex_end right" >
          <div>{{all.count}}</div>
          <img src="../../assets/img/sharefriend/pric4.png" class="back" v-if="!all.showList"/> 
          <img src="../../assets/img/sharefriend/pric4_4.png" class="back" v-else/> 
        </div>
      </div>
      <div v-show="all.showList" class="flex_sprond contbt" v-for="(item,index) in all.list" :key="index">
        <div class="flex_start">
          <img :src="doImg(item.icon)" class="heading" @click="MIXINToDetailPersonal('51',item.userId,item.niceName,item.icon)"/>
            <div>
              <div class="flex_start">
                <div class="name" v-if="item.notename">{{item.niceName}}（{{ item.notename }}）</div>
                <div class="name" v-else>{{item.niceName}}</div>
                <img v-show="item.role==1" src="../../assets/img/sharefriend/putong.png" class="roleimg"/>
                <img v-show="item.role==2" src="../../assets/img/sharefriend/VIP@2x.png" class="roleimg"/>
                <img v-show="item.role==3" src="../../assets/img/sharefriend/bojin@2x.png" class="roleimg"/>
                <img v-show="item.role==5" src="../../assets/img/sharefriend/zhuanshi@2x.png" class="roleimg"/>
              </div>
              <div>
                <span v-if="item.orders">订单: {{item.orders.orderNums}}</span>
                <span v-if="item.orders">收益: {{parseFloat(item.orders.income).toFixed(2)}}</span>
              </div>
            </div>
            </div>
        <img src="../../assets/img/sharefriend/pric4.png" class="back" @click="MIXINToDetailPersonal('51',item.userId,item.niceName,item.icon)" />
      </div>
      <div v-show="!all.count&&all.showList" class="nothing">
        <div>你还没有任何好友哦，现在 <span @click="toadd" class="add">去添加</span> 吧</div>
      </div>
     </div>
     
     <div v-for="(items,indexs) in friends" :key="indexs">
       <div class="flex_sprond contli" @click="expendOne(items,indexs)">
         <div class="flex_start left">
            <img :src="items.icon" class="pric3"/>
            <div>{{items.rolename}}</div>
        </div>
        <div class="flex_end right">
          <div>{{items.count||0}}</div>
          <img src="../../assets/img/sharefriend/pric4.png" class="back" v-if="!items.showList"/>
          <img src="../../assets/img/sharefriend/pric4_4.png" class="back" v-else/> 
        </div>
       </div>
       <div v-if="items.showList" class="flex_sprond contbt" v-for="(item,index) in items.list" :key="index">
        <div class="flex_start">
          <!-- <img :src="item.icon" class="heading"/> -->
          <img :src="doImg(item.icon)" class="heading" @click="MIXINToDetailPersonal('51',item.userId,item.niceName,item.icon)"/>
            <div>
              <div class="flex_start">
                <div class="name" v-if="item.notename">{{item.niceName}}（{{ item.notename }}）</div>
                <div class="name" v-else>{{item.niceName}}</div>
                <!-- <img src="../../assets/img/sharefriend/pric1.png" class="roleimg"/> -->
                <img v-show="item.role==2" src="../../assets/img/sharefriend/VIP@2x.png" class="roleimg"/>
                <img v-show="item.role==3" src="../../assets/img/sharefriend/bojin@2x.png" class="roleimg"/>
                <img v-show="item.role==5" src="../../assets/img/sharefriend/zhuanshi@2x.png" class="roleimg"/>
              </div>
              <div>
                <span>订单: {{item.orders.orderNums}}</span>
                <span>收益: {{parseFloat(item.orders.income).toFixed(2)}}</span>
              </div>
            </div>
            </div>
            <img src="../../assets/img/sharefriend/pric4.png" class="back" @click="MIXINToDetailPersonal('51',item.userId,item.niceName,item.icon)"/>
      </div>
      <div v-show="!items.count&&items.showList" class="nothing">
        <div>你还没有任何好友哦，现在 <span @click="toadd" class="add">去添加</span> 吧</div>
      </div>
     </div>
     <!-- <div>
       <div class="flex_sprond contli">
        <div class="flex_start left">
            <img src="../../assets/img/sharefriend/bojin@2x.png" class="pric3"/>
            <div>铂金</div>
        </div>
        <div class="flex_end right">
          <div>365</div>
          <img src="../../assets/img/sharefriend/pric4.png" class="back"/>
        </div>
      </div>
      <div class="flex_sprond contbt" v-for="(item,index) in 4" :key="index">
        <div class="flex_start">
          <img src="http://testh5shop.meibbc.com/static/img/tutor1.51868df.png" class="heading"/>
            <div>
              <div class="flex_start">
                <div class="name">天天好丽友</div>
                <img src="../../assets/img/sharefriend/pric1.png" class="roleimg"/>
              </div>
              <div>
                <span>订单:5</span>
                <span>收益:35.5</span>
              </div>
            </div>
            </div>
        <img src="../../assets/img/sharefriend/pric4.png" class="back"/>
      </div>
     </div>

     <div>
       <div class="flex_sprond contli">
        <div class="flex_start left">
            <img src="../../assets/img/sharefriend/zhuanshi@2x.png" class="pric3"/>
            <div>钻石</div>
        </div>
        <div class="flex_end right">
          <div>365</div>
          <img src="../../assets/img/sharefriend/pric4.png" class="back"/>
        </div>
      </div>
      <div class="flex_sprond contbt" v-for="(item,index) in 4" :key="index">
        <div class="flex_start">
          <img src="http://testh5shop.meibbc.com/static/img/tutor1.51868df.png" class="heading"/>
            <div>
              <div class="flex_start">
                <div class="name">天天好丽友</div>
                <img src="../../assets/img/sharefriend/pric1.png" class="roleimg"/>
              </div>
              <div>
                <span>订单:5</span>
                <span>收益:35.5</span>
              </div>
            </div>
            </div>
        <img src="../../assets/img/sharefriend/pric4.png" class="back"/>
      </div>
     </div> -->
     
     
    </div>
  </div>
   
  </div>
</template>

<script>
  // import topcomom from '@/components/common/Topcomomnew'
  import * as USER_API from '@/api/user'
  import * as USER_score from '@/api/score'
  import Topcomom from '@/components/common/Topcomomnew'
  export default {
    name: "shareFriend",
    components: {
      // topcomom,
      Topcomom
		},
    data(){
      return{
        dropSign:true,
        data:[
          
          // {tit:'全部',num:'365',data:[{headimg:'',role:'贵宾',ordernum:'5',money:35.5},{headimg:'',role:'铂金',ordernum:'5',money:35.5}]},
          // {tit:'贵宾',num:'365',data:[{headimg:'',role:'贵宾',ordernum:'5',money:35.5},{headimg:'',role:'铂金',ordernum:'5',money:35.5}]},
          // {tit:'铂金',num:'365',data:[{headimg:'',role:'贵宾',ordernum:'5',money:35.5},{headimg:'',role:'铂金',ordernum:'5',money:35.5}]},
        ],
        friends: {
          vip: {
            rolename: '贵宾',
            icon: require('../../assets/img/sharefriend/VIP@2x.png'),
            count: 0,
            showList: false,
            list: []
          },
          plat: {
            rolename: '铂金',
            icon: require('../../assets/img/sharefriend/bojin@2x.png'),
            count: 0,
            showList: false,
            list: []
          },
          diamond: {
            rolename: '钻石',
            icon: require('../../assets/img/sharefriend/zhuanshi@2x.png'),
            count: 0,
            showList: false,
            list: []
          }
        },
        all: {
          showList: false,
          count: 0,
          list: []
        },
        user_id: '',
        // user_id: 'd2c41befb4af42e7a2b1565764846517',
        icon:{
          back:0
        }
    }
    },
    computed:{
     
    },
    watch: {
     user_id(val){
       if(val){
        //  this.selectcountBylevel();
        //  this.selectcount2();
          
          this.selectcount2();
          this.selectcountBylevel();
        
          this.friendslist();
          this.friendslist('vip')
          this.friendslist('plat')
          this.friendslist('diamond')
          
       }
     }
    },
    created(){
     let self = this;
      window.setUserId = self.setUserId;
      this.$jsToJava(function(userId) {
        console.log(userId)
        if(!userId||userId.length<10){

        }else{
          self.user_id = userId;
          // this.selectcount2();
          // this.selectcountBylevel();
        
          // this.friendslist();
          // this.friendslist('vip')
          // this.friendslist('plat')
          // this.friendslist('diamond')
          
        }
      });
      // this.selectcount2();
      //     this.selectcountBylevel();
        
      //     this.friendslist();
      //     this.friendslist('vip')
      //     this.friendslist('plat')
      //     this.friendslist('diamond')
    },
    mounted(){
      // if(this.$store.state.userId&&this.$store.state.userId!='(null)'){
      //   this.user_id = this.$store.state.userId
      // }else{
      //   window['setUserId'] = function(userId){
      //     store.commit('changeUserId',userId)
      //   };
      //   // window['setToken'] = function(token){
      //   //   store.commit('changeToken',token)
      //   // };
      //   this.MIXINUserId();
      // }
      
      // this.friendslist();
          
      //     this.friendslist('vip')
      //     this.friendslist('plat')
      //     this.friendslist('diamond')
    },
    methods:{
      selectcount2(){
        let params = {
          endDate: '',
          startDate: '',
          userId: this.user_id
        }
        USER_score.selectcount2(params).then(res=>{
          console.log(res);
          this.all.count = res.count;
        })
      },
      setUserId(userId){
          this.user_id = userId;
          console.log('ppppppppppppp',userId);
          // this.selectcount2();
          // this.selectcountBylevel();
          // this.friendslist();
          // this.friendslist('vip')
          // this.friendslist('plat')
          // this.friendslist('diamond')
          
          // alert(userId);
          // if(userId=='(null)'){
          //   // system_details("1", "14");
          //   // setTimeout(()=>{
          //   //   window.close()
          //   // },1000)
          //   // login_page("1","14")
          // }else{
          //   this.areaJoinList(userId);
          // }
          
        },
      doImg(url){
        if(url=='null'||url==""||url.includes('http')==-1){
          return require('../../assets/img/user.png')
        }else{
          return 'http://oss.meibbc.com'+url
        }
      },
      selectcountBylevel(){
        let params = {
          userId: this.user_id
        }
        let self = this;
        USER_score.selectcountBylevel(params).then(res=>{
          console.log('========',res)
          var total = 0;
          res.forEach(item=>{
            if(item.role == 2){
              self.friends.vip.count = item.count;
              total += parseInt(item.count)
            }else if(item.role == 3){
              self.friends.plat.count = item.count;
              total += parseInt(item.count)
            }else if(item.role == 5){
              self.friends.diamond.count = item.count;
              total += parseInt(item.count)
            }
          })
          console.log('self.friends',self.friends);
          // self.all.count = total;
        })
      },
      toadd(){
        this.$router.push({path: '/invitefriends',query:{userId: this.user_id}})
      },
      expendAll(){
        if(this.all.showList){
          this.all.showList = false
        }else{
          this.all.showList = true
          if(!this.all.list.length){
            
            this.friendslist()
          }
        }
      },
      toInvite(){
        this.$router.push({path: '/invitefriends',query:{userId: this.user_id}})
      },
      expendOne(item,index){
        console.log(item,index)
        if(item.showList){
          item.showList = false
        }else{
          item.showList = true;
          console.log(this.friends)
          console.log(item.list);
          if(!item.list.length){
            console.log(index);
            this.friendslist(index)
          }
        }
      },
      friendslist(role){
        var roleval;
        if(role=='vip'){
          roleval = 2
        }else if(role == 'plat'){
          roleval = 3
        }else if(role == 'diamond'){
          roleval = 5
        }
        let params = {
          name: '',
          pageNum: 1,
          pageSize: 500,
          role: roleval,
          userId: this.user_id
        }
        let self = this;
        USER_score.friendslist(params).then(res=>{
          console.log(res)
          if(role){
            res.forEach(item=>{
              USER_score.getCounts(self.user_id,item.userId).then(res2=>{
                item.orders = res2.data
              })
            })
            if(!this.friends[role].list.length){
              this.friends[role].list.push(...res)
            }
            
          }else{
            res.forEach(item=>{
              USER_score.getCounts(self.user_id,item.userId).then(res2=>{
                item.orders = res2.data
              })
            })
            if(!this.all.list.length){
              this.all.list.push(...res)
            }
            
          }
            
        })
      },
      toSearch(){
        this.$router.push({name: 'search',query:{user_id:this.user_id}})
      },
      toShouyi(){
        this.$router.push({path: '/DataRevenue'})
      },
     dropDown(){
       this.dropSign = !this.dropSign
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
    // border: 1px solid #999;
    // border-top-color: transparent;
    // border-right-color: transparent;
    // transform: rotate(45deg);
    left: 0.4rem;
    bottom: .3rem;
  }
}
.contIndex{
  height: auto;
  margin-top: 0;
  padding-top: 80px;
  .pr{
    width: 49%;
  }
  .pric3{
    width: 0.48rem;
    height: 0.48rem;
  }
  .back{
    width: 0.35rem;
    height: 0.35rem;
  }
  
 
  .contCent{
    margin-top: 0.2rem;
    .contli{
      border-bottom: 1px solid #eee;
      padding: 0.2rem 0;
      .left div,.right div{
        font-size: 0.3rem;
      }
      .left div{
        color: #333;
         margin: 0.1rem;
      }
      .right div{
        color: #999;
         margin: 0.01rem;
      }
    }
    
  }
  
}

.flex_a{
  display: flex;
  justify-content: space-between;
  // padding: 0.3rem;
  .flexitem{
    flex: 1;
    margin: 0 0.1rem;
  }
  img{
    width: 0.8rem;
    height: 0.8rem;
    display: inline-block;
    vertical-align: middle;
  }
  .flexbanner1{
    background: url('../../assets/img/sharefriend/b1.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
    display: flex;
    padding: 0.4rem 0.4rem;
    justify-content: space-around;
    color: #fff;
    font-size: .3rem;
    line-height: 0.7rem;
  }
  .flexbanner2{
    background: url('../../assets/img/sharefriend/b2.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
    display: flex;
    padding: 0.4rem 0.4rem;
    justify-content: space-around;
    color: #fff;
    font-size: .3rem;
    line-height: 0.7rem;
  }
}
.flex_sprond{
  transition: all 3s linear;
}
  .nothing{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2.8rem;
    text-align: center;
    font-size: .28rem;
    border-bottom: 1px solid #f1f1f1;
    color: #999999;
    .add{
      color: #449CE0;
    }
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

