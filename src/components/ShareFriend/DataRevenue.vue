<template>
  <div>
    <!-- <topcomom>总积分</topcomom> -->
    <Topcomom>总积分</Topcomom>
    <!-- <div class="header"><img @click="backRouter()" src="../../assets/img/mymember/back@2x.png" class="icon-back">总积分</div> -->
    <div class="contIndex">
      <img src="../../assets/img/sharefriend/shouyibg2.png" class="bg"/>
      <div class="cont">
        <div class="flex_end detail">
          <img src="../../assets/img/sharefriend/i.png" class="icon"/>
          <div @click="MixinToUrl('cmi-wallet-detail')" style="color:#BD4332;">明细</div>
        </div>
        <div class="flex_sprond revenue">
          <div>
            <h5>{{scoreData?scoreData.actAalance:0}}</h5>
            <p>总积分</p>
          </div>
          <div>
            <h5>{{orderData?orderData.totalNums:0}}</h5>
            <p>订单数</p>
          </div>
        </div>
      </div>
      <div class="condata flex_start">
          <div @click="pickdata(1)">{{params2.startDate||'请选择'}}</div>
          <img @click="pickdata(1)" src="../../assets/img/sharefriend/pric4_4.png" class="dnicon"/>
          <span>至</span>
          <div @click="pickdata(2)">{{params2.endDate ||'请选择'}}</div>
          <img @click="pickdata(2)" src="../../assets/img/sharefriend/pric4_4.png" class="dnicon"/>
      </div>
        <Echart v-if="series.length" :series="series"></Echart>
        <div style="height: .12rem;background: #f2f2f2;"></div>
        <div class="elast">
          <p>收益</p>
          <div class="bline">
            <img src="../../assets/img/sharefriend/211.png" class="dot"/>
            <span class="elabel">积分</span>
            <span>{{scoreData.actAalanceDate}}</span>
          </div>
          <div class="bline">
            <img src="../../assets/img/sharefriend/00@2x.png" class="dot"/>
            <span class="elabel">订单</span>
            <span>{{orderData.nums}}</span>
          </div>
        </div>
    </div>
    <nut-datepicker 
        :is-visible="isVisible1"
        title="请选择开始时间" 
        type="date"
        startDate="2016-11-10"
        :endDate="defaultValue"
        :defaultValue="defaultValue"
        @close="switchPicker('isVisible1')"
        @choose="setChooseValue1"
    >
    </nut-datepicker>
    <nut-datepicker 
        v-if="params2.startDate&&isVisible2"
        
        title="请选择结束时间" 
        type="date"
        :startDate="params2.startDate"
        :endDate="defaultValue"
        :defaultValue="defaultValue"
        @close="switchPicker('isVisible2')"
        @choose="setChooseValue2"
    >
    </nut-datepicker>
    
  </div>
</template>

