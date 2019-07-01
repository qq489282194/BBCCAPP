<template>
  <div>
    <nut-swiper
        :paginationVisible="true"
        direction="horizontal"
        ref="demo1"
        initPage='1'

    >
        <div class="nut-swiper-slide">
            <!-- <span>page{{item.name}}</span> -->
            <img src="../../assets/img/offline/swipe.png" style="max-width:100%; max-height:100%" class="nut-img-lazyload"/>
        </div>
        <div class="nut-swiper-slide">
            <!-- <span>page{{item.name}}</span> -->
            <img src="../../assets/img/offline/swipe.png" style="max-width:100%; max-height:100%" class="nut-img-lazyload"/>
        </div>
    </nut-swiper>
    <p class="backroute">&lt;</p>

    <div class="shop">
        <div class="shop-title">
            <div class="head">
                <img src="../../assets/img/offline/author.jpg" alt="">
            </div>
            <div style="margin-top:-.08rem;">
                <p class="title">奈瑞儿美颜顶级豪华塑身旗舰店（东圃店）</p>
                <ul>
                    <li style="margin-bottom:.3rem;">15万粉丝</li>
                    <li>共180位网友推荐</li>
                </ul>
            </div>
            <p class="attention">+关注</p>
            <!-- <p class="oldattention">已关注</p> -->
            <p style="clear:both"></p>
        </div>
        <div class="rate ml26">
          <img src="../../assets/img/offline/star.svg" alt="">
          <img src="../../assets/img/offline/star.svg" alt="">
          <img src="../../assets/img/offline/star.svg" alt="">
          <img src="../../assets/img/offline/star.svg" alt="">
          <div class="evaluate mr26">
              <span>320条评价 ></span>
              <i></i>
          </div>
        </div>
        <div class="alltap ml26">
            <span class="tap">高大上 18</span>
            <span class="tap">交通便利 3</span>
            <span class="tap">技师专业 40</span><br />
            <span class="tap">无推销 28</span>
            <span class="tap">环境优雅 30</span>
            <span class="tap mb32">服务热情 36</span>
        </div>
        <p class="wire"></p>
    </div>

    <div class="all">
        <div class="time ml26 mr26">
            <span class="title">营业时间</span>
            <span class="hour">1周一至周日1:00-21:00</span>
        </div>
        <div class="message ml26 mr26">
            <div>
                <p class="shop">肤俊堂皮肤修复中心</p>
                <p class="site">中山大道西1138号合生骏景广场A座1527室</p>
                <p class="rice">
                    <img src="../../assets/img/offline/site.png" alt="">
                    <span>距离 457m</span>
                </p>
            </div>
            <div class="phone">
                <img src="../../assets/img/offline/phone.png" alt="">
            </div>
        </div>
        <p class="wire"></p>
        <div class="appointmentmodule">
            <div class="time">
                <span class="title">立即预约</span>
                <span class="hour">10人预订过 ></span>
            </div>
            <p class="serve">提供的商品服务</p>
            <div class="content">
                <img :src="img" alt>
                <div class="message mr26">
                    <p>三维灵动美鼻 假体隆鼻+耳软骨鼻尖+鼻小柱延长</p>
                    <p class="price">￥800</p>
                    <div class="sales">
                        <span>门市价：1599元</span>
                        <span class="appointment">已下单309 ></span>
                    </div>
                </div>
            </div>
            <div class="content">
                <img :src="img" alt>
                <div class="message mr26">
                    <p>隆胸丰胸一举两得 活细胞脂肪丰富高存活率近三十年临床经验教授亲诊</p>
                    <p class="price">￥800</p>
                    <div class="sales">
                        <span>门市价：1599元</span>
                        <span class="appointment">已下单2 ></span>
                    </div>
                </div>
            </div>
        </div>
        <p class="wire"></p>
    </div>

    <div class="botm">
        <div class="shop">
            <p class="title">门店介绍</p>
            <div class="introduce">
                <p>广州市奈瑞儿塑身美颜连锁股份有限公司，成立于2001年，是广东省知名的专业提供女性美容、美体服务的大型连锁机构，旗下美容院遍布广东珠三角地区，总部设在广州</p>
                <img :src="bigimg" alt="">
                <p>企业标志</p>
                <p>"奈瑞儿"企业标志是"蝴蝶",寓意为: 蝴蝶的美丽来自蜕变. 奈瑞儿的顾客在这里,蜕变出自己的美丽形体；奈瑞儿的员工在这里,蜕变出自己的完美人生</p>
                <p>企业规模</p>
                <p>广州奈瑞儿拥有100多名国内外知名美容顾问、200多名具有国家颁发专业证书的营养师，近2000名专业美容技师。“奈瑞儿”塑身美颜连锁机构遍布广东省各中心城市，拥有上百家直营连锁店，全省营业面积超过40000平方米，每天服务顾客超3000人次，已成为广东省最具规模、最为专业的塑身美胸连锁机构。“奈瑞儿”就像标志中的蝴蝶一样，把美丽、幸福带给了所有爱美女性。</p>
                <img :src="bigimg" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import img from "../../assets/img/offline/img.png"
