<template>
  <div class="body">
    <header>
        <div class="headerback">
            <img src="../../assets/img/wallet/xiantiao@3x.png" alt="">
        </div>
        <div class="header-div">
            <a class="icon-left-a">
              <i class="icon-left" @click="backRouter()" ></i>
            </a>
            <span class="header-titles">我的钱包</span>
            <!-- <a @click="isShare = true" class="icon-right-a">
            <i class="icon-share"></i>
            </a> -->
        </div>
        
        

        <div class="option">
            <ul class="option-nav">
                <li><p :class="switchover == 0 ? 'active' : ''" @click="option('cmi')">我的C米</p></li>
                <li><p :class="switchover == 1 ? 'active' : ''" @click="option('integral')">我的积分</p></li>
            </ul>
            <div class="mycmi"  v-if="switchover == 0">
                <!-- <p>5869</p> -->
                <p v-if="postUserByUserid.integral != 0" v-html="postUserByUserid.integral">0.00</p>
                <p v-if="postUserByUserid.integral == 0">0</p>
                <span>可用C米</span>
                <div class="signcmi" @click="MixinToUrl('cmi-index')">
                    <i class="icon-signcmi"></i>
                    <p>签到领C米</p>
                </div>
                </div>
            <div class="myintegral" v-else>
                <div>
                    <!-- <p class="fz30" v-html="postUserByUserid.actAalance">1,300.12</p> -->
                    <p class="fz30" v-if="postUserByUserid.actAalance != 0" v-html="postUserByUserid.actAalance">0.00</p>
                    <p class="fz30" v-if="postUserByUserid.actAalance == 0">0.00</p>
                    <p>可用积分</p>
                </div>
                <ul class="integral-detail">
                    <li>
                        <!-- <p class="fz23">5,000.12</p> -->
                        <p class="fz23" v-if="postUserByUserid.frozonaalance != 0" v-html="postUserByUserid.frozonaalance">0.00</p>
                        <p class="fz23" v-if="postUserByUserid.frozonaalance == 0">0.00</p>
                        <p>获得积分</p>
                    </li>
                    <li>
                        <!-- <p class="fz23" v-html="postUserByUserid.actAalance + postUserByUserid.frozonaalance">6,300.00</p> -->
                        <p class="fz23" v-if="allalance != 0" v-html="allalance">0.00</p>
                        <p class="fz23" v-if="allalance == 0">0.00</p>
                        <p>总积分</p>
                    </li>
                </ul>
                <div class="signcmi" @click="MIXINToDetail(postUserByUserid.actAalance,'48')">
                    <i class="icon-integral"></i>
                    <p>积分兑换</p>
                </div>
            </div>
        </div>
        <p style="height:.01rem;"></p>
    </header>
    
    <div class="shade" v-if="alltimeShow" @click="timeShow"></div>

    <div class="integral-bottom" v-if="switchover == 1">
        <ul class="integral">
            <li @click="MIXINToDetail('','45')">
                <p>积分明细</p>
                <i class="icon-right"></i>
            </li>
            <li @click="MIXINToDetail('','46')">
                <p>银行卡</p>
                <i class="icon-right"></i>
            </li>
            <li @click="MIXINToDetail('','47')">
                <p>积分领取</p>
                <i class="icon-right"></i>
            </li>
        </ul>

        <!-- <button>积分兑换</button> -->
    </div>
    
    <div class="cmi-bottom" v-else-if="switchover == 0">
        <div class="make">
            <ul class="make-one">
                <li class="make-title">
                    <i class="icon-mark"></i>
                    <p>赚C米</p>
                </li>
                <li @click="MixinToUrl('cmi-invite')">
                    <i class="icon-invite"></i>
                    <p>邀请好友</p>
                </li>
                <li @click="MixinToUrl('cmi-mission')">
                    <i class="icon-gaincmi"></i>
                    <p>每日赚C米</p>
                </li>
                <li @click="MIXINToDetail('','23')">
                    <i class="icon-givecmi"></i>
                    <p>购物送C米</p>
                </li>
            </ul>
            <ul>
                <li class="make-title">
                    <i class="icon-mark"></i>
                    <p>花C米</p>
                </li>
                <li @click="MixinToUrl('cmi-ticket')">
                    <i class="icon-trade"></i>
                    <p>换好礼</p>
                </li>
                <li>
                    <i class="icon-award"></i>
                    <p>抽大奖</p>
                </li>
                <li @click="MIXINToDetail('','18')">
                    <i class="icon-cmimoney"></i>
                    <p>C米当钱用</p>
                </li>
            </ul>
            <p class="clear"></p>
        </div>
        <p style="height:.16rem;background:#f2f2f2;"></p>
        <div class="cmi-title">
            <p>C米明细</p>
            <div class="month" @click="timeShow">
                <span>{{ month }}</span>
                <i :class="alltimeShow == false ? 'icon-oar' : 'icon-oar-against'"></i>
            </div>
            <div class="alltime" v-if="alltimeShow">
                <p :class="{'alltime-color':activeId==index}" v-for="(item,index) in alltime" :key="index" @click="switchtime(item,index)">{{item.label}}</p>
                <!-- <p>全部</p>
                <p>一周</p>
                <p>本月</p>
                <p>三月</p>
                <p>半年</p>
                <p>一年</p> -->
            </div>
        </div>
        <div class="cmi-record">
            <ul>
                <li v-for="item in findIntegralList" :key="item.index">
                    <div>
                        <p v-html="item.remarks">签到奖励</p>
                    </div>
                    <div class="addnum">
                        <p v-html="item.getintegraltime">2019-05-26 10:20:25</p>
                        <p><span v-if="item.isvalid == 0">+</span><span v-else>-</span>{{item.integral}}</p>
                    </div>
                </li>
                <!-- <li>
                    <div>
                        <p>购物奖励</p>
                    </div>
                    <div class="addnum">
                        <p>2019-05-26 10:20:25</p>
                        <p>+256</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>购物消耗</p>
                    </div>
                    <div class="addnum">
                        <p>2019-05-26 10:20:25</p>
                        <p style="color:#48B1E8">+256</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>签到奖励</p>
                    </div>
                    <div class="addnum">
                        <p>2019-05-26 10:20:25</p>
                        <p>+50</p>
                    </div>
                </li> -->
            </ul>
        </div>
    </div>

  </div>
