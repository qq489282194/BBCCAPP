<template>
  <div class="main-view" id="main-view">
    <div class="ycontainer">
      <Topcomom :icon="icon">商家邀约</Topcomom>  
      <!-- <div class="header"><img @click="closeHtml()" src="../../assets/img/mymember/back@2x.png" class="icon-back">商家邀约 <img @click="toGuize" class="guize" src="../../assets/img/invitation/guize.png" alt=""></div> -->
      <div style="height:1.2rem;"></div>
      <!-- <div style="position:relative;">
        <img @click="toGuize" class="guize" src="../../assets/img/invitation/guize.png" alt="">
      </div> -->
      
      <div class="ymain">
        <div style="height:2.12rem;"></div>
        <div class="yynav" style="height:1.0rem;"></div>
        <div v-show="type==2" class="yynav" style="height:0.8rem;"></div>
        <!-- <div :class="[{'':phoneSignX},'']" :style="[{'top:1.2rem;':phoneSignX},'padding: .2rem .2rem 0;background:#fff;position:fixed;width: 100%;z-index:8;top:1.6rem;border-top:1px solid #f2f2f2;']"> -->
        <div :class="phoneSignX ? 'headipx':'headnoipx'" >
          <div class="banner">
            <div>
              <h1>{{userList.saleorg_num || 0}}</h1>
              <p>我的商家</p>
            </div>
            <div>
              <h1>{{userList.server_num || 0}}</h1>
              <p>我的服务商</p>
            </div>
            <div @click="toprofit">
              <h1>{{userList.my_profit || 0}}</h1>
              <p>我的收益</p>
            </div>
          </div>
          
          <div class="ynav">
            <div class="navflex">
              <div @click="changeType(1)" :class="[{active: type==1}]">
                <span>商家</span>
              </div>
              <div @click="changeType(3)" :class="[{active: type==3}]">
                <span>服务商</span>
              </div>
              <div @click="changeType(2)" :class="[{active: type==2}]">
                <span>可邀请商家</span>
              </div>
            </div>
            <!-- <div class="xian">
              <div :class="[{active: type==1}]"></div>
              <div :class="[{active: type==3}]"></div>
              <div :class="[{active: type==2}]"></div>
            </div> -->
            <div v-show="type==2" @click="switchPicker('addressshow')" class="locations">
              <div>{{a}} <img src="../../assets/img/invitation/down1.png" alt=""></div>
              <div>{{b}} <img src="../../assets/img/invitation/down1.png" alt=""></div>
              <div>{{c}} <img src="../../assets/img/invitation/down1.png" alt=""></div>
            </div>
            
          </div>
        </div>

        <div class="ycontent">
          <div v-show="type==1" class="items" id="items">
            <div @click="todetail(item)" v-if="myshopdata.length" v-for="(item,index) in myshopdata" :key="index" class="item">
              <div class="img">
                <img v-if="item.shop_logo" :src="item.shop_logo" alt="">
                <img v-else src="../../assets/img/perch.png" alt="">
              </div>
              <div class="itemright">
                <h1>{{item.shop_name}}</h1>
                <p>收益：{{item.shop_profit}}</p>
              </div>
            </div>
            <div class="nothing" v-if="myshopdata.length==0">
              <img src="../../assets/img/invitation/tongyong_wk_bg@2x.png" alt="">
              <p style="text-align:center;color:#999;margin-top:.4rem;">你没有邀请任何商家</p>
            </div>
            <div v-show="myshopdata.length>10&&nomore1" style="text-align:center;color:#999;padding-top:0.2rem;">没有更多了</div>
          </div>
          <div v-show="type==3" class="items" id="items">
            <div @click="todetail(item)" v-if="serverdata.length" v-for="(item,index) in serverdata" :key="index" class="item">
              <div class="img">
                <img v-if="item.shop_logo" :src="item.shop_logo" alt="">
                <img v-else src="../../assets/img/perch.png" alt="">
              </div>
              <div class="itemright">
                <h1>{{item.shop_name}}</h1>
                <p>收益：{{item.shop_profit}}</p>
              </div>
            </div>
            <div class="nothing" v-if="myshopdata.length==0">
              <img src="../../assets/img/invitation/tongyong_wk_bg@2x.png" alt="">
              <p style="text-align:center;color:#999;margin-top:.4rem;">你没有邀请任何商家</p>
            </div>
            <div v-show="serverdata.length>10&&nomore1" style="text-align:center;color:#999;padding-top:0.2rem;">没有更多了</div>
          </div>
          <div v-show="type==2" class="items">
            <div v-if="inviteShopData.length" v-for="(item,index) in inviteShopData" :key="index" class="item" >
              <div @click="todetail(item)" class="img">
                <img v-if="item.shop_logo" :src="item.shop_logo" alt="">
                <img v-else src="../../assets/img/perch.png" alt="">
              </div>
              <div class="itemright">
                <h1 @click="todetail(item)">{{item.shop_name}}</h1>
                <p>电话：<span @click="clickPhone(item.link_phone)" style="color:#209A48;">{{item.link_phone}}</span> </p>
                <p @click="todetail(item)">地址：{{item.shop_add}}</p>
              </div>
            </div>
            <div class="nothing" v-if="inviteShopData.length==0">
              <img src="../../assets/img/invitation/tongyong_wk_bg@2x.png" alt="">
              <p style="text-align:center;color:#999;margin-top:.4rem;">你没有邀请任何商家</p>
            </div>
            <!-- <div v-show="!CanGet" style="text-align:center;color:#999;padding-top:0.2rem;">加载中，请稍后...</div> -->
            <div v-show="inviteShopData.length>10&&nomore2" style="text-align:center;color:#999;padding-top:0.2rem;">没有更多了</div>
          </div>
        </div>

        <div @click="toRuzhu" class="ybottom">
          <span></span> 邀请商家入驻
        </div>

      </div>
    </div>
    <confirm ref="myConfirm" @userBehavior="userBehavior"></confirm>
    <div class="address-bg" v-show="addressshow" @click="closeEarId"></div>
    <div v-show="addressshow" class="pickerpop">
      <div class="btnCon">
        <div class="closebtn"><span @click="closeEarId">取消</span></div>
        <div class="pickerbtn"><span @click="sureEarId">确认</span></div>
      </div>
      <div class="picker">
        <van-picker :columns="province" @change="provinChange" />
        <van-picker :columns="citys" @change="cityChange" />
        <van-picker :columns="country" @change="countryChange" />
      </div>
    </div>
  </div>