<script>
// import topcomom from "@/components/common/Topcomomnew";
import Echart from '@/components/ShareFriend/Echart'
import * as USER_API from "@/api/user";
import * as API_score from '@/api/score'
import Topcomom from '../../components/common/Topcomomnew'
export default {
  name: "DataRevenue",
  components: {
    Topcomom,Echart
  },
  data() {
    return {
      isVisible1: false,
      isVisible2: false,
      // user_id: '94c5785408e6421e9571552374791853',
      user_id: '',//d2c41befb4af42e7a2b1565764846517
      params: {
        start_time: '2016-11-10',
        end_time: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+(new Date().getDate())
      },
      params2: {
        startDate: '',
        endDate: ''
      },
      orderData: '',
      scoreData: '',
      series: [],
      defaultValue: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+(new Date().getDate())
    };
  },
  computed: {},
  watch: {
    user_id(val){
       if(val){
         this.orderAndProfit();
          this.findAccountPaySumMoney();
          this.selectcountBylevel();
       }
     }
  },
  created() {},
  mounted() {
    // if(this.$store.state.userId&&this.$store.state.userId!='(null)'){
    //   this.user_id = this.$store.state.userId
    // }else{
    //   window['setUserId'] = function(userId){
    //     store.commit('changeUserId',userId)
    //   };
    //   window['setToken'] = function(token){
    //     store.commit('changeToken',token)
    //   };
    //   this.MIXINUserId();
    // }
    let self = this;
      window.setUserId = self.setUserId;
      this.$jsToJava(function(userId) {
        console.log(userId)
        if(!userId||userId.length<10){

        }else{
          self.user_id = userId;
          this.orderAndProfit();
          this.findAccountPaySumMoney();
          this.selectcountBylevel();
        }
      });
    
  },
  methods: {
    setUserId(userId){
          this.user_id = userId;
          console.log('ppppppppppppp',userId);
          this.orderAndProfit();
          this.findAccountPaySumMoney();
          this.selectcountBylevel();
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
    gobackRouter(){
      console.log(1111);
      this.$router.back(-1)
      // window.history.go(-1);
    },
    selectcountBylevel(){
      let params = JSON.parse(JSON.stringify(this.params2));
      params.userId = this.user_id;
      if(params.startDate){
        params.startDate += ' 00:00:00';
      }
      if(params.endDate){
        params.endDate += ' 23:59:59';
      }
      
      API_score.selectcountBylevel(params).then(res=>{
        console.log(res)
        var arr = []
        res.forEach(item=>{
          if(item.role == 1){
            arr.push({
              value: parseInt(item.count),
              name: '普通用户',
              count: item.count,
            })
          }else if(item.role == 2){
            arr.push({
              value: parseInt(item.count),
              name: '贵宾用户',
              count: item.count,
            })
          }else if(item.role == 3){
            arr.push({
              value: parseInt(item.count),
              name: '铂金用户',
              count: item.count,
            })
          }else{
            // arr.push({
            //   value: parseInt(item.count),
            //   name: '其他',
            //   count: item.count,
            // })
          }
        })
        this.series = [
              {
                name: "",
                type: "pie",
                color:['#F63B75', '#FF9A49', '#3AAAFF','#FF9A49'],
                radius: ["55%", "70%"],
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                  },
                },
                data: arr
              }
            ]
      })
    },
    findAccountPaySumMoney(){
      let params = {
        userid: this.user_id,
        type: 'income',
        startTime: '',
        endTime: ''
      }
      let self = this;
      API_score.findAccountPaySumMoney(params).then(res=>{
        this.scoreData = res
        console.log(res)
      })
    },
    orderAndProfit(){
      let params = this.params;
      // let params = {}
      let user_id = this.user_id;
      API_score.orderAndProfit(params,user_id).then(res=>{
        this.orderData = res.data;
        console.log(res)
      })
    },
    pickdata(val){
      if(val == 1){
        this.isVisible1 = true
      }else {
        this.isVisible2 = true
      }
    },
    switchPicker(v){
      this[v] = false;
    },
    setChooseValue1(val){
      console.log(val)
      this.params2.startDate = val[3];
      this.selectcountBylevel()
    },
    setChooseValue2(val){
      console.log(val)
      this.params2.endDate = val[3];
      this.selectcountBylevel()
    }
  }
};
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
  z-index: 10000;
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
    z-index: 10000;
  }
}
.contIndex {
  // height: 
  margin-top: 0;
  
  // height: auto;
  box-sizing: border-box;
  padding: 0.3rem 0.3rem;
  padding-top: 70px;
  background: #f2f2f2;
  .cont{
    position: relative;
    z-index: 9;
  }
  .detail{
    color: #666;
    font-size: 0.26rem;
    padding-right: .4rem;
    padding-top: .5rem;
  }
  .bg{
    position: absolute;
    // left: 0;
    left: 0.30rem;
    top: 80px;
    // width: 100%;
    width: 6.9rem;
    height: 2.4rem;
    z-index: 1;
  }
  .icon{
    width: 0.30rem;
    height: 0.30rem;
    margin: 0 0.1rem;
  }
  .revenue{
    width: 50%;
    margin: 0 auto;
    
  }
  .flex_sprond{
    h5{
      // color: #F63B75;
      color: #fff;
      font-size: 0.48rem;
      line-height: 1rem;
      text-align: center;
    }
    p{
      // color: #666;
      color: #fff;
      font-size: 0.24rem;
      text-align: center;
    }
  }
  .condata{
    margin-top: 0.6rem;
    font-size: 0.24rem;
    line-height: 1.0rem;
    padding: 0 1.2rem;
    border-bottom: 0.02rem solid #eee;
    background: #fff;
    justify-content: space-around;
    border-radius: .2rem;
     .dnicon{
      width: 0.24rem;
      height: 0.24rem;
    }
    span{
      color: #666;
      font-size: 0.28rem;
      margin: 0 0.1rem;
    }
  }
  .dot{
      width: 0.36rem;
      height: 0.36rem;
    }
 
}
.elast{
  background: #fff;
  padding: .4rem 0.3rem;
  border-radius: .2rem;
  p{
    font-size: .34rem;
    color: #333;
    font-weight: bold;
    margin-bottom: .3rem;
  }
  .bline{
    line-height: 0.6rem;
    font-size: .28rem;
    img{
      display: inline-block;
      width: .44rem;
      height: .44rem;
      margin-right: .2rem;
    }
    .elabel{
      color: #999;
      padding-right: .2rem;
    }
  }
}
</style>