</template>

<script>

  import * as USER_API from '@/api/user'
  import store from "@/store/index"
  import { debug, debuglog } from 'util';

  export default {
    name: "invite",
    data(){
      return{
        // userId:store.state.userId,
        isShare:false,
        switchover:0,
        dataList:{
          shareNum:0,
          isValidNum:0,
          integral:0
        },
        alltime:[
            {value:0,label:'全部'},
            {value:7,label:'一周'},
            {value:15,label:'半月'},
            {value:93,label:'三月'},
            {value:183,label:'半年'},
            {value:365,label:'一年'},
        ],
        month:'全部',
        alltimeShow:false,
        activeId:0,
        // 积分
        postUserByUserid:{
          // 可用积分
          actAalance:0,
          // 冻结积分
          frozonaalance:0,
          // 可用C米
          integral:0
        },
        //C米明细
        findIntegralList:[],
        // C米筛选
        searchForm:{
          userId:store.state.userId,
          startTime:this.MIXINYearMonthDate(-31),
          endTime:this.MIXINYearMonthDate(0),
          pagesize:200,
          page:1,
        },
        // 总积分
        allalance:0,
      }
    },
    mounted(){
      // switchover
      this.getQueryVariable('switchover')
      this.loadCmi();
      this.loadPostUserByUserid()
      // C米明细
    //   this.loadFindIntegralList()
      this.changTime(this.activeId)
    },
    computed:{
      userId(){
        return store.state.userId
      },
      token(){
        return store.state.token
      },
    },
    watch:{
      userId (val) {
        if(val != '' && val != "(null)" ){
          this.loadPostUserByUserid();
          this.loadFindIntegralList();
        }
      },
      token(val){
        if(val != ""){
          this.loadPostUserByUserid();
          this.loadFindIntegralList();
        }
      },
    },
    methods:{
      loadCmi(){
        USER_API.queryCmShare(this.userId).then(data => {
          if(data){
            this.dataList = data;
          }
        })
      },
      shareFun(type,typeNumber){
        let title = "分享赚C米！大家都在玩！";
        let description = "一起分享吧！";
        let imgSrc = "http://app.meibbc.com/BeautifyBreast/app/share-modules/image/draw/share.png";
        let hostUrl ="http://app.meibbc.com/BeautifyBreast/app/registerv2/register.html?userId="+this.userId;
        let activityId = "";
        this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
      },
      // 积分C米切换
      option(val){
        if(val == 'cmi'){
            this.switchover = 0
        }else if(val == 'integral'){
            this.switchover = 1
        }
      },
      // 时间切换
      switchtime(item,index){
        this.changTime(item.value,item.label)
        this.month = item.label
        this.activeId = index
        this.timeShow()
      },
      // 时间显示
      timeShow(){
        if(this.alltimeShow){
            this.alltimeShow = false
        }else{
            this.alltimeShow = true
        }
      },
      // 我的积分
      loadPostUserByUserid(){
        let params = { "token":this.token, "userid":this.userId, };
        // this.loadFindIntegralList()
        USER_API.postUserByUserid(params).then(data => {
          if(data){
            this.postUserByUserid = data;
            this.allalance = data.actAalance + data.frozonaalance
          }
        });
      },
      // C米明细
      loadFindIntegralList(){
        let params = {
          userId:this.userId,
          startTime:this.MIXINYearMonthDate(-31),
          endTime:this.MIXINYearMonthDate(0),
          pagesize:200,
          page:1,
        }
        USER_API.findIntegralList(params).then(data => {
          if(data){
            this.findIntegralList = data.data
          }
        });
      },
      FindIntegralList(){
        USER_API.findIntegralList(this.searchForm).then(data => {
          if(data){
            this.findIntegralList = data.data
          }
        });
      },
      // C米筛选
      changTime(active,text){
        this.activeText = text
        this.active = active
        if(active == 0){
          this.searchForm.userId = this.userId
          this.searchForm.startTime = ""
          this.searchForm.endTime = ""
        }else{
          this.searchForm.userId = this.userId
          this.searchForm.endTime = this.MIXINYearMonthDate(0)
          this.searchForm.startTime = this.MIXINYearMonthDate(-active)
        }
        this.FindIntegralList()
      },
      // 获取url参数
      getQueryVariable(variable){
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i=0;i<vars.length;i++) {
            let part = vars[i].split("=");
            if(part[0] == variable){
              this.switchover = 1
            }
        }
      },
      // 客户端监听积分变化方法
      // changeIntegral(){
      //   this.loadPostUserByUserid()
      // }
    },
  }
