<template>
  <div>
    <div class="bbg"></div>
    <div class="uphead">
      <i class="icon-back back" @click="backRouter()"></i>
      <p>会员中心</p>
    </div>
    
    <div class="upmain">
      <!-- <div class="top">
        <div> </div>
        <div class="user">
          <div>
            <img v-if="userMsg.icon" :src="'https://oss.meibbc.com/'+userMsg.icon" alt="">
            <img v-else src="../../assets/img/mymember/touxiang-icon@2x.png" alt="">
          </div>
          <p class="dearie">亲爱的 {{ userMsg.niceName }}</p>
          <span>您当前为</span>
          <i></i>


          <p class="member">[<i :class="userMsg.role == 1 ? 'icon-grade00':(userMsg.role == 2 ? 'icon-grade01':(userMsg.role == 3 || userMsg.role == 4 && userMsg.director != 1 && userMsg.managerRole != 1 ? 'icon-grade02':(userMsg.role == 5 || userMsg.role == 6 && userMsg.director != 1 && userMsg.managerRole != 1 ? 'icon-grade03':(userMsg.director == 1 ? 'icon-grade0CBD':(userMsg.managerRole == 1 ? 'icon-grade0CM':'')))))"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ userMsg.role == 1 ? '普通会员':(userMsg.role == 2 ? '贵宾会员':(userMsg.role == 3 || userMsg.role == 4 && userMsg.director != 1 && userMsg.managerRole != 1 ? '铂金会员':(userMsg.role == 5 || userMsg.role == 6 && userMsg.director != 1 && userMsg.managerRole != 1 ? '钻石会员':(userMsg.director == 1 ? '商务总监':(userMsg.managerRole == 1 ? '城市经理':''))))) }} ]</p>
          
          
          <p class="member">[<i :class="userMsg.role == 1 ? 'icon-grade00':(userMsg.role == 2 ? 'icon-grade01':(userMsg.role == 3 || userMsg.role == 4 ? 'icon-grade02':(userMsg.role == 5 || userMsg.role == 6 ? 'icon-grade03':'')))"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ userMsg.role == 1 ? '普通会员':(userMsg.role == 2 ? '贵宾会员':(userMsg.role == 3 || userMsg.role == 4 ? '铂金会员':(userMsg.role == 5 || userMsg.role == 6 ? '钻石会员':''))) }} ]</p>
        </div>
        <div class="upgrade">
          <ul>
            <li v-if="userMsg.role == 1" class="icon-kuang1">
              <img src="../../assets/img/mymember/grade01.png" alt="">
              <span>购物满298元</span>
              <p>升级为贵宾会员</p>
              <div><a href="#guibing">立即升级</a></div>
            </li>
            <li class="icon-kuang1" v-if="userMsg.role == 1 || userMsg.role == 2">
              <img src="../../assets/img/mymember/grade02.png" alt="">
              <span>购物满2980元</span>
              <p>升级为铂金会员</p>
              <div><a href="#bojin">立即升级</a></div>
            </li>
            <li class="icon-kuang1" v-if="userMsg.role == 2">
              <img src="../../assets/img/mymember/grade03.png" alt="">
              <p>升级为钻石会员</p>
              <div class="btnup" @click="onUpgrade('钻石')">立即升级</div>
            </li>
            <li class="icon-kuang2" style="margin-left: 1.2rem;" v-if="userMsg.role == 3">
              <img src="../../assets/img/mymember/grade03.png" alt="">
              <p>升级为钻石会员</p>
              <div class="btnup" @click="onUpgrade('钻石')">立即升级</div>
            </li>



            <li class="icon-kuang1" v-if="userMsg.role == 3 || userMsg.role == 5 && userMsg.managerRole != 1 && userMsg.director != 1 && record == 4">
              <img src="../../assets/img/mymember/gradeCBD.png" alt="">
              <p>升级为商务总监</p>
              <div class="btnup" @click="onUpgrade('总监')">立即升级</div>
            </li>
            <li class="icon-kuang2" style="margin-left: 1.2rem;" v-if="userMsg.role == 4 || userMsg.role == 6 && userMsg.managerRole != 1 && record == 4">
              <img src="../../assets/img/mymember/gradeCM.png" alt="">
              <p>升级为城市经理</p>
              <div class="btnup" @click="onUpgrade('经理')">立即升级</div>
            </li>
            <li class="icon-kuang3" style="margin-left: 1.2rem;" v-if="userMsg.role == 4 || userMsg.role == 6 && userMsg.managerRole != 1 && record != 4">
              <img src="../../assets/img/mymember/gradeCM.png" alt="">
              <p v-if="refuse" v-html="refuse">城市经理 申请中...</p>
            </li>



          </ul>
          <p style="clear:both;"></p>
        </div>

        
      </div> -->

      <!-- <div class="equity">
          <i class="icon-fangkuai"></i>
          <h1>更多权益 更多精彩</h1>
          <i class="icon-fangkuai"></i>
          <div class="swipe">
            <ul class="grade">
              <li @click="onMember('普通')">
                <i :class="member == 0 ? 'icon-grade000':'icon-grade0'"></i>
                <p :class="member == 0 ? 'memberActive2':'memberActive1'">普通会员</p>
              </li>
              <li @click="onMember('贵宾')">
                <i :class="member == 1 ? 'icon-grade001':'icon-grade1'"></i>
                <p :class="member == 1 ? 'memberActive2':'memberActive1'">贵宾会员</p>
              </li>
              <li @click="onMember('铂金')">
                <i :class="member == 2 ? 'icon-grade002':'icon-grade2'"></i>
                <p :class="member == 2 ? 'memberActive2':'memberActive1'">铂金会员</p>
              </li>
              <li @click="onMember('钻石')">
                <i :class="member == 3 ? 'icon-grade003':'icon-grade3'"></i>
                <p :class="member == 3 ? 'memberActive2':'memberActive1'">钻石会员</p>
              </li>
              <li @click="onMember('总监')">
                <i :class="member == 4 ? 'icon-gradeCBD01':'icon-gradeCBD1'"></i>
                <p :class="member == 4 ? 'memberActive2':'memberActive1'">商务总监</p>
              </li>
              <li @click="onMember('经理')">
                <i :class="member == 5 ? 'icon-gradeCM01':'icon-gradeCM1'"></i>
                <p :class="member == 5 ? 'memberActive2':'memberActive1'">城市经理</p>
              </li>
            </ul>
          </div>
          <div class="jurisdiction">
            <h2>{{ member == 1 ? '贵宾会员权益':(member == 2 ? '铂金会员权益':(member == 3 ? '钻石会员权益':(member == 4 ? '商务总监权益':(member == 5 ? '城市经理权益':'')))) }}</h2>
            <div class="xize">
              <i class="icon-tanhao1"></i>
              <p>权益细则</p>
            </div>
            <ul>
              <li>
                <i class="icon-shengqian"></i>
                <p>自购省钱</p>
              </li>
              <li>
                <i class="icon-zhuanqian"></i>
                <p>分享得收益</p>
              </li>
              <li>
                <i class="icon-yaoqing"></i>
                <p>邀请奖励</p>
              </li>
              <li>
                <i class="icon-cmi"></i>
                <p>奖励C米</p>
              </li>
              <li v-if="member != 0">
                <i class="icon-gouwu"></i>
                <p>专属购物节</p>
              </li>
              <li v-if="member != 0">
                <i class="icon-libao"></i>
                <p>专属推广礼包</p>
              </li>
              <li v-if="member != 0">
                <i class="icon-kefu"></i>
                <p>专属金牌客服</p>
              </li>
              <li v-if="member != 0 && member != 1 && member != 2">
                <i class="icon-shalong"></i>
                <p>定制沙龙体验</p>
              </li>
              <li v-if="member == 4 || member == 5">
                <i class="icon-zhaoshang"></i>
                <p>招商补贴</p>
              </li>
              <li v-if="member == 5">
                <i class="icon-quyu"></i>
                <p>区域补贴</p>
              </li>
            </ul>
            <div style="clear:both;"></div>
          </div>
        </div> -->

      <div class="bot">
        <div v-if="onChangeGrade == '贵宾' && goodsListvip">
          <i class="icon-fangkuai"></i>
          <h1 id="guibing">贵宾升级大礼包</h1>
          <i class="icon-fangkuai"></i>
          <ul>
              <li v-for="(item,index) in goodsListvip">
                  <div>
                    <img :src="item.thumbnail" alt="">
                  </div>
                  <p v-html="item.name">小文胸薄款日系小胸运动少女无钢圈内衣薄款日系</p>
                  <span class="money">￥<span class="price" v-html="item.vip_price">189</span></span>
                  <div class="btn" @click="MIXINToDetailShops(item.goods_id,'0','5')">立即购买</div>
              </li>
          </ul>
        </div>
        <p style="clear:both;"></p>  

        <!-- userMsg.role == 1 || -->
        <div v-if="onChangeGrade == '贵宾' || onChangeGrade == '铂金' && goodsListbojin"> 
          <i class="icon-fangkuai"></i>
          <h1 id="bojin">铂金升级大礼包</h1>
          <i class="icon-fangkuai"></i>
          <ul>
              <li v-for="(item,index) in goodsListbojin">
                  <div>
                    <img :src="item.thumbnail" alt="">
                  </div>
                  <p v-html="item.name">小文胸薄款日系小胸运动少女无钢圈内衣薄款日系</p>
                  <span class="money">￥<span class="price" v-html="item.vip_price">189</span></span>
                  <div class="btn" @click="MIXINToDetailShops(item.goods_id,'0','5')">立即购买</div>
              </li>
          </ul>
        </div>
        <p style="clear:both;margin-bottom: .64rem;"></p>  
      </div>

      <!-- <div class="answer">
        <div v-if="userMsg.managerRole != 1 && userMsg.director != 1 && (userMsg.role == 3 || userMsg.role == 4)">
          <p>如何成为钻石会员？</p>
          <span>升级条件：有效期内累计消费新增800元保级条件：升级后一年内新增积分（不含保级积分）累计达到500积分会员有效期自动顺延1年降级条件：升级后一年内新增累计低于500积分降为普通会员。</span>
        </div>
        <div v-if="userMsg.managerRole != 1 && userMsg.director != 1 && (userMsg.role == 3 || userMsg.role == 4)">
          <p>如何成为商务总监？</p>
          <span>升级条件：有效期内累计消费新增800元保级条件：升级后一年内新增积分（不含保级积分）累计达到500积分会员有效期自动顺延1年降级条件：升级后一年内新增累计低于500积分降为普通会员。</span>
        </div>
        <div  v-if="userMsg.managerRole != 1 && userMsg.director != 1 && (userMsg.role == 5 || userMsg.role == 6)">
          <p>如何成为城市经理？</p>
          <span>升级条件：有效期内累计消费新增800元保级条件：升级后一年内新增积分（不含保级积分）累计达到500积分会员有效期自动顺延1年降级条件：升级后一年内新增累计低于500积分降为普通会员。</span>
        </div>
      </div> -->

      <!-- 弹窗 -->
      <div class="dialog" v-if="show">
        <div class="cpm">
          <p v-if="inform == 1 && record == 4 && queData == ''">你的申请已提交，请等待审核。</p>
          <p v-if="inform == 1 && record == 4 && queData">{{ queData }}</p>
          <p v-if="upgrade == '钻石' && inform == 0 && record == 4">是否现在邀请好友，开启升级之旅？</p>
          <p v-if="upgrade == '总监' && inform == 0 && record == 4">升级之前你可以阅览商务总监的相关要求和权益，是否现在就开始升级为商务总监？</p>
          <p v-if="upgrade == '经理' && inform == 0 && record == 4">升级之前你可以阅览城市经理的相关要求和权益，是否现在就开始升级为城市经理？</p>
          <p v-if="record != 4">{{ refuse }}</p>
          <ul>
            <li v-if="inform == 0 && record == 4" @click="show = false">我再想想</li>
            <!-- <li v-if="inform == 0 && record == 4" @click="upGrade(upgrade)">好的</li> -->
            <li v-if="inform == 0 && record == 4" @click="MixinToUrl('invitefriends')">好的</li>
            <div v-if="inform == 1 || record != 4" class="ans" @click="show = false">好的，我知道了</div>
          </ul>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import HaowuList from './HaowuList'
