<template>
  <div class="dilog-view">
    <!-- 弹窗 -->
    <div class="newAlert" >
      <div class="alertCon" >
        <div class="alertHeader">
         <img v-show="showType == 1"  class="alertImg" src="../../assets/img/ti1.png" >
         <img  v-show="showType == 2" class="alertImg" src="../../assets/img/ti2.png" >
         <img v-show="showType == 3" class="alertImg" src="../../assets/img/ti3.png" >
        </div>
        <div class="alertBody">
          <p>{{content}}</p>
        </div>
        <div class="alertFooter">
          <div  v-show='single' class="cancel" @click="cancels">取消</div>
          <div  v-show='wangji' class="cancel" @click="toSetpass">忘记密码</div>
          <div  v-show='chongxin' class="confirm" @click="toChongxin">重新输入</div>
          <div  v-show='single && !singlepsd' class="confirm" @click="cancels">确认</div>
          <div  v-show='single && singlepsd' class="confirm" @click="toSetpass">前往设置</div>
          <div v-show='!single && !wangji' class="confirm" @click="cancels" style="width:100%;" >好的，我知道了</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { clearTimeout } from 'timers';
export default {
  name:'Dialog',
  props:{
    showType: {
      type: Number,
      default: 0
    },
    single: {
      type: Boolean,
      default: false
    },
    singlepsd: {
      type: Boolean,
      default: false
    },
    wangji: {
      type: Boolean,
      default: false
    },
    chongxin: {
      type: Boolean,
      default: false
    },
    content:{
      type:String,
      default:''
    },
    view_show: {
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      titelImg:["../../assets/img/ti1.png","../../assets/img/ti2.png","../../assets/img/ti3.png"],
      imgUrl:''
    }
  },
  mounted(){

  },
  methods: {
   cancels(){
    //  console.log(this.showNewAlert)
     this.$emit('viewShow')
     this.view_show = false
   },
   toSetpass() {
      // 未设置密码的，设置密码
      console.log('------设置密码-----')
      this.$system_details(1, 31)
      this.$emit('openPasswordAlert')
    },
    toChongxin(){
      this.$emit('openPasswordAlert1')
    }
  }
}
</script>
<style scoped>

.dilog-view{z-index: 999;}
.newAlert {position: fixed; width: 100%; height: 100%; background: rgba(0,0,0,.4); top: 0; left: 0; display: flex;flex-direction: column;justify-content: center;align-items: center; z-index: 100;}
.alertCon {width: 5.72rem; min-height: 2.32rem; position: relative;background: #fff; border-radius: 0.2rem;padding-top: 1.1rem;}
.alertCon .alertHeader {width: 1.7rem; height: 1.7rem; background: #fff; border-radius: 50%; position: absolute; left: 50%; top: 0; transform: translate(-50%,-50%);}
.alertCon .alertHeader .alertImg {width: 1.7rem;height: 1.7rem; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;}
.alertCon .alertHeader .alertImg img {width: 100%; height: 100%;}
.alertCon .alertBody {font-size: 0.32rem; color: #333; margin-bottom: 0.57rem;text-align: center;padding: 0 0.6rem;font-weight: bold;}
.alertCon .alertBody p{text-align: center;}
.alertCon .alertFooter {display: flex; justify-content: space-between; width: 100%; text-align: center;line-height: 0.87rem;border-top: 0.01rem solid #E6E7E8;font-weight:bold;font-size: 0.34rem;}
.alertCon .alertFooter .cancel {width:50%;color: #999;height: 0.87rem;z-index: 99;}
.alertCon .alertFooter .confirm {width:50%;color: #F63B75;border-left: 0.01rem solid #E6E7E8 }

</style>