import bigimg from "../../assets/img/offline/bigimg.png"

export default {
    data(){
        return{
            dataItem:[{
                name:'../../assets/img/offline/swipe.png'
            }],
            dataImgItem:[],
            img,
            bigimg,
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
.nut-swiper{height: 5rem;}
/* 店名模块 */
.shop .shop-title{border-bottom: .01rem solid #f2f2f2;margin: 0 .26rem;}
.shop .shop-title .head{height: .88rem;width: .88rem;margin-right: .18rem;display: inline-block;border-radius: .44rem;background: chocolate;}
.shop .shop-title img{display: none;}
.shop .shop-title .title{font-size: .3rem;color: #2B2B2B;font-weight: bold;display: inline-block;}
.shop .shop-title div{float: left;}
.shop .shop-title p:nth-child(1){width: 4.5rem;}
.shop .shop-title .attention{height: .46rem;background: #F63B75;border-radius: .24rem;float: right;padding: 0 .2rem;color: white;line-height: .46rem;margin-top: .2rem}
.shop .shop-title .oldattention{height: .46rem;border-radius: .24rem;float: right;padding: 0 .2rem;color: #999999;line-height: .46rem;margin-top: .2rem;border: 1px solid #999999;}
.shop .shop-title ul{margin-top: .03rem;}
.shop .shop-title ul li{float: left;font-size: .24rem;color: #999999;}
.shop .shop-title ul li:nth-child(1){margin-right: .3rem;}
.shop .rate{margin-top: .24rem;margin-bottom: .26rem;}
.shop .rate img{height: .32rem;width: .32rem;float: left;}
.shop .rate .evaluate{float: right;}
.shop .alltap{clear: both;}
.shop .tap{height: .45rem;font-size: .26rem;color: #333333;padding: 0 .25rem;background: rgba(246, 59, 117, 0.1);border-radius: .22rem;line-height: .45rem;display: inline-block;margin-right: .2rem;margin-top: .2rem;}

.all .time{height: .76rem;border-bottom: 1px solid #E5E5E5;color: #333333;}
.all .time .title{font-size: .3rem;font-weight: bold;margin-top: .18rem;display: inline-block;}
.all .time .hour{font-size: .26rem;float: right;margin-top: .18rem;}
.all .message{position: relative;}
.all .message .shop{font-size: .3rem;color: #333333;font-weight: bold;margin-top: .26rem;}
.all .message .site{font-size: .26rem;margin:.18rem 0;}
.all .message .rice{margin-bottom: .32rem;}
.all .message .rice img{height: .26rem;width: .2rem;display: inline-block;}
.all .message .rice span{color: #999999;}
.all .message .phone{height: .7rem;width:.7rem;position: absolute;top:.44rem;right: .2rem;border-left: 1px solid #E5E5E5;}

.all .appointmentmodule{padding: 0 .26rem;}
.all .appointmentmodule .hour{color: #F63B75;}
.all .appointmentmodule .serve{font-size: .3rem;color: #333333;font-weight: bold;margin-top: .34rem;margin-bottom: .3rem;}
.all .content{margin: .3rem 0}
.all .content img{height: 1.62rem;width: 1.62rem;display: inline-block;}
.all .content .message{float: right;width: 4.9rem;}
.all .content .message p:nth-child(1){font-size: .28rem;color: #333333;margin-bottom: .08rem;line-height: .42rem;}
.all .content .price{font-size: .32rem;color: #F63B75;font-weight: bold;}
.all .content .sales{font-size: .24rem;color: #999999;}
.all .content .sales span:nth-child(2){float: right;}

.botm{padding: 0 .26rem}
.botm .title{font-size: .32rem;line-height: .38rem;color: #333333;margin: .3rem 0;}
.botm .introduce{font-size: .3rem;color: #333333;line-height: .44rem;}
.botm .introduce img{margin: .3rem 0;}

.app{position: relative;}
.backroute{height: .7rem;width: .7rem;border-radius: 50%;background: rgba(0, 0, 0, 0.4);line-height: .7rem;text-align: center;color: white;position: absolute;top: .5rem;left: .24rem;}

.wire{height: .14rem;background: #F2F2F2;}
.ml26{margin-left: .26rem;}
.mr26{margin-right: .26rem;}
.mb32{margin-bottom: .32rem;}
</style>
