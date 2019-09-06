<template>
  <div>
    <header>
      <!-- <div class="header-div">
        <a @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">C米明细</span>
        <i class="icon-tanhao" @click="MixinToUrl('cmi-user-manual')"></i>
      </div> -->
      <topcomom :icon="icon">C米明细</topcomom>
    </header>

    <div :class="sign == true || phoneSignX == true ? 'new-headipx':'new-head'">

      <div :class="sign == true || phoneSignX == true ? 'fixed-headipx':'fixed-head'">
        <div class="banner-modules">
          <h6>我的C米</h6>
          <p><span>{{userList.integral}}</span><img src="../../assets/img/cmi/cmi.png"/></p>
        </div>

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
            <li v-for="(item, index) in alltime" :key="index" :class="activeText == item.label ? 'active' : ''" @click="switchtime(item)">{{item.label}}</li>
          </ul>
        </div>
      </div>

     


      <div v-if="rowList && rowList.length">
        <!-- <div :class="[{'Shadeipx':phoneSignX},'Shade']" class="Shade" v-if="show" @click="show = false"></div> -->
        <ul :class="[{'detail-listipx':phoneSignX},'detail-list']">
          <li v-for="item in rowList">
            <img v-if="item.integralruleid == 28 && (item.icon != null && item.icon != '' && item.icon != 'null')" :src="'https://oss.meibbc.com/'+item.icon"/>
            <img v-else-if="item.integralruleid != 28" :src="'https://oss.meibbc.com/'+item.icon"/>
            <img v-else-if="item.integralruleid == 28 && (item.icon == null || item.icon == '' ||  item.icon == 'null')" src="../../assets/img/user.png"/>
            <!--<i v-if="item.integralruleid == 12" class="icon-4"></i>-->
            <!--<i v-else-if="item.integralruleid == 4" class="icon-5"></i>-->
            <!--<i v-else-if="item.integralruleid == 20" class="icon-6"></i>-->
            <!--<i v-else-if="item.integralruleid == 26" class="icon-7"></i>-->
            <!--<i v-else-if="item.integralruleid == 21" class="icon-8"></i>-->
            <!--<i v-else-if="item.integralruleid == 3" class="icon-9"></i>-->
            <!--<i v-else-if="item.integralruleid == 24" class="icon-10"></i>-->
            <!--<i v-else-if="item.integralruleid == 22" class="icon-10"></i>-->
            <!--<i v-else class="icon-4"></i>-->
            <div class="detail-message">
              <p v-html="item.remarks">购买【商品名称】</p>
              <p v-if="item.integralruleid == 12">确认收货后7天内获得</p>
            </div>
            <div class="cmi-detail">
              <span v-if="item.isvalid == 0">+{{item.integral}}</span>
              <span v-if="item.isvalid == 1">-{{item.integral}}</span>
              <img src="../../assets/img/cmi/cmi.png"/>
              <!--<p>已失效</p>-->
            </div>
            <!--<div class="cmi-detail lose">-->
              <!--<span>+5</span>-->
              <!--<img src="../../assets/img/cmi/cmi.png"/>-->
              <!--<p>已失效</p>-->
            <!--</div>-->
          </li>
          <!--<li class="lose">-->
            <!--<i class="icon-share"></i>-->
            <!--<div class="detail-message">-->
              <!--<p>购买【商品名称】</p>-->
              <!--<p>确认收货后7天内获得</p>-->
            <!--</div>-->
            <!--<div class="cmi-detail">-->
            <!--<span>+5</span>-->
            <!--<img src="../../assets/img/cmi/cmi.png"/>-->
            <!--<p>已失效</p>-->
            <!--</div>-->
          <!--</li>-->
        </ul>
      </div>

      <div class="nothing" v-if="rowList.length==0">
        <!-- <div :class="[{'Shadeipx':phoneSignX},'Shade']" class="Shade" v-if="show" @click="show = false"></div> -->
        <div style="position: relative;z-index: -3;">
          <img src="../../assets/img/invitation/tongyong_wk_bg@2x.png" alt="">
          <p style="text-align:center;color:#999;margin-top:.4rem;">暂无数据</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

  import * as USER_API from "@/api/user"
  import store from "@/store/index"
  import topcomom from '@/components/common/Topcomomnew'
  import {isIPhoneX,phoneSign,} from '@/assets/js/share.js'
  export default {
    name: "detail",
    data(){
      return{
        searchForm:{
          userId:store.state.userId,
          // userId:'fff04119e87d40ef8297bb715649bd86',
          startTime:this.MIXINYearMonthDate(-31),
          endTime:this.MIXINYearMonthDate(0),
          pagesize:200,
          page:1,
          tradeType:'',
        },
        active:31,
        dataList:{},
        rowList:[],
        userList:{},
        isType:false,
        isDate:false,
        activeText:"本月",
        alltime:[
          // {value:0,label:'全部'},
          {value:'7',label:'本周'},
          {value:'31',label:'本月'},
          // {value:93,label:'三月'},
          {value:'183',label:'半年'},
          {value:'365',label:'一年'},
        ],
        allmoney:[
          {label1:'全部'},
          {label1:'支出'},
          {label1:'收入'},
        ],
        show:false,
        aiiIndex:0,
        navActiveNum:0,
        changeCard:'全部',
        icon:{
          type:2,
          query:'cmi-user-manual'
        },
        phoneSignX:false,
        sign:false,
      }
    },
    computed:{
      userId(){
        return store.state.userId;
      },
    },
    components: {
        topcomom
    },
    watch: {
      userId (val) {
        this.searchForm.userId = store.state.userId;
        this.loadCmiDetail();
        this.loadUser();
      },
    },
    mounted(){
      if(this.userId != ""){
        this.loadCmiDetail();
        this.loadUser();
      }
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
    methods:{
      loadUser(){
        let userId = this.searchForm.userId;
        USER_API.findUserByUserid(userId).then(data => {
          this.userList = data;
        });
      },
      changTime(active,text,index){
        if(text){
          this.activeText = text
        }
        
        this.active = active;
        if(active == 0){
          this.searchForm.startTime = "";
          this.searchForm.endTime = "";
        }else{
          if(active){
            this.searchForm.endTime = this.MIXINYearMonthDate(0);
            this.searchForm.startTime = this.MIXINYearMonthDate(-active);
          }
        }
        if(index == 1){
          this.searchForm.tradeType = 1
        }else if(index == 2){
          this.searchForm.tradeType = 2
        }else{
          this.searchForm.tradeType = ''
        }
        this.loadCmiDetail();
      },
      loadCmiDetail(){
        USER_API.findIntegralList(this.searchForm).then(data=>{
          this.dateList = data;
          this.rowList = data.data;
        })
        this.show = false
      },
      // 时间切换
      switchtime(item,index){
        this.changTime(item.value,item.label,index)
        this.month = item.label
        if(item.label1){
          this.changeCard = item.label1
        }
        if(index != undefined){
          this.aiiIndex = index
        }
      },
    },
  }
</script>

<style scoped>
  /* header{background-color: #fc858f} */
  .new-head{top: 1.4rem;height: calc(100vh - 1.4rem);position: absolute;width: 100%;overflow-y: auto;}
  .new-headipx{top: .5rem;height: calc(100vh - 1.4rem);position: absolute;width: 100%;overflow-y: auto;}
  .header-div{background-color: white}
  .header-div .header-title{z-index: 1;font-size: .36rem;}
  /* .banner-modules{width: 6.86rem;height: 1.2rem;background-size: 100% 100%;
    margin: auto;} */
  .banner-modules{width: 7.5rem;height: 1.2rem;background-size: 100% 100%;padding: 0 .24rem;
    margin: auto;}

  .fixed-headipx{position: fixed;background: white;top: .5rem;}
  .fixed-head{position: fixed;background: white;}

  .wanav{font-size: .3rem;color: #999;margin-top: .5rem;background: #f2f2f2;}
  .wanav>div{display: inline-block;}
  /* .wanav div>p{margin-top: -.58rem;margin-left: .34rem;float: left;} */
  .wanav div>p{margin-top: -.63rem;margin-left: .2rem;float: left;height: .46rem;background: white;border-radius: .24rem;text-align: center;padding: 0 .15rem;line-height: .46rem;}
  .wanav div>p i{margin-left: .1rem;}
  .wanav div ul{position: absolute;width: 100%;background: rgba(0, 0, 0, .6);color: #999999;font-size: .28rem;
  margin-top: .08rem;z-index: 1;height: 1000%;}
  /* .wanav div ul li{height: .86rem;line-height: .86rem;border-top: 1px solid #E5E5E5;background: #F8F8F8;padding-left: .34rem;} */
  .wanav div ul li{height: .56rem;line-height: .56rem;background: #f2f2f2;width: 1.6rem;float: left;margin: .3rem 0 0 .2rem;text-align: center;}
  .wanav div ul div{background: white;height: 1.16rem;}
  .wanav div ul li:nth-child(1){border-top: none;}

  /* .wanav div ul li p{display: inline-block;} */
  .wanav div ul li i{float: right;margin: .3rem;}
  .wanav>ul{display: inline-block;width: 75%;}
  /* .wanav>ul li{float: left;width: calc(100% / 4);text-align: center;padding-bottom: .2rem;} */
  .wanav>ul li{float: left;width: calc(79% / 4);text-align: center;height: .46rem;border-radius: .24rem;background: white;margin: .2rem 0 .15rem .2rem;line-height: .46rem;}
  .active {color: #F63B75; position: relative;}
  /* .wanav>ul .active {color: #F63B75; position: relative;} */
  /* .wanav>ul .active::after {content: ""; display: block; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: .58rem; height: .06rem; background: #F63B75; border-radius: .03rem;} */
  .wanav .allmoney{color: #F63B75; background: #FFEDF3;}
  .Shadeipx{position: absolute;height: 100%;width: 100%;background: #333;opacity: .6;margin-top: 4.94rem;}
  /* .Shade{position: absolute;height: 100%;width: 100%;background: #333;opacity: .6;margin-top: 5.6rem;} */
  .Shade{position: absolute;height: 100%;width: 100%;background: #333;opacity: .6;z-index: -2;}


  .detail-nav{height: .8rem;line-height: .8rem;border-bottom: 1px solid #E5E5E5;
    padding:0 .33rem;color: #999999;font-size: .3rem;margin-top: .5rem}
  .detail-nav span{margin-left: .8rem;}
  .detail-nav span:nth-child(1){margin-left: 0;}
  .detail-nav>div{width: 1.65rem;text-align: left;float: left;position: relative}
  .icon-triangle{background: url("../../assets/img/cmi/down.png");background-size: 100% 100%;display: inline-block;width: .26rem;
    height: .14rem;margin-top: .35rem;margin-left: .1rem;}
  .detail-nav>div>ul{position: absolute;border-bottom: 1px solid #E5E5E5;left: -.32rem;z-index: 9;background-color: white}
  .detail-nav>div>ul>li{width: 7.48rem;font-size: .26rem;color: #999999;line-height: .6rem;padding-left: .34rem;background: #F8F8F8;position: relative;}
  .detail-nav>div>ul>li:nth-child(1) p{border-top: none;}
  .detail-nav>div>ul>li p{border-top: 1px solid #E5E5E5;}
  .detail-nav>div>ul>li i{position: absolute;right: .3rem;top: 50%;transform: translateY(-50%);}
  .detail-nav>div:nth-child(2)>ul{left: 0}
  .detail-nav>div>ul>li.active{color: #FC858F}

  .detail-listipx{margin-top: 2.25rem;position: relative;z-index: -3;}
  .detail-list{margin-top: 3rem;position: relative;z-index: -3;}
  .detail-list li{height: 1.68rem;padding: .4rem .32rem;border-bottom: 1px solid #E5E5E5}
  .detail-list li>i{height: .88rem;width: .88rem;float: left}
  .detail-list>li .detail-message{margin-left: .41rem;float: left}
  .detail-list>li .detail-message p:nth-child(1){color: #333333;font-size: .32rem}
  .detail-list>li .detail-message p:nth-child(2){color: #333333;font-size: .26rem;margin-top: .1rem}
  .cmi-detail{float: right;color: #FC858F;font-size: .3rem;font-weight: bold;margin-top: .2rem}
  .cmi-detail img{width: .22rem;height: .22rem;float: right;margin-top: .1rem;margin-left: .1rem}
  .cmi-detail p{color: #CFCFCF;font-size: .26rem;margin-top: .28rem}
  .lose .cmi-detail{color: #999999;margin-top: 0}
  .banner-modules p{font-size: .72rem;color: #333333;font-weight: bold;}
  .banner-modules p img{width: .6rem;display: inline-block;margin-left: .1rem}
  .banner-modules h6{font-size: .26rem;opacity: .6;margin-top: .6rem;}
  li img{width: .88rem;height: .88rem;float: left;border-radius: 50%}


  .nothing{margin-top: 2rem;padding-top: 3rem;}
  .nothing img{width: 50%;margin: 0 auto;}


  .icon-4{background: url("../../assets/img/cmi/icon/4.png");background-size: 100% 100%}
  .icon-5{background: url("../../assets/img/cmi/icon/5.png");background-size: 100% 100%}
  .icon-6{background: url("../../assets/img/cmi/icon/6.png");background-size: 100% 100%}
  .icon-7{background: url("../../assets/img/cmi/icon/7.png");background-size: 100% 100%}
  .icon-8{background: url("../../assets/img/cmi/icon/8.png");background-size: 100% 100%}
  .icon-9{background: url("../../assets/img/cmi/icon/9.png");background-size: 100% 100%}
  .icon-10{background: url("../../assets/img/cmi/icon/10.png");background-size: 100% 100%}
  .icon-tanhao{width: .34rem; height: .34rem; background: url("../../assets/img/newmember/tanhao.png");background-size: 100% 100%;display: inline-block;position: absolute;right: .3rem;top: .24rem;z-index: 2}
  .icon-gou{width: .22rem; height: .15rem; background: url("../../assets/img/cmi/gou.png");background-size: 100% 100%;display: inline-block;}
  .icon-bot {width: .21rem; height: .13rem; background: url('../../assets/img/cmi/bot.png');display: inline-block; background-size: 100% 100%; }
  .icon-top {width: .21rem; height: .13rem; background: url('../../assets/img/cmi/top.png');display: inline-block; background-size: 100% 100%; }


</style>