</script>

<style scoped>
  .body{background: #f2f2f2;}
  header{background: linear-gradient(#F63B75,#FFEDF3);position: relative;}
  .headerback{height: 2.72rem;width: 100%;position: absolute;top: .43rem;z-index: -1;}
  .header-div{height: .36rem;line-height: .36rem;margin-top: .3rem;}
  .header-div .header-titles{color: white;font-size: .36rem;margin-right: 1.6rem;}
  .icon-share{position: relative;z-index: 9}
  header span{color: black}
  header .icon-left{background: url("../../assets/img/left.png");background-size: 100% 100%;margin-top: 0;width: .18rem;height: .33rem;margin-left: .32rem;}
  .invite-bg{width: 7.3rem;height: 1.8rem;margin: auto}
  .invite-ul{padding-bottom: .47rem;border-bottom: 10px solid #F2F2F2}
  .invite-ul li{float: left;width: calc(100% / 3);text-align: center;margin-top: .46rem}
  .invite-ul li p:nth-child(1){color: #333333;font-size: .36rem}
  .invite-ul li p:nth-child(2){color: #333333;font-size: .26rem;margin-top: .15rem}
  h5{padding: 0 .34rem;color: #333333;font-size: .32rem;margin: .43rem 0}
  .invite-p{color: #333333;font-size: .28rem;padding: 0 .35rem;margin-bottom: .3rem;text-align: justify}
  .icon-share{float: right;width: .35rem;height: .35rem;display: block;background: url("../../assets/img/cmi/share.png");
    background-size: 100% 100%;margin-right: .38rem;margin-top: .2rem}

  /* 选项模块 */
  .option{color: white;margin-top: .7rem;}
  .option-nav{margin-left:1.82rem;font-size: 0.32rem;margin-bottom: .5rem;height: .42rem;}
  .option-nav li:nth-child(1){float: left;}
  .option-nav li:nth-child(2){margin-left: 1.46rem;float: left;}
  .option .mycmi{position: relative;clear: both;text-align: center;font-size: 0.28rem;height: 2.6rem;width: 7.02rem;border-radius: .2rem;background: white;margin-left: .24rem;margin-bottom: .26rem;}
  .option .mycmi>p{font-size: .7rem;color: #F63B75;font-weight: Bold;padding-top: .6rem;}
  .option .mycmi span{font-size: 0.26rem;color: #999999;}
  .option .mycmi button{background: #169bd5;position: absolute;padding: 0.1rem;color: white;border-radius: 5px;right: .5rem}
  .option .signcmi{height: .56rem;width:1.9rem;font-size: .24rem;color: white;background: #F63B75;line-height: .56rem;position: absolute;top: .24rem;right: 0;border-radius: .4rem 0 0 .4rem;}
  .option .signcmi p{display: inline-block;position: absolute;left: .64rem;}
  .option .myintegral{clear: both;text-align: center;padding: 0;font-size: 0.26rem;padding-bottom: 1.8rem;height: 3.34rem;width: 7.02rem;background: white;margin-left: .24rem;margin-bottom: .26rem;border-radius: .2rem;color: #999999;position: relative;}
  .option .myintegral .signcmi{width: 1.68rem;}
  .option .myintegral .signcmi p{right: .18rem;left: .54rem;}
  /* .option .integral-detail{margin-left: .92rem;} */
  .option .integral-detail li{float: left; width: calc(100% / 2);}
  /* .option .integral-detail li:nth-child(1){margin-right: 1.54rem;} */
  /* .option .integral-detail li p:nth-child(1){font-size: 0.46rem;} */

  /* 积分明细 */
  .integral-bottom{background: white;}
  .integral-bottom .integral li{background: white;height: 0.96rem;text-align: left;margin-left: .4rem;margin-right: .24rem;line-height: 0.96rem;font-size: 0.32rem;border-top: .01rem solid #e5e5e5;}
  .integral-bottom .integral li p{display: inline-block}
  .integral-bottom .integral li:nth-child(1){border-top:none;}
  .integral-bottom button{height: 0.8rem;background: #ff81ab;color: white;line-height: 0.8rem;text-align: center;font-size: 0.28rem;border-radius: .1rem;padding: 0 0.8rem;position: absolute;bottom: -5rem;left: 50%;transform: translateX(-50%);}

  /* C米明细 */
  .cmi-bottom{background: white;}
  /* .cmi-bottom .make{margin: .2rem 0} */
  .cmi-bottom .make{padding-bottom: .32rem;}
  .cmi-bottom .make p{margin-top: .1rem;color: #333333;}
  .cmi-bottom .make ul li{float: left;text-align: center;width: calc(90% / 4);margin-top: .32rem;}
  .cmi-bottom .make .make-title{margin-top: .6rem;margin-left: .3rem;font-size: .32rem;}
  .cmi-bottom .make .make-title P{display: inline-block}
  .cmi-bottom .cmi-title{position: relative;;height: 1rem;line-height: 1rem;margin:0 .24rem;border-bottom: .01rem solid #e5e5e5;color: #333333;}
  .cmi-bottom .cmi-title>p{font-size: .34rem;font-weight: bold;}
  .cmi-bottom .cmi-title .month{position: absolute;border-radius: .3rem;border: 1px solid #999999;right: 0;top: .25rem;height: .48rem;line-height: .48rem;font-size: .26rem;color: #999999;padding-right: .4rem;padding-left: .24rem;}
  .cmi-bottom .cmi-title .alltime{z-index: 1000;width: 1.18rem;border: 0.01rem solid #999999;border-radius: .24rem;text-align: center;color: #999999;position: absolute;top: .78rem;right:0;background: white;padding-bottom: .38rem;}
  .cmi-bottom .cmi-title .alltime p{height: .42rem;}
  .cmi-bottom .cmi-title .alltime p:nth-child(1){margin-top: -.2rem;}
  .cmi-bottom .cmi-record{position: relative;}
  .cmi-bottom .cmi-record .addnum{float: right;text-align: right;}
  .cmi-bottom .addnum p{height: .18rem;margin-bottom: .2rem;}
  .cmi-bottom .addnum p:nth-child(1){margin-top: -.2rem;}
  .cmi-bottom .addnum p:nth-child(2){font-size: .32rem;color: #F63B75;font-weight: bold;}
  .cmi-bottom .addnum .change{color: #48B1E8;}
  .cmi-bottom .cmi-record div:nth-child(1){display: inline-block;font-size: .28rem;color: #333333;}
  .cmi-bottom .cmi-record ul{margin-left: .3rem;}
  .cmi-bottom .cmi-record ul li{height: 1.08rem;color: #999999;line-height: 1.08rem;border-bottom: .01rem solid #e5e5e5;margin-right: .24rem;}

    /* 公共样式 */
  .fz30{font-size: 0.60rem;color: #F63B75;font-weight: bold;padding-top: .8rem;}
  .fz23{font-size: 0.46rem;color: #F63B75;}
  .alltime-color{color: #F63B75;}
  .clear{clear: both;}
  .shade{height: 100%;width: 100%;position: fixed;top: 0;z-index: 999;opacity: 0;}
  .icon-right{background: url("../../assets/img/wallet/-s-jiantou_qb_icon@3x.png");background-size: 100% 100%;margin-top: .37rem;width: .12rem;height: .22rem;margin-right: .18rem;float: right;}
  .icon-signcmi{ width: .32rem; height: .32rem; background: url("../../assets/img/wallet/qiandao_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;position: absolute;left: .2rem;top: .12rem; }
  .icon-integral{ width: .38rem; height: .38rem; background: url("../../assets/img/wallet/-s-jifenduihuan_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;position: absolute;left: .1rem;top: .08rem; }
  .icon-mark{ width: .18rem; height: .18rem; background: url("../../assets/img/wallet/0_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-invite{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/yqhy@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-gaincmi{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/mrzcm_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-givecmi{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/gwscm_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-trade{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/hhl_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-award{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/cdj_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-cmimoney{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/cmdqy_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-oar{ width: .14rem; height: .08rem; background: url("../../assets/img/wallet/xialajiantou_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;position: absolute;right: .2rem;top: .2rem; }
  .icon-oar-against{ width: .14rem; height: .08rem; background: url("../../assets/img/wallet/xialajiantou_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;position: absolute;right: .2rem;top: .2rem;transform: rotateX(180deg) }
 
  .active{border-bottom: .06rem solid #910530;padding-bottom: .08rem;color: #910530}

</style>
