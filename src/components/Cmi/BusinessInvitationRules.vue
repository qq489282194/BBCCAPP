<template>
  <div>
    <div class="header">
      <i class="icon icon-back" @click="backRouter()"></i>
      商家邀约细则
    </div>

    <div class="main">
      <div class="article">
        <div class="article_title">一、概述</div>
        <div class="article_body">为了保障顺丰商业用户的合法权益并维护顺丰优选商城的正常经营秩序，特此制定《顺丰商业优选平台商家监管规则》，该规则适用于平台商家在顺丰优选平台的各项活动。商家应当严格遵守国家法律法规，顺丰商业对于商家违规行为的处罚将不免除商家应承担的法律责任及赔偿义务。对于本规则已有的规定，商家的违规行为适用于本规则，本规则尚无规定的，顺丰商业有权酌情处理。顺丰商业有权变更本规则并在网站进行公布，若商家不同意相关变更，应立即停用顺丰商业相关产品及服务。顺丰商业有权对于用户行为的规则进行单方认定，并据此处理。顺丰商业保留在法律允许的范围对本规则的最终解释权。</div>
      </div>
      <div class="article">
        <div class="article_title">二、监管规则内容与处罚措施</div>
        <div class="article_body">为了保护消费者权益，提升顺丰商业平台服务质量，营造公平、公正、公开透明的商业竞争环境，各商家不得出现法律明令禁止的违法行为以及以下违规行为。针对如下违规行为，一经查实，顺丰商业有权按照违规行为对应的处罚政策执行处罚（包括但不限于责令整改、下架商品、屏蔽店铺、关闭店铺、要求商家支付违约金等）。</div>
        <div class="article_body">复制或者模仿包括产地、包装装潢及整体外观等特征，使该复制或仿制品与真品难以辨别的行为。盗版商品是指未经著作权人许可复制其作品的图书、电子书、音像作品和软件等。顺丰商业严禁商家出售假冒商品、盗版商品。一经查实，永久关闭违规商家店铺，与商家停止合作、解除合同，商家向顺丰商业支付违约金人民币50000元。</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.header {text-align: center; position: relative; width: 100%; height: 1.4rem; padding-top: .63rem; font-size: .36rem; color: #333333; border-bottom: .01rem solid #CFCFCF;}

.main {padding: 0 .25rem;}
.main .article {margin-bottom: .5rem;}
.main .article_title {font-size: .30rem; color: #333333; line-height: .50rem;}
.main .article_body {font-size: .26rem; color: #666; line-height: .42rem; text-indent: 2em;}

.icon {display: block;}
.icon-back {width: .2rem; height: .35rem; background: url('../../assets/img/back.png') no-repeat center; background-size: contain; position: absolute; left: .24rem; top: .70rem;}
</style>