import store from '@/store'
import * as USER_API from '@/api/user'
import * as UPGRADE_API from '@/api/upgrade'
export default {
  data() {
    return {
      userMsg: {},
      userId: '',
      // userId: store.state.userId,
      id:0,
      // userId: 'fd663cf83fcb4faba881547271188515',
      goodsListvip: [],
      goodsListbojin: [],
      isShowHaoWu: true,
      params: {
        page_no: 1,
        page_size: 5
      },
      show:false,
      grade:'',
      page_no: 1,
      page_size: 6,
      isMoreGood: false,
      isLoading: false,
      member:0,
      upgrade:'',
      record:4,
      refuse:'',
      inform:0,
      queData:'',
      onChangeGrade:this.$route.query
      // userMsg:{},
    }
  },
  components: {
    HaowuList
  },
  created() {
    
    
  },
  mounted() {
    if(store.state.userId){
      this.userId = store.state.userId
    }else{
      this.userId = this.$route.query.userId
    }
    this.initUserMsg()
    this.loadGetRoleAdd()
    this.initGoodsListvip()
    this.initGoodsListbojin()
    // window.addEventListener("scroll", this.loadGoodsList);
  },
  methods: {
    loadGoodsList(){
      var wScrollY = window.scrollY; // 当前滚动条位置 
      var wInnerH = window.innerHeight; // 设备窗口的高度（不会变） 
      var bScrollH = document.body.scrollHeight; // 滚动条总高度 
      if (wScrollY + wInnerH >= bScrollH) { 
          this.handlerScroll()
      }
    },
    loadUser(){
        USER_API.findUserByUserid(this.userId).then(data => {
            this.userList = data;
            this.grade = data.role
            if(data.role == 3 || data.role == 4){
              this.member = 2
            }else if(data.role == 5 || data.role == 6){
              this.member = 3
            }else{
              this.member = data.role - 1
            }
            if(data.director == 1){
              this.member == 4
            }
            if(data.managerRole == 1){
              this.member == 5
            }
            this.initUserMsg()
            // this.initGoodsList()
        });
        
    },
    initUserMsg() {
      USER_API.findUserByUserid(this.userId).then((res) => {
        this.userMsg = res
        if(res.role == 3 || res.role == 4){
          this.member = 2
        }else if(res.role == 5 || res.role == 6){
          this.member = 3
        }else{
          this.member = res.role - 1
        }
        if(res.director == 1){
          this.member == 4
        }
        if(res.managerRole == 1){
          this.member == 5
        }
        // if(res.role == 1){
        //   this.initGoodsListvip()
        //   window.addEventListener("scroll", this.loadGoodsList);
        // }
        // this.initGoodsListvip()
        // if(res.role == 2){
        //   this.initGoodsListbojin()
        //   window.addEventListener("scroll", this.loadGoodsList);
        // }
      })
    },
    // 贵宾商品
    initGoodsListvip() {
      // debugger
      let params = {
        page_no:this.page_no,
        page_size:this.page_size,
        upgrade: 1,
        cmi_shop: 0,
        shoppe:'vip',
      }
      // debugger
      UPGRADE_API.getGoodsList(params).then((res) => {
        if (res.data) {
            this.isLoading = false;
            if (res.data.length < this.page_size) {
                this.isMoreGood = true;
            }
            this.goodsListvip = [
                ...this.goodsListvip,
                ...res.data
            ]
        }
      })
    },
    // 铂金商品
    initGoodsListbojin() {
      let params = {
        page_no:this.page_no,
        page_size:this.page_size,
        upgrade: 1,
        cmi_shop: 0,
        shoppe:'platinum',
      }
      UPGRADE_API.getGoodsList(params).then((res) => {
        if (res.data) {
            this.isLoading = false;
            if (res.data.length < this.page_size) {
                this.isMoreGood = true;
            }
            this.goodsListbojin = [
                ...this.goodsListbojin,
                ...res.data
            ]
        }
      })
    },
    handlerScrollHight(scrollH){
        if (scrollH > 200) {
            this.toppingSign = true
        }else{
            this.toppingSign = false
        }
    },

    handlerScroll() {
        let self = this;
        this.page_no++;
        if (!self.isLoading && self.page_no != 1 && !self.isMoreGood) {
            if(this.userMsg.role == 1){
              this.initGoodsListvip()
            }else if(this.userMsg.role == 2){
              this.initGoodsListbojin()
            }
        }
    },

    onMember(val){
      if(val == '普通'){
        this.member = 0
      }else if(val == '贵宾'){
        this.member = 1
      }else if(val == '铂金'){
        this.member = 2
      }else if(val == '钻石'){
        this.member = 3
      }else if(val == '总监'){
        this.member = 4
      }else if(val == '经理'){
        this.member = 5
      }
    },
    onUpgrade(val){
      this.show = true
      this.upgrade = val
    },
    upGrade(val){
      if(val == '钻石'){
        this.MixinToUrl('invitefriends')
      }else if(val == '总监'){
        if(this.record == 4){
          this.postroleadd('1')
        }
      }else if(val == '经理'){
        if(this.record == 4){
          this.postroleadd('2')
        }
      }
    },
    loadGetRoleAdd(){
      UPGRADE_API.getRoleAdd().then(res => {
        if(res.data.data[0]){
          this.record = res.data.data[0].audit_status
          this.refuse = res.data.data[0].reply_explain
        }else{
          this.record = 4
        }
      })
    },
    postroleadd(num){
      let params = {apply_role:num}
      UPGRADE_API.postRoleAdd(params).then(res => {
        // this.queData = error.response.data.message
        // console.log(this.queData)
        // debugger
      }).catch(error => {
        this.queData = error.response.data.message
      })
      this.inform = 1
    }
  }
}
</script>

