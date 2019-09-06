<template>
  <div>
    <!-- <div class="header">
      美胸汇C米使用手册
      <i class="icon-back" @click="backRouter()"></i>
    </div> -->
    <Topcomom>美胸汇C米使用手册</Topcomom>
    <div class="usermanual">
      <div class="title2 mt">用户获取C米规则如下：</div>
      <ul>
        <li>1、新用户注册：奖30C米</li>
        <li>2、用户下载APP：奖20C米（首次下载）</li>
        <li>3、用完善后台资料：奖30C米<p>必填信息：姓名、电话、出生年月、身高、体重、腰围、胸围、臀围<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;非必填：邮箱地址、所在城市、兴趣爱好</p></li>
        <li>4、分享下载APP注册成会员，获得10C米</li>
        <li>
          5、签到获D得：每日签到奖10C米，连续七天为一周期叠加奖励
          <table>
            <thead>
              <tr>
                <th>日期</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C米奖励</td>
                <td>10</td>
                <td>15</td>
                <td>20</td>
                <td>25</td>
                <td>30</td>
                <td>40</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>6、发布文章：得10C米，上限10篇即100C米（需后台审核）</li>
        <li>7、点赞文章：得2C米，上限10次/天</li>
        <li>8、分享转发内容：得5C米，上限5次/天</li>
        <li>9、发布提问获：得5C米，上限5次/天</li>
        <li>10、解答提问：得5C米，上限5次/天</li>
        <li>11、收藏文章视频语音：得5C米，上限5次/天</li>
        <li>12、游戏获得：根据每次游戏规则</li>
        <li>13、商城购物：消费1元奖励1C米</li>
        <li>14、升级贵宾用户：消费金额399奖399C米，额外奖励100C米</li>
        <li>15、升级铂金用户：消费金额2980奖2980C米，额外奖励500C米</li>
        <li>16、朋友赠送：用户之间可以互相赠送C米</li>
        <li>17、C米红包：可以当红包互发(即将开放)</li>
        <li>18、C米打赏：用户的内容，其他用户觉得很好，可以打赏给作者（即将开放）</li>
        <li>19、资讯评论激励：用户评论资讯内容，可获得相对应C米奖励（即将开放）</li>
        <li>20、资讯阅读激励：用户阅读资讯内容，可获得相对应C米奖励（即将开放）</li>
      </ul>
      <div class="title2">用户使用消耗C米规则如下：</div>
      <ul>
        <li>1、C米商城购物：每一个商品指定消耗C米数额</li>
        <li>2、游戏消耗：每一次根据游戏规则消耗</li>
        <li>3、退换礼品：根据不同获得制定</li>
        <li>4、BBCC品牌梦想官：投票消耗</li>
        <li>5、C米红包：可以发C米红包，</li>
        <li>6、C米打赏：可以打赏给作者C米</li>
        <li>7、C米赠送：可以赠送给每一个朋友用户，根据手机号码</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Topcomom from '../../components/common/Topcomomnew'

export default {
  components: {
    Topcomom
  },
}
</script>

<style scoped>
.header {text-align: center; font-size: .36rem; color: #333; font-weight: bold; padding-top: .71rem; padding-bottom: .61rem; position: relative;}
.icon-back {display: block; width: .2rem; height: .35rem; color: #999; background: url('../../assets/img/back.png') no-repeat center; background-size: contain; position: absolute; left: .24rem; top: .79rem;}
.usermanual {padding: .25rem .3rem;}
.title {text-align: center; font-size: .3rem; color: #333; line-height: .6rem; font-weight: bold;}
.mt {margin-top: 1.6rem;}
.title2 {font-size: .25rem; color: #666; font-weight: bold;}
table {margin: auto; margin-bottom: .1rem; text-align: center; border-collapse:collapse;}
table th, table td {border: 1px solid #333; text-indent: 0; padding: 0 .2rem;}
li {text-indent: 2em; font-size: .2rem; line-height: .4rem;}
</style>