</template>
<script>
import * as USER_API from "@/api/user";
import * as USER_score from "@/api/score";
import store from "@/store";
import { calcTimeHeader } from "@/assets/js/util.js";
import confirm from '../../components/common/myConfirm'
import Topcomom from '@/components/common/Topcomomnew'
import {isIPhoneX,phoneSign} from '@/assets/js/share.js'
export default {
  data() {
    return {
      user_id: '',// fff04119e87d40ef8297bb715649bd86 服务商
      // user_id: store.state.userId,
      id:0,
      // user_id: 'fd663cf83fcb4faba881547271188515',
      title: "我的邀请",
      is_business: 1, // 1 我的收益 2 邀请商家
      is_showRight: false,
      userList: {},
      addressshow: false,
      icon:{
        back:0,
        type:2,
        query:'cmi-business-invitation-rules'
      },
      shoplist: [],
      del_show:false,
      frendList: [],
      page_size: 20,
      data_total: -1,
      page_no: 1,
      province: [],
      provinceIndex: 0,
      citys: [],
      cityIndex: 0,
      country: [],
      countryIndex: 0,
      areaListT: [],
      areaList: [],
      areaCode: ["", "", ""],
      areaName: "地区搜索",
      flicon:0,
      // token:store.state.token
      // userId
      myshopdata: [
        // {
        //   shop_profit: 100,
        //   shop_logo: '',
        //   shop_name: '654阿三打扫打扫AAS大事撒旦阿萨德撒阿瑟撒'
        // }
      ],
      serverdata: [],
      inviteShopData: [
        // {
        //   title: '奈瑞儿美颜塑身SPA(百信广场东区店）奈瑞儿美颜塑身SPA(百信广场东区店）',
        //   phone: '020-655101541',
        //   place: '广州市天河区'
        // },
        // {
        //   title: '奈瑞儿美颜塑身SPA(百信广场东区店）奈瑞儿美颜塑身SPA(百信广场东区店）',
        //   phone: '020-655101541',
        //   place: '广州市天河区'
        // },
        // {
        //   title: '奈瑞儿美颜塑身SPA(百信广场东区店）奈瑞儿美颜塑身SPA(百信广场东区店）',
        //   phone: '020-655101541',
        //   place: '广州市天河区'
        // },
        // {
        //   title: '奈瑞儿美颜塑身SPA(百信广场东区店）奈瑞儿美颜塑身SPA(百信广场东区店）',
        //   phone: '020-655101541',
        //   place: '广州市天河区'
        // }
      ],
      CanGet: false,
      type: 1, // type：1我的商家，2可邀约商家
      a: '省份',
      b: '城市',
      c: '区域',
      
      params2: {
        page_no: 1,
        page_size: 20,
        shop_province_id: '',
        shop_city_id: '',
        shop_county_id: ''
      },
      nomore1: false,
      nomore2: false,
      phoneSignX:false,
    };
  },
  // computed:{
  //     user_id(){
  //       return store.state.userId
  //     },
  //     token(){
  //       return store.state.token
  //     },
  //   },
  components: {confirm,Topcomom},
  created(){
    this.CanGet = true;
  },
  mounted() {
    
      var phoneSignX = isIPhoneX()
      if(phoneSignX){
        this.phoneSignX = true
      }
    if (this.$route.query.type) {
    console.log(123456, this.$route.query)
      this.type = this.$route.query.type
    } 
    // this.getQueryVariable('userId')
      this.user_id = this.$route.query.userId
      if(store.state.userId&&store.state.userId!='(null)'){
        this.user_id = store.state.userId
      }else{
        this.user_id = this.$route.query.userId
        if(!this.$route.query.userId){
          if(!this.user_id&&this.user_id!='(null)'&&this.$store.state.userId&&this.$store.state.userId!='(null)'){
            this.user_id = this.$store.state.userId
          }else{
            window['setUserId'] = function(userId){
              store.commit('changeUserId',userId)
            };
            window['setToken'] = function(token){
              store.commit('changeToken',token)
            };
            this.MIXINUserId();
          }
        }
      }  
      // this.loadUser()
      window.addEventListener("scroll", this.scrollBottom);
      this.findEsShopList()
      this.getInvitableList()
      this.adressdepth()
      this.getMyInfo();
      this.findServerShopList();
  },
  methods: {
    findServerShopList(){
      USER_score.findServerShopList({user_id: this.user_id}).then(res=>{
        this.serverdata.push(...res)
      })
        
      
    },
    toGuize(){
      this.$router.push({path: '/cmi/businessinvitationrules'})
    },
    toRuzhu(){
      this.$router.push({path: '/actindex/asharer'})
    },
    todetail(item){
      this.$router.push({path: '/cmi/businessdetails',query:{shop_id:item.shop_id,type: this.type,shop_profit: item.shop_profit}})
    },
    setUserId(userId){
      this.user_id = userId;
    },
    findEsShopList(){
      let params = {
        user_id: this.user_id,
        // user_id: 'fff04119e87d40ef8297bb715649bd86',
        page_no: this.page_no,
        page_size: this.page_size
      }
      this.CanGet = false
      USER_score.findEsShopList(params).then(res=>{
        console.log(res);
        this.myshopdata.push(...res);
        this.CanGet = true;
        if(res.length<this.page_size){
          this.nomore1 = true
        }
      }).catch(()=>{
        this.CanGet = true;
      })
    },
    userBehavior(type,data){
          console.log(type,data)
          if(type=='clickConfirm'){
            console.log(data);
            this.MIXINSendCallPhone(data.phone)
          }
        },
    clickPhone(phone){
      this.$refs.myConfirm.show('是否预约该门店进行服务，选择后不可修改',{
        cancelText: '取消',
        confirmText: '拨打电话',
        data: {phone: phone},
        titleText: '预约电话',
        title: true,
        html: `<div style="padding:0 0.5rem;text-align:center;line-height:0.5rem;">
              ${phone}
        </div>`,
          type: 'confirm'
      })
      // this.MIXINSendCallPhone(item.phone)
    },
    changeType(type){
      this.type = type;
    },
    //页面滚动出发
    scrollBottom() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        //写后台加载数据的函数
        console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
        if (this.CanGet) {
          this.getMore()
        }
      }
    },
    getMore(){
      if(this.type==1){
        // this.myshopdata.push(...this.myshopdata);
        if(!this.nomore1){
          this.page_no += 1;
          this.findEsShopList();
        }
      }else if(this.type==2){
        if(!this.nomore2){
          this.params2.page_no += 1;
          this.getInvitableList();
          // this.inviteShopData.push(...this.inviteShopData);
        }
      }
      
    },
    loadUser(){
        // if(store.state.userId){
        //     var userId = store.state.userId;
        // }else{
        //     var userId = this.id
        // }
        var userId = this.id

        // USER_API.findUserByUserid(this.user_id).then(data => {
        //     this.userList = data;
        //     this.grade = data.role - 1
            
        //     // if(data.director == 1){
        //     //     this.grade = 6
        //     // }
        //     // if(data.managerRole == 1){
        //     //     this.grade = 7   
        //     // }
        //     // this.productList()
        //     this.getMyInfo();
        //     this.adressdepth();
        //     this.getShopSaleorgList();
        // });
        USER_API.findUserProfitList({user_id: this.user_id}).then(res=>{
              this.userList = res;
            // this.grade = data.role - 1
            
            // if(data.director == 1){
            //     this.grade = 6
            // }
            // if(data.managerRole == 1){
            //     this.grade = 7   
            // }
            // this.productList()
            this.getMyInfo();
            // this.adressdepth();
            // this.getShopSaleorgList();
        })
    },
    switchPicker(param) {
      console.log(param);
      this[`${param}`] = !this[`${param}`];
    },
    goBack() {
      window.history.back();
    },
    calcTimeHeader(time) {
      return calcTimeHeader(time * 1000);
    },
    choosedItem(index) {
      // console.log(index)
      this.is_business = index;
      index == 1 ? this.getShopSaleorgList() : this.getfindlList();
    },
    clearSearch(){
      this.areaCode = []
      this.areaName = "地区搜索"
      this.getShopSaleorgList()
    },
    getMyInfo() {
      let userId = this.user_id;
      // USER_API.findMyInfo(userId).then(data => {
      //   this.userList = data;
      // });
      USER_API.findUserProfitInfo({user_id:userId}).then(data => {
        this.userList = data;
      });
      // this.adressdepth();
      // this.getShopSaleorgList();
    },
    //获取可邀约商家列表
    getInvitableList(){
      let params = this.params2;
      this.CanGet = false;
      USER_API.getInvitableList(params).then(res=>{
        this.inviteShopData.push(...res);
        this.CanGet = true;
        if(res.length<this.params2.page_size){
          this.nomore2 = true
        }
      }).catch(()=>{
        this.CanGet = true;
      })
    },
    //获取省市区
    adressdepth() {
      var that = this;
      var params = {};
      USER_API.regions().then(data => {
        that.areaList = data;
        that.areaList.forEach(o => {
          that.province.push(o.local_name);
        });
        that.areaList[0].children.forEach(o => {
          that.citys.push(o.local_name);
        });
        that.areaList[0].children[0].children.forEach((o, index) => {
          that.country.push(o.local_name);
          if (index == 0) {
            if (that.addressid) {
              that.areaCode = o.id;
            }
          }
        });
      });
    },
    provinChange(picker, value, index) {
      this.cityIndex = 0;
      this.countryIndex = 0;
      this.citys = [];
      this.country = [];
      this.areaList[index].children.forEach(o => {
        this.citys.push(o.local_name);
      });
      this.areaList[index].children[0].children.forEach(o => {
        this.country.push(o.local_name);
      });
      this.provinceIndex = index;
    },
    cityChange(picker, value, index) {
      this.countryIndex = 0;
      this.cityIndex = index;
      this.country = [];
      this.areaList[this.provinceIndex].children[index].children.forEach(o => {
        this.country.push(o.local_name);
      });
    },
    countryChange(picker, value, index) {
      this.countryIndex = index;
      // console.log(index, "country");
    },
    sureEarId() {
      this.areaCode = this.areaList[this.provinceIndex].children[this.cityIndex].children[this.countryIndex].id;
      let a = this.areaList[this.provinceIndex].local_name;
      let b = this.areaList[this.provinceIndex].children[this.cityIndex]
        .local_name;
      let c = this.areaList[this.provinceIndex].children[this.cityIndex]
        .children[this.countryIndex].local_name;
      let acode = this.areaList[this.provinceIndex].id;
      let bcode = this.areaList[this.provinceIndex].children[this.cityIndex].id;
      let ccode = this.areaList[this.provinceIndex].children[this.cityIndex]
        .children[this.countryIndex].id;
      this.areaName = a + b + c;
      this.a = a;
      this.b = b;
      this.c = c;
      this.areaCode = [acode, bcode, ccode];
      this.addressshow = false;
      this.del_show = true;
      
      // 省市区id
      this.params2.shop_province_id = acode;
      this.params2.shop_city_id = bcode;
      this.params2.shop_county_id = ccode;

      // this.getShopSaleorgList();
      this.inviteShopData = [];
      this.getInvitableList()
    },
    closeEarId() {
      this.addressshow = false;
    },
    handlerScroll() {
      let self = this;
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight == scrollHeight) {
      }
    },
    getfindlList() {
      let params = {};
      params.page_no = this.page_no;
      params.page_size = this.page_size;
      params.user_id = this.user_id;
      USER_API.findSaleorgPersonalList(params).then(data => {
        // console.log(22222, data)
        this.frendList = data.data != null ? data.data:[]
        if(this.frendList.length > 0){
          for(let i in this.frendList){
            if(this.frendList[i].icon){
              this.frendList[i].flicon = 1
              // console.log('001',this.frendList)
            }
          }
        }
        
      });
    },
    // 时间格式
    format(timestamp) {
        var d = new Date(timestamp * 1000);
        return (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" + (d.getDate()) + " " + (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds());
    },
    getShopSaleorgList() {
      let params = {};
      params.user_id = this.user_id;
      params.page_no = this.page_no;
      params.page_size = this.page_size;
      params.shopProvinceId = this.areaCode[0];
      params.shopCityId = this.areaCode[1];
      params.shopCountyId = this.areaCode[2];
      USER_API.findShopSaleorgList(params).then(data => {
        // console.log(11111,data)
        this.shoplist = data.data != null ? data.data:[]
        
        if(this.shoplist){
            this.shoplist.map((res, index) => {
            this.shoplist[index].shop_create_time = this.format(
              res.shop_create_time
            );
            let text = "";
            let max = ''
            if(res.shop_category_volist){
              max =  res.shop_category_volist.length -1
            }
            res.shop_category_volist.map((item, idx) => {
              
              text = text + item.category_name + (idx != max ?  "•":'');
            });
            this.shoplist[index].shop_category_volist = text;
          });
        }
      });
    },
    toActivity() {
      this.$router.push("/actindex/asharer");
    },
    tofrend() {
      this.$router.push("/invitefriends");
    },
    // 获取url参数
    getQueryVariable(variable){
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i=0;i<vars.length;i++) {
            let part = vars[i].split("=");
            if(part[0] == variable){
            this.id = part[1]
            }
        }
    },
    toprofit(){
      this.$router.push({path: '/cmi/returnsdetail'})
    }
  }
};
</script>
<style lang="scss" scoped>
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
.guize{
  position: absolute;
  z-index: 1000000000;
  right: .4rem;
  top: -0.54rem;
  width: .44rem;
  height: .44rem;
  left: 6.8rem;
  bottom: .2rem;
}
.ycontainer{
  // height: 100vh;
  // display: flex;
  // flex-direction: column;
  .ymain{
    flex: 1;
    display: flex;
    flex-direction: column;
    .headipx{
      padding: .2rem .2rem 0;background:#fff;position:fixed;width: 100%;z-index:8;top:.8rem;
    }
    .headnoipx{
      padding: .2rem .2rem 0;background:#fff;position:fixed;width: 100%;z-index:8;top:1.6rem;
    }
    .banner{
      flex: 0 0 2.12rem;
      background: url('../../assets/img/invitation/bannerbg.png') no-repeat;
      background-size: 100%;
      color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      // position: fixed;
      top: 1.2rem; /**/
      height: 2.12rem;
      width: 100%;
      z-index: 100;
      
      div{
        flex: 1;
        text-align: center;
        h1{
          font-size: .42rem;
          color:#fff;
          margin-bottom: .14rem;
        }
        p{
          font-size: .24rem;
        }
      }
    }
    .ynav{
      flex: 0 0 1.0rem;
      border-bottom: 1px solid #f1f1f1;
      padding-bottom: .24rem;
      // position: fixed;
      top: 3.32rem;
      width: 100%;
      z-index: 100;
      background: #fff;
      .navflex{
        display: flex;
        padding: .2rem .2rem 0;
        div{
          flex: 1;
          text-align: center;
          line-height: 0.5rem;
          color: #666;
          font-size: .28rem;
        }
        .active{
          // color: #F63B75;
          color: #10C3CE;
          span {
            border-bottom: .03rem solid #11CBC8;
          }
        }
      }
      .xian{
        display: flex;
        justify-content: space-around;
        div{
          flex: 0 0 .6rem;
          margin-bottom: .1rem;
        }
        .active{
          // border-top: 3px solid #F63B75;
          border-top: 3px solid #10C3CE;
        }
      }
      .locations{
        display: flex;
        background: rgba(247,247,247,1);
        border-radius: .3rem;
        div{
          flex:1;
          text-align: center;
          line-height: 0.6rem;
          img{
            width: 0.2rem;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }
    .ycontent{
      flex: 1;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 1.4rem;
      margin-top: .5rem;
      .items{
        height: 100%;
        overflow: scroll;
        padding-bottom: 0.2rem;
        // padding-top: 0.2rem;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
        .item{
          display: flex;
          flex-direction: row;
          padding: 0.2rem;
          .img{
            flex: 0 0 1.76rem;
            height: 1.4rem;
            background: #f1f1f1;
            margin-right: .2rem;
            img{
              vertical-align: middle;
              border-radius: .14rem;
              width: 100%;
              height: 100%;
            }
          }
          .itemright{
            flex: 1;
            h1{
              font-size: .28rem;
              color: #333;
              margin-bottom: .1rem;
            }
            p{
              color: #999999;
              font-size: .24rem;
              margin-bottom: 0.1rem;
            }
          }
        }
      }
    }
    .ybottom{
      flex: 0 0 .98rem;
      // background: #F63B75;
      background: #10C3CE;
      color: #fff;
      font-size: .32rem;
      text-align: center;
      line-height: .98rem;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 10;
      span {
        width: .3rem;
        height: .3rem;
        background: url('../../assets/img/invitation/add_sj.png') no-repeat center;
        background-size: contain;
        display: inline-block;
        vertical-align: middle;
        margin-top: -.04rem;
      }
    }
  }
}
.header{
  text-align: center;
  line-height: 0.8rem /* 50/100 */;
  padding-top: .4rem;
  // background: #000;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  color: #333;
  flex: 0 0 .4rem; /* 40/100 */
  font-size: .36rem /* 36/100 */;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
}
.main-view{
  // position: fixed;
  // top:0;
  // left:0;
  // right: 0;
  // bottom: 0;
  // overflow: hidden;
}


.btnCon {
  display: flex;
}
.closebtn {
  flex: 1;
  line-height: 0.88rem;
  text-align: left;
  padding-left: 0.3rem;
  color: #999;
  font-size: 0.3rem;
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
}
.pickerbtn {
  flex: 1;
  line-height: 0.88rem;
  text-align: right;
  padding-right: 0.3rem;
  color: rgb(246, 59, 117);
  font-size: 0.3rem;
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
}
.pickerpop {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 200;
}
.picker {
  display: flex;
  justify-content: center;
  justify-content: space-around;
  flex: 1;
}
.van-picker {
  width: 33.333%;
  text-align: center;
}
.right-btnList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0.3rem;
  top: 1.3rem;
  width: 2.13rem;
  height: 2.11rem;
  opacity: 0.6;
  border-radius: 0.2rem;
  z-index: 100;
}

.right-btnList-img {
  position: fixed;
  right: 0.3rem;
  top: 1.3rem;
  width: 2.13rem;
  height: 2.11rem;
}
.right-btnList-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 0.9rem;
  font-size: 0.24rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  z-index: 110;
}
.right-border {
  border-top: 0.01rem solid #fff;
}
.right-btnList-item-image {
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.19rem;
}
.address-bg{
  width: 100%;
  height: 100%;
  background:rgba(0,0,0,1);
  opacity:0.6;
  z-index: 190;
  position: fixed;

}
.right-btnList-bg{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 11;
}
.nothing{
  padding-top: 1.2rem;
  // text-align: center;
  float: left;
  // position: fixed;
  margin-left: 50%;
  transform: translateX(-50%);
  img{
    // width: 50%;
    // margin: 0 auto;
    // margin-left: 50%
  }
}
</style>