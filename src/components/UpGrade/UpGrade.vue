<template>
  <div class="upgrade">
    <div class="shenfen">
      <div class="headImg"></div>
      <div class="jieshao">
        亲爱的zzzzzzzzzzzz
        <p>您当前为</p>
        <p>[普通会员]</p>
      </div>
      <div class="shengji">
        <div class="type type1">
          <div class="tupian"><img src="" alt=""></div>
          <div class="hytype"><p>购物满298元</p><p>升级为贵宾会员</p></div>
          <span></span>
          <a href="javascript:;">立即升级</a>
        </div>
        <div class="type type1">
          <div class="tupian"><img src="" alt=""></div>
          <div class="hytype"><p>购物满298元</p><p>升级为铂金会员</p></div>
          <span></span>
          <a href="javascript:;">立即升级</a>
        </div>
      </div>
    </div>
    <div class="quanyi">
      <h2>等级越高·享受权益越多</h2>
      <dl>
        <dt>全部会员特权</dt>
        <dd>
          <i></i>
          <span>自购省钱</span>
        </dd>
        <dd>
          <i></i>
          <span>自购省钱</span>
        </dd>
        <dd>
          <i></i>
          <span>自购省钱</span>
        </dd>
        <dd>
          <i></i>
          <span>自购省钱</span>
        </dd>
      </dl>
      <dl>
        <dt>贵宾/铂金/钻石/城市经理/商务总监特权</dt>
        <dd>
          <i></i>
          <span>自购省钱</span>
        </dd>
      </dl>
      <dl>
        <dt>铂金/钻石/城市经理/商务总监特权</dt>
        <dd>
          <i></i>
          <span>自购省钱</span>
        </dd>
      </dl>
      <dl>
        <dt>城市经理/商务总监特权</dt>
        <dd>
          <i></i>
          <span>自购省钱</span>
        </dd>
      </dl>
      <dl>
        <dt>城市经理特权</dt>
        <dd>
          <i></i>
          <span>自购省钱</span>
        </dd>
      </dl>
      <a href="javascript:;" class="konwMore">了解更多权益规则 ></a>
    </div>
    <div class="libao">
      <h3>升级·好物</h3>
      <HaowuList></HaowuList>
    </div>
  </div>
</template>
<script>
import HaowuList from './HaowuList'
export default {
  data() {
    return {}
  },
  components: {
    HaowuList
  }
}
</script>
<style lang="css" scoped>
/* 个人介绍 */
.jieshao {text-align: center;}
.shengji {display: flex; justify-content: space-around;}
.shengji .type {border: .01rem solid #000; width: 45%; height: 2rem; padding-top: .2rem; padding-left: .2rem;}
.shengji .type .tupian {width: .5rem; height: .5rem; border: .01rem solid #000; float: left;}
.shengji .type .hytype {float: left;}
.shengji .type span {display: block; clear: both; overflow: hidden; visibility: hidden; height: 0;}
.shengji a {display: block; width: 2rem; height: .5rem; background: pink; margin: auto; text-align: center; line-height: .5rem; border-radius: .2rem;}
/* 权益 */
.quanyi h2 {font-size: .18rem; font-weight: bold; text-align: center;}
.quanyi dl {display: flex; height: 1.36rem; border-bottom: .01rem solid #f00; padding-top: .1rem;}
.quanyi dl dt {text-align: center; width: 1.5rem; margin-top: .2rem; margin-right: .5rem; flex-wrap: wrap;}
.qunayi dl dd {margin-right: .2rem;}
.quanyi dl dd i {display: block; width: .6rem; height: .6rem; background: url("../../assets/img/personal/huiyuanshenji_grzx_icon@2x.png") no-repeat center; background-size: contain; margin: auto; margin-bottom: .1rem;}
.quanyi .konwMore {display: block; text-align: center; margin-top: .2rem;}
/*  */
</style>