<style scoped>
.uphead{text-align: center;font-size: .36rem;border-bottom: 1px solid #333333;background: #333333;position: relative;z-index: 100;}
.uphead .back{float: left;margin-top: .68rem;margin-left: .3rem;}
.uphead p{display: inline-block;color: white;margin-top: .56rem;margin-bottom: .2rem;margin-left: -.3rem;}

.upmain{background:#120A02;}
.upmain .top{background: url('../../assets/img/newupgrade/hyxsj_bg@2x.png');background-size: 100% 100%;}
.upmain .user{padding-top: 4.88rem;text-align: center;}
.upmain .user img{border-radius: 50%;height: 1.35rem;width: 1.35rem;}
.upmain .user>div{height: 1.5rem;width: 1.5rem;border-radius: 50%;border: .08rem solid #FFE9AF;;margin-left: 50%;transform: translate(-50%); }
.upmain .user .dearie{font-size: .3rem;color: #FFE9AF;margin-bottom: .1rem;}
.upmain .user span{font-size: .24rem;color: #FFE9AF;}
.upmain .user .member{font-size: .24rem;color: white;margin-top: .2rem;position: relative;}
.upmain .member i{position: absolute;left: 3.05rem;top: -.05rem;}
.upmain .upgrade{margin: .7rem 0 .6rem .4rem;}
.upmain .upgrade li{text-align: center;float: left;margin-right: .3rem; }
.upmain .upgrade li:nth-child(2){margin-right: 0; }
.upmain .upgrade img{height: 1.11rem;width: 1.11rem;margin-top: .4rem;margin-left: 50%;transform: translate(-50%);margin-bottom: .34rem;}
.upmain .upgrade span{color: #FFE9AF;}
.upmain .upgrade p{color: white;font-size: .28rem;margin: .11rem 0 .15rem 0;}
.upmain .upgrade div{width: 2.1rem;height: .56rem;border-radius: .28rem;background:linear-gradient(to right, #AF9452, #DCBF79);color: #6E4421;font-size: .28rem;line-height: .56rem;margin-left: 50%;transform: translate(-50%);}
.upmain .upgrade .btnup{margin-top: .6rem;}
.upmain .equity{clear: both;text-align: center;padding-top: .6rem;}
.upmain .equity .swipe{width:100%; overflow: hidden; overflow-x: auto;}
.upmain .equity .swipe::-webkit-scrollbar {display:none}
h1{font-size: .36rem;color: #FFE9AF;display: inline-block;margin: 0 .24rem .5rem .24rem;}
.upmain .grade{width: 12rem;}
.upmain .grade li{float: left;width: 16%;overflow: hidden;}
.upmain .grade p{font-size: .28rem;}
.jurisdiction{clear: both;width: 6.7rem;margin-left: .4rem;margin-top: .33rem;position: relative;background:linear-gradient(to right, #AF9452, #DCBF79);border-radius: .1rem; }
/* .jurisdiction h2{font-size: .28rem;color: #EBAF80;margin: .32rem 0;font-weight: bold;} */
.jurisdiction .xize{position: absolute;right: 0;top: 0;color: white;background: #B19D61;height: .4rem;width: 1.36rem;
border-radius: 0 .1rem 0 .4rem;}
.jurisdiction .xize i{margin-left: .12rem;}
.jurisdiction .xize p{transform: scale(.75);display: inline-block;margin-left: -.12rem;}
.jurisdiction ul{padding-top: .78rem;}
.jurisdiction li{width: calc(100% / 4);float: left;}
.jurisdiction li p{color: #120A02;margin: .2rem 0;}

.bot{text-align: center;}
.bot h1{margin: .6rem .24rem .4rem .24rem;}
.bot li{border: 1px solid #F3F1EE;border-radius: .1rem;width: 2.36rem;float: left;margin-left: .1rem;margin-top:.1rem;text-align: left;background: white;}
.bot li img{width: 100%;height: 100%;}
.bot li div{width: 2.08rem;height: 2.08rem;margin: .11rem}
.bot li p{width: 1.9rem;font-size: .22rem;color: #763E0C;line-height: .36rem;margin: .12rem .5rem .12rem .15rem;height: .72rem;
text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;line-clamp: 2;-webkit-box-orient: vertical;}
.bot .money{font-size: .2rem;color: #FF2F5D;margin-left: .16rem;}
.bot .price{font-size: .3rem;font-weight: bold;}
.bot .btn{width: 2rem;height: .46rem;text-align: center;line-height: .46rem;background: #120A02;border-radius: .23rem;color: white;font-size: .22rem;margin-top: .2rem;margin-bottom: .15rem;margin-left: 50%;transform: translate(-50%);}

.answer{padding: 0 .4rem .6rem .4rem;}
.answer p{font-size: .3rem;color: #EBAF80;margin: .7rem 0 .32rem 0;}
.answer span{font-size: .26rem;color: #A55C1B;}

.dialog{background: rgba(0, 0, 0, 0.3);position: fixed;top: 0;left: 0;right: 0;bottom: 0;text-align: center;}
.dialog .cpm{width: 6rem;height: 3.88rem;border: 0.08rem solid #9A6E3A;background: #F8EAD2;margin-top:4.5rem;margin-left: 50%;transform: translate(-50%);border-radius: .2rem;}
.dialog .cpm p{font-size: .28rem;color:#A55C1B;width: 4.5rem;margin-left: 50%;transform: translate(-50%);margin-top: 1rem;margin-bottom: .5rem;}
.dialog .cpm li{width: 2.22rem;height: .72rem;border-radius: .36rem;float: left;border: .02rem solid #9A6E3A;text-align: center;line-height: .72rem;font-size: .32rem;color: #9A6E3A;}
.dialog .cpm li:nth-child(1){margin-left: .6rem;margin-right: .26rem;}
.dialog .cpm li:nth-child(2){background: linear-gradient(to right, #996E3A, #734823);color: #FFD387;}
.dialog .cpm .ans{width: 3rem;background: linear-gradient(to right, #996E3A, #734823);color: #FFD387;margin-left: 50%;transform: translate(-50%);height: .72rem;
line-height: .72rem;font-size: .32rem;border-radius: .36rem;}

.memberActive1{color: #89847E;margin-top: .21rem;}
.memberActive2{color: #FFE9AF;margin-top: 0}



.icon-back{width: .16rem; height: .26rem; background: url("../../assets/img/mymember/back@2x.png");background-size: 100% 100%;display: inline-block}
.icon-grade00{width: .38rem; height: .38rem; background: url("../../assets/img/mymember/grade00.png");background-size: 100% 100%;display: inline-block}
.icon-grade01{width: .38rem; height: .38rem; background: url("../../assets/img/mymember/grade01.png");background-size: 100% 100%;display: inline-block}
.icon-grade02{width: .38rem; height: .38rem; background: url("../../assets/img/mymember/grade02.png");background-size: 100% 100%;display: inline-block}
.icon-grade03{width: .38rem; height: .38rem; background: url("../../assets/img/mymember/grade03.png");background-size: 100% 100%;display: inline-block}
.icon-grade0CBD{width: .38rem; height: .38rem; background: url("../../assets/img/mymember/gradeCBD.png");background-size: 100% 100%;display: inline-block}
.icon-grade0CM{width: .38rem; height: .38rem; background: url("../../assets/img/mymember/gradeCM.png");background-size: 100% 100%;display: inline-block}

.icon-gouwu{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/zhuanshugouwu_icon_pre@3x.png");background-size: 100% 100%;display: inline-block}
.icon-libao{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/zhuanshuruiguang_icon_pre@3x.png");background-size: 100% 100%;display: inline-block}
.icon-kefu{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/jinpaikefu_icon_pre@3x.png");background-size: 100% 100%;display: inline-block}
.icon-zhuanqian{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/fenxiangzhuanqian_icon_pre@3x.png");background-size: 100% 100%;display: inline-block}
.icon-yaoqing{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/yangqingjiangli_icon_pre@3x.png");background-size: 100% 100%;display: inline-block}
.icon-cmi{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/jiangliCmi_icon_pre@3x.png");background-size: 100% 100%;display: inline-block}
.icon-quyu{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/quyubutie_icon_pre@3x.png");background-size: 100% 100%;display: inline-block}
.icon-shaoshang{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/zhaoshangtiyan_icon_pre@3x.png");background-size: 100% 100%;display: inline-block}
.icon-shalong{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/shalongtiyan_icon_pre@3x.png");background-size: 100% 100%;display: inline-block}
/* .icon-shangwu{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/shagnwuzognjian@3x.png");background-size: 100% 100%;display: inline-block} */
.icon-zhaoshang{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/zhaoshangtiyan_icon_pre@3x.png");background-size: 100% 100%;display: inline-block}
.icon-shengqian{width: .8rem; height: .8rem; background: url("../../assets/img/newupgrade/shengqian.png");background-size: 100% 100%;display: inline-block}
.icon-grade0{width: 1.08rem; height: 1.08rem; background: url("../../assets/img/newupgrade/grade0.png");background-size: 100% 100%;display: inline-block;margin-top: .2rem;}
.icon-grade1{width: 1.08rem; height: 1.08rem; background: url("../../assets/img/newupgrade/grade1.png");background-size: 100% 100%;display: inline-block;margin-top: .2rem;}
.icon-grade2{width: 1.08rem; height: 1.08rem; background: url("../../assets/img/newupgrade/grade2.png");background-size: 100% 100%;display: inline-block;margin-top: .2rem;}
.icon-grade3{width: 1.08rem; height: 1.08rem; background: url("../../assets/img/newupgrade/grade3.png");background-size: 100% 100%;display: inline-block;margin-top: .2rem;}
.icon-gradeCBD1{width: 1.08rem; height: 1.08rem; background: url("../../assets/img/newupgrade/gradeCBD1.png");background-size: 100% 100%;display: inline-block;margin-top: .2rem;}
.icon-gradeCM1{width: 1.08rem; height: 1.08rem; background: url("../../assets/img/newupgrade/gradeCM1.png");background-size: 100% 100%;display: inline-block;margin-top: .2rem;}
.icon-grade000{width: 1.42rem; height: 1.42rem; background: url("../../assets/img/newupgrade/grade00.png");background-size: 100% 100%;display: inline-block;margin-top: .08rem;}
.icon-grade001{width: 1.42rem; height: 1.42rem; background: url("../../assets/img/newupgrade/grade01.png");background-size: 100% 100%;display: inline-block;margin-top: .08rem;}
.icon-grade002{width: 1.42rem; height: 1.42rem; background: url("../../assets/img/newupgrade/grade02.png");background-size: 100% 100%;display: inline-block;margin-top: .08rem;}
.icon-grade003{width: 1.42rem; height: 1.42rem; background: url("../../assets/img/newupgrade/grade03.png");background-size: 100% 100%;display: inline-block;margin-top: .08rem;}
.icon-gradeCBD01{width: 1.42rem; height: 1.42rem; background: url("../../assets/img/newupgrade/gradeCBD01.png");background-size: 100% 100%;display: inline-block;margin-top: .08rem;}
.icon-gradeCM01{width: 1.42rem; height: 1.42rem; background: url("../../assets/img/newupgrade/gradeCM01.png");background-size: 100% 100%;display: inline-block;margin-top: .08rem;}
.icon-fangkuai{width: .38rem; height: .24rem; background: url("../../assets/img/newupgrade/fangkuai.png");background-size: 100% 100%;display: inline-block}
.icon-tanhao1{width: .2rem; height: .2rem; background: url("../../assets/img/newmember/tanhao1.png");background-size: 100% 100%;display: inline-block}


.icon-kuang1{width: 3.2rem; height: 4rem; background: url("../../assets/img/newupgrade/kuang1.png");background-size: 100% 100%;display: inline-block}
.icon-kuang2{width: 4.3rem; height: 4rem; background: url("../../assets/img/newupgrade/kuang2.png");background-size: 100% 100%;display: inline-block}
.icon-kuang3{width: 4.3rem; height: 3.1rem; background: url("../../assets/img/newupgrade/kuang3.png");background-size: 100% 100%;display: inline-block}

.bbg{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: #120A02;
}
</style>
