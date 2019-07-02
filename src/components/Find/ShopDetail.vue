<template>
  <div>
    <nut-swiper
        :paginationVisible="true"
        direction="horizontal"
        ref="demo1"
        initPage='1'

    >
        <div class="nut-swiper-slide" v-for="item in img_urls" :key="item.index">
            <!-- <span>page{{item.name}}</span> -->
            <img :src="item" style="max-width:100%; max-height:100%" class="nut-img-lazyload"/>
        </div>
        <!-- <div class="nut-swiper-slide">
            <img src="../../assets/img/offline/swipe.png" style="max-width:100%; max-height:100%" class="nut-img-lazyload"/>
        </div> -->
    </nut-swiper>

    <div class="headbutton">
        <i class="icon icon-back" @click="closeHtml()"></i>
        <i class="icon icon-collect"></i>
        <i class="icon icon-share"  @click="isShare = true"></i>
        <!-- <p class="backroute">&lt;</p>
        <p class="share">2</p>
        <p class="collect">1</p> -->
    </div>

    <div class="menu" :style="menu == false ? 'display:none' : 'display:block'">
        <p class="backroute" @click="closeHtml()">
            <i class="icon icon-backMenu"></i>
        </p>
        <p class="title">商家详情</p>
        <p class="collect">
            <i class="icon icon-collectMenu"></i>
        </p>
        <p class="share"  @click="isShare = true">
            <i class="icon icon-shareMenu"></i>
        </p>
    </div>

    <p class="imgNum">1/9</p>
    

    <div class="shop">
        <div class="shop-title">
            <p class="price">￥{{serverDetail.price}}</p>
            <p class="title" v-html="serverDetail.name">【奈瑞儿】价值860元全身减压SPA套餐</p>
        </div>
        <div class="rate ml26">
          <!-- <img src="../../assets/img/offline/star.svg" alt="">
          <img src="../../assets/img/offline/star.svg" alt="">
          <img src="../../assets/img/offline/star.svg" alt="">
          <img src="../../assets/img/offline/star.svg" alt=""> -->
          <i class="icon icon-ystar"></i>
          <i class="icon icon-ystar"></i>
          <i class="icon icon-ystar"></i>
          <i class="icon icon-ystar"></i>
          <i class="icon icon-ystar"></i>
          <span class="grade" v-html="average.avg_score">5.0</span>
          <div class="evaluate mr26">
              <span>{{average.total_comment}}条评价 <i class="icon icon-right"></i></span>
              <i></i>
          </div>
        </div>
        <div class="alltap ml26">
            <span class="tap" v-for="item in serverCommentLabelInfo" :key="item.index">{{item.content}} {{item.num}}</span>
            <!-- <span class="tap">交通便利 3</span>
            <span class="tap">技师专业 40</span><br />
            <span class="tap">无推销 28</span>
            <span class="tap">环境优雅 30</span>
            <span class="tap mb32">服务热情 36</span> -->
        </div>
        <p class="wire"></p>
    </div>

    <div class="all">
        <!-- <div class="time ml26 mr26">
            <span class="title">营业时间</span>
            <span class="hour">1周一至周日1:00-21:00</span>
        </div> -->
        <div class="message ml26 mr26">
            <div>
                <p class="shop" v-html="serverDetail.shop_name">肤俊堂皮肤修复中心</p>
                <p class="site" v-html="serverDetail.address">中山大道西1138号合生骏景广场A座1527室</p>
                <p class="rice" v-if="serverDetail.distance">
                    <img src="../../assets/img/offline/site.png" alt="">
                    <span>距离 {{serverDetail.distance}}m</span>
                </p>
            </div>
            <div class="phone">
                <!-- <img src="../../assets/img/offline/phone.png" alt=""> -->
                <i class="icon icon-phone"></i>
            </div>
        </div>
        <p class="wire"></p>
        <!-- <div class="appointmentmodule">
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
        <p class="wire"></p> -->
    </div>

    <div class="botm">
        <div class="shop">
            <!-- <p class="title">门店介绍</p> -->
            <ul class="option">
                <li>
                    <p :class="style == 0 ? 'active' : ''" @click="option('introduce')">产品介绍</p>
                </li>
                <li>
                    <p :class="style == 1 ? 'active' : ''" @click="option('evaluate')">网友评价</p>
                </li>
            </ul>
            <div class="introduce" :style="style == 0 ? '' : 'display:none'" v-html="serverDetail.details">
                <p>广州市奈瑞儿塑身美颜连锁股份有限公司，成立于2001年，是广东省知名的专业提供女性美容、美体服务的大型连锁机构，旗下美容院遍布广东珠三角地区，总部设在广州</p>
                <img :src="bigimg" alt="">
                <p>企业标志</p>
                <p>"奈瑞儿"企业标志是"蝴蝶",寓意为: 蝴蝶的美丽来自蜕变. 奈瑞儿的顾客在这里,蜕变出自己的美丽形体；奈瑞儿的员工在这里,蜕变出自己的完美人生</p>
                <p>企业规模</p>
                <p>广州奈瑞儿拥有100多名国内外知名美容顾问、200多名具有国家颁发专业证书的营养师，近2000名专业美容技师。“奈瑞儿”塑身美颜连锁机构遍布广东省各中心城市，拥有上百家直营连锁店，全省营业面积超过40000平方米，每天服务顾客超3000人次，已成为广东省最具规模、最为专业的塑身美胸连锁机构。“奈瑞儿”就像标志中的蝴蝶一样，把美丽、幸福带给了所有爱美女性。</p>
                <img :src="bigimg" alt="">
            </div>
            <div class="netfriend" :style="style == 1 ? '' : 'display:none'">
                <ul class="classify">
                    <li>
                        <p :class="content == 'ALL' ? 'optionclass' : ''" @click="commentContent('all')">全部({{commentClassify.all_count}})</p>
                    </li>
                    <li>
                        <p :class="content == 'PIC' ? 'optionclass' : ''" @click="commentContent('print')">嗮图({{commentClassify.pic_count}})</p>
                    </li>
                    <li>
                        <p :class="content == 'LOW' ? 'optionclass' : ''" @click="commentContent('lowGrade')">低分({{commentClassify.low_count}})</p>
                    </li>
                    <li>
                        <p :class="content == 'NEW' ? 'optionclass' : ''" @click="commentContent('new')">最新</p>
                    </li>
                </ul>
                <div class="label">
                    <!-- <p v-for="item in comment_label" :key="item.index" v-html="item"></p> -->
                    <p style="margin-top:.3rem;">高大上 18</p>
                    <p>高大上 18</p>
                    <p>交通便利 18</p>
                    <p>专业技师 18</p>
                    <p>环境优雅 18</p>
                    <p>无推销 18</p>
                    <p>服务热情 18</p>
                    <p>专业技师 18</p>
                    <div>
                        <i class="icon icon-extend"></i>
                    </div>
                </div>
                <div class="content" v-for="item in listServerComment" :key="item.index">
                    <div class="chead">
                        <div class="cheadimg">
                            <i class="icon icon-user" v-if="item.icon == null"></i>
                            <img :src="item.icon" alt="" v-else>
                        </div>
                        <div class="name">
                            <ul>
                                <li class="nameTitle">
                                    <p v-html="item.nick_name">听不懂听不到</p>
                                    <p v-html="item.role == 1 ? '粉丝(普通用户)' : (item.role == 4 ? '部长(店长)' : (item.role == 2 ? 'VIP会员(贵宾)' : (item.role == 3 ? '云店创客(铂金)' : '')))">V1</p>
                                    <p class="evaluateTime">{{item.create_time || unixToDate}}</p>
                                </li>
                                <li class="nameGrade">
                                    <p>打分</p>
                                    <p>
                                        <i class="icon icon-grade"></i>
                                        <i class="icon icon-grade"></i>
                                        <i class="icon icon-grade"></i>
                                        <i class="icon icon-grade"></i>
                                        <i class="icon icon-grade"></i>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="evaluateContent">
                        <p v-html="item.content">
                            深层滋润乳房细胞，美胸丰满，护胸养胸，紧致滋润，健康呼吸护胸。4重功效，1瓶精华液完美满足深层滋润乳房细胞，美胸丰满，护胸养胸，紧致滋润，健康呼吸护胸。4重功效，1瓶精华液完美满足深层滋润乳房细胞，美胸丰满，护胸养胸，紧致滋
                        </p>
                        <a href="">全文</a>
                        <div class="evaluateTap">
                            <i class="icon icon-tap"></i>
                            <p v-html="item.comment_label">专业技师、环境优雅、高大上、无推销、效果好</p>
                        </div>
                        <div class="evaluateImg">
                            <img :src="item.imgs" alt="">
                            <!-- <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt=""> -->
                        </div>
                        <ul class="evaluateLike">
                            <li>
                                <p>浏览9万+</p>
                            </li>
                            <li>
                                <i class="icon icon-message"></i>
                                <p>5</p>
                            </li>
                            <li @click="ServerCommentStar(item.comment_id)">
                                <i class="icon icon-like" v-if="item.star == 1"></i>
                                <i class="icon icon-dianzan" v-else></i>
                                <p v-html="item.comment_stars">26</p>
                            </li>
                            <p class="clear"></p>
                        </ul>
                        <div class="evaluateComment">
                            <ul v-for="list in item.reply_list" :key="list.index">
                                <li v-if="list.type == 1">
                                    <p class="people">{{list.seller_name}}：</p>
                                    <p v-html="list.content">感谢您的支持，我们会再接再厉、为您提供优质服务，祝您生活愉快~</p>
                                </li>
                                <li v-if="list.type == 2">
                                    <p class="people" v-html="list.member_name">涛涛小下</p>
                                    <p>回复</p>
                                    <p class="people">{{list.seller_name}}：</p>
                                    <p v-html="list.content">因为是真的不错</p>
                                </li>
                                <!-- <li>
                                    <p class="people">初上梁上:</p>
                                    <p>我觉得挺好的</p>
                                </li> -->
                            </ul>
                            <!-- <p class="hide">查看全部5条回复</p> -->
                        </div>
                    </div>
                </div>

                <!-- <div class="content">
                    <div class="chead">
                        <div class="cheadimg">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            <ul>
                                <li class="nameTitle">
                                    <p>听不懂听不到</p>
                                    <p>V1</p>
                                    <p class="evaluateTime">2019-04-12</p>
                                </li>
                                <li class="nameGrade">
                                    <p>打分</p>
                                    <p>
                                        <i class="icon icon-grade"></i>
                                        <i class="icon icon-grade"></i>
                                        <i class="icon icon-grade"></i>
                                        <i class="icon icon-grade"></i>
                                        <i class="icon icon-grade"></i>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="evaluateContent">
                        <p>
                            深层滋润乳房细胞，美胸丰满，护胸养胸，紧致滋润，健康呼吸护胸。4重功效，1瓶精华液完美满足深层滋润乳房细胞，美胸丰满，护胸养胸，紧致滋润，健康呼吸护胸。4重功效，1瓶精华液完美满足深层滋润乳房细胞，美胸丰满，护胸养胸，紧致滋
                        </p>
                        <a href="">全文</a>
                        <div class="evaluateTap">
                            <i class="icon icon-tap"></i>
                            <p>专业技师、环境优雅、高大上、无推销、效果好</p>
                        </div>
                        <div class="evaluateImg">
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                        </div>
                        <div class="evaluateExamine">
                            <p>查看2365条评价</p>
                            <i class="icon icon-right"></i>
                        </div>
                    </div>
                </div> -->

                
            </div>
        </div>
    </div>
    <p class="wire" v-if="style == 0"></p>

    <div class="notice" v-if="style == 0">
        <div class="head">
            <p class="twire"></p>
            <p>购买须知</p>
            <p class="twire"></p>
        </div>
        <ul class="explain">
            <p>有效期</p>
            <li>
                <p>2014-05-28 至 2019-12-05</p>
            </li>
            <p>除外日期</p>
            <li>
                <p>春节不可使用</p>
            </li>
            <li>
                <p>2019-02-03 至 2019-02-09 不可使用</p>
            </li>
            <p>使用时间</p>
            <li>
                <p>10:30-21:30</p>
            </li>
            <p>预约信息</p>
            <li>
                <p>请提前1天预约</p>
            </li>
            <p>适合人群</p>
            <li>
                <p>每张团购券最多1人使用</p>
            </li>
            <p>适用人群</p>
            <li>
                <p>女宾专享</p>
            </li>
            <li>
                <p>只适用于初次到店非商户会员使用</p>
            </li>
            <p>规则提醒</p>
            <li>
                <p>活动期间最多使用1张</p>
            </li>
            <li>
                <p>每次消费限用1张</p>
            </li>
            <li>
                <p>团购券可以分2次体验，商家将提供凭证，凭证不可转借他人使用</p>
            </li>
        </ul>
    </div>

    <div class="pay" v-if="serverDetail.trade_type == 1">
        <div class="price">
            <p><span>￥</span>{{serverDetail.price}}</p>
            <p>预付{{serverDetail.price}}元，到店在付{{serverDetail.total_price}}-{{serverDetail.price}}元</p>
        </div>
        <div class="order">
            <p>立即下单</p>
        </div>
    </div>

    <div class="pay" v-if="serverDetail.trade_type == 2">
        <div class="price" style="line-height: .8rem;">
            <p><span>￥</span>{{serverDetail.total_price}}</p>
        </div>
        <div class="order">
            <p>立即支付</p>
        </div>
    </div>

    <div class="allpay" v-if="serverDetail.trade_type == 3">
        <div class="allprice">
            <p>预付款:￥{{serverDetail.price}}</p>
            <p>到店在付{{prepay}}元</p>
        </div>
        <div class="allorder">
            <p>全款:￥{{serverDetail.total_price}}</p>
        </div>
    </div>

    <!-- 分享 -->
    <div class="common-shadow-modules" @click="isShare = false"  v-show="isShare">
    </div>
    <div class="footer-share-modules" v-show="isShare">
      <div class="footer-title-modules">
        <p>分享</p>
      </div>
      <ul class="clear-both">
        <li @click="shareFun('weChat',1)">
          <img src="../../assets/img/WeChat@2x.png"/>
          <p>微信分享</p>
        </li>
        <li @click="shareFun('friendCircle',2)">
          <img src="../../assets/img/CircleofFriends@2x.png"/>
          <p>朋友圈分享</p>
        </li>
        <li @click="shareFun('qq',3)">
          <img src="../../assets/img/QQ@2x.png"/>
          <p>QQ分享</p>
        </li>
        <li @click="shareFun('sina',4)">
          <img src="../../assets/img/weibo@2x.png"/>
          <p>微博分享</p>
        </li>
      </ul>
      <button @click="isShare = false" class="share-footer-button">取消</button>
    </div>

  </div>
</template>

<script>
import img from "../../assets/img/offline/img.png"
import bigimg from "../../assets/img/offline/bigimg.png"
import * as USER_API from '@/api/user'
import store from "@/store/index"

export default {
    data(){
        return{
            dataItem:[{
                name:'../../assets/img/offline/swipe.png'
            }],
            dataImgItem:[],
            img,
            bigimg,
            // 吸顶菜单
            menu:false,
            // 选项卡
            style:0,
            // 评论内容选择
            content:'ALL',
            // 商家详情
            serverDetail:{},
            // 轮播图
            img_urls:[],
            // 评论图片
            imgs:[],
            // 评论标签
            comment_label:[],
            // 评论详情
            listServerComment:[],
            // 评论总数
            allComment:0,
            // 总评论数和平均评分
            average:{},
            // 评论分类数量
            commentClassify:{},
            // 预付剩余
            prepay:0,
            // 分享
            serverCommentLabelInfo:[],
            isShare:false,
        }
    },
    mounted(){
        // 商品详情
        this.loadServerDetail()
        // 评论详情
        this.loadListServerComment()
        // 总评论数和平均评分
        this.loadServerTotalCommentNum()
        // 总评论数和平均评分
        this.loadServerCommentLabelInfo()
        // 获取网友评论统计
        this.loadServerCommentInfo()
        // 监听滚动事件
        window.addEventListener("scroll", this.menuShow); 
    },
    watch:{
        wheight:'someMethod'
    },
    methods:{
        // 吸顶菜单
        menuShow(){
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if(scrollTop >= 100){
                this.menu = true
            }else{
                this.menu = false
            }
        },
        // 介绍评价切换
        option(val){
            if(val == 'introduce'){
                this.style = 0
            }else if(val == 'evaluate'){
                this.style = 1
            }
        },
        commentContent(val){
            if(val == 'all'){
                this.content = 'ALL'
            }else if(val == 'print'){
                this.content = 'PIC'
            }else if(val == 'lowGrade'){
                this.content = 'LOW'
            }else if(val == 'new'){
                this.content = 'NEW'
            }
            this.loadListServerComment()
        },
        // 获取商家详情
        loadServerDetail(){
            let params = {"serverId":'142', "longitude":'', "latitude":'',};
            USER_API.serverDetail(params).then(data => {
                if(data){
                    this.serverDetail = data
                    this.img_urls = data.img_url.split(',')
                }
                this.prepay = data.total_price - data.price
            });
        },
        // 获取总评论数和平均评分
        loadServerTotalCommentNum(){
            let params = '142'
            USER_API.serverTotalCommentNum(params).then(data => {
                if(data){
                    this.average = data
                }
            });
        },
        // 获取服务评论标签信息
        loadServerCommentLabelInfo(){
            let params = '142'
            USER_API.serverCommentLabelInfo(params).then(data => {
                if(data){
                    this.serverCommentLabelInfo = data
                }
            });
        },
        // 获取网友评论统计
        loadServerCommentInfo(){
            let params = '142'
            USER_API.serverCommentInfo(params).then(data => {
                if(data){
                    this.commentClassify = data
                }
            });
        },
        // 获取评论详情
        loadListServerComment(){
            // this.listServerComment = []
            let params = {"serverId":'142', "page":'', "pageSize":'', "key":this.content,};
            USER_API.listServerComment(params).then(data => {
                if(data){
                    this.listServerComment = data.data
                    this.allComment = data.data_total
                    for(let i in data.data){
                        data.data[i].Imgs.push(data.data[i].imgs.split(','))
                        this.comment_label.push(data.data[i].comment_label.split(','))
                    }
                }else{
                    this.listServerComment = []
                }
            });
        },
        // 评论点赞
        ServerCommentStar(val){
            USER_API.serverCommentStar(val).then(data => {
                if(data.code == 0){}
            });
        },
        // 服务收藏
        ServerCommentStar(val){
            let params = {"serverId":'142', "serverName":'',};
            USER_API.serverCollectServer(val).then(data => {
                if(data.code == 0){}
            });
        },
    }
}
</script>

<style scoped>
.app{position: relative;}
/* 轮播图 */
.nut-swiper{height: 5rem;}
/* 店名模块 */
.shop .shop-title{border-bottom: .01rem solid #f2f2f2;margin: 0 .26rem;}
.shop .shop-title .head{height: .88rem;width: .88rem;margin-right: .18rem;display: inline-block;border-radius: .44rem;background: chocolate;}
.shop .price{font-size: .46rem;color: #F63B75;font-weight: bold;}
.shop .grade{display: inline-block;font-size: .32rem;color: #FF5858;font-weight: bold;margin-left: .06rem;}
.shop .shop-title img{display: none;}
.shop .shop-title .title{font-size: .3rem;color: #2B2B2B;font-weight: bold;display: inline-block;margin-bottom: .2rem;}
.shop .shop-title div{float: left;}
.shop .shop-title p:nth-child(1){width: 4.5rem;}
.shop .shop-title .attention{height: .46rem;background: #F63B75;border-radius: .24rem;float: right;padding: 0 .2rem;color: white;line-height: .46rem;margin-top: .2rem}
.shop .shop-title .oldattention{height: .46rem;border-radius: .24rem;float: right;padding: 0 .2rem;color: #999999;line-height: .46rem;margin-top: .2rem;border: 1px solid #999999;}
.shop .shop-title ul{margin-top: .03rem;}
.shop .shop-title ul li{float: left;font-size: .24rem;color: #999999;}
.shop .shop-title ul li:nth-child(1){margin-right: .3rem;}
.shop .rate{margin-top: .24rem;}
.shop .rate img{height: .32rem;width: .32rem;float: left;}
.shop .rate .evaluate{float: right;font-size: .26rem;}
.shop .alltap{clear: both;margin-bottom: .3rem;}
.shop .tap{height: .45rem;font-size: .26rem;color: #333333;padding: 0 .25rem;background: rgba(246, 59, 117, 0.1);border-radius: .22rem;line-height: .45rem;display: inline-block;margin-right: .2rem;margin-top: .2rem;}

.all .time{height: .76rem;border-bottom: 1px solid #E5E5E5;color: #333333;}
.all .time .title{font-size: .3rem;font-weight: bold;margin-top: .18rem;display: inline-block;}
.all .time .hour{font-size: .26rem;float: right;margin-top: .18rem;}
.all .message{position: relative;}
.all .message .shop{font-size: .3rem;color: #333333;margin-top: .26rem;}
.all .message .site{font-size: .26rem;margin:.18rem 0;color: #999999;}
.all .message .rice{margin-bottom: .32rem;}
.all .message .rice img{height: .26rem;width: .2rem;display: inline-block;}
.all .message .rice span{color: #999999;}
.all .message .phone{height: .7rem;width:.7rem;position: absolute;top:.44rem;right: 0;line-height: .7rem;}

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
.botm .introduce{font-size: .3rem;color: #333333;line-height: .44rem; clear: both;}
.botm .introduce img{margin: .3rem 0;}
.botm .option{font-size: .3rem;color: #999999;}
.botm .option li{float: left;text-align: center;width: calc(100% / 2);margin-top: .34rem;margin-bottom: .22rem;}
.botm .active{font-size: .32rem;color: #F63B75;border-bottom: .06rem solid #F63B75;padding-bottom: .1rem;}
/* 网友评价 */
.botm .classify{height: .84rem;border-top: 1px solid #E5E5E5;border-bottom: 1px solid #E5E5E5;line-height: .84rem;clear: both;}
.botm .classify li{float: left; width: calc(100% / 4);text-align: center;}
.botm .classify li p{color: #333333;}
.botm .classify li .optionclass{font-size: .26rem;color: #F63B75;font-weight: bold;}
.botm .netfriend .label p{height: .46rem;line-height: .46rem;text-align: center;padding: 0 .26rem;font-size: .26rem;color: #333333;display: inline-block;border-top: 1px solid rgba(153, 153, 153, 0.1);border-bottom: 1px solid rgba(153, 153, 153, 0.1);margin-bottom: .22rem;}
.botm .netfriend .label{margin-bottom: .3rem;}
.botm .netfriend .label div{width: 100%;text-align: center;margin-bottom: .3rem;}
.botm .netfriend .content{border-top: 1px solid #E5E5E5;padding-bottom: .32rem;padding-top: .28rem;}
.botm .netfriend .chead{position: relative;}
.botm .netfriend .chead div{float: left;}
.botm .netfriend .cheadimg{height: .62rem;width: .62rem;border-radius: .31rem;margin-right: .14rem;}
.botm .evaluateTime{position: absolute;top: 0;right: 0;}
.botm .name p{display: inline-block;}
.botm .nameTitle p:nth-child(1){font-size: .26rem;color: #2B2B2B;}
.botm .nameTitle p:nth-child(2){background: #FFE186;border-radius: .13rem;line-height: .26rem;text-align: center;color: white;padding: .06rem .1rem;}
.botm .nameTitle p:nth-child(3){font-size: .2rem;color: #2B2B2B;}
.botm .nameGrade p:nth-child(1){font-size: .22rem;color:#999999;}
.botm .evaluateContent{clear: both;padding-left: .76rem;}
.botm .evaluateContent>p{font-size: .28rem;color: #333333;line-height: .44rem;}
.botm .evaluateContent>a{font-size: .28rem;color: #3C6E9E;line-height: .44rem;}
.botm .evaluateTap{margin-bottom: .24rem;}
.botm .evaluateTap p{display: inline-block;font-size: .22rem;color: #999999}
.botm .evaluateImg img{display: inline-block;height: 2rem;width: 2rem;background: #F63B75;margin-bottom: .08rem;}
.botm .evaluateLike{margin-top: .3rem;border-bottom: 1px solid #E5E5E5;padding-bottom: .34rem;margin-bottom: .24rem;}
.botm .evaluateLike li{}
.botm .evaluateLike li p{display: inline-block;}
.botm .evaluateLike li:nth-child(1){font-size: .22rem;color: #999999;float: left;}
.botm .evaluateLike li:nth-child(2){float: right;}
.botm .evaluateLike li:nth-child(3){float: right;margin-right: .54rem;}
.botm .evaluateComment .people{color: #3C6E9E;}
.botm .evaluateComment li p{font-size: .28rem;line-height: .4rem;color: #333333;display: inline-block;}
.botm .evaluateComment .hide{font-size: .28rem;color: #3C6E9E;margin-top: .28rem;}
.botm .evaluateExamine{width: 100%;text-align: center;margin-top: .4rem;}
.botm .evaluateExamine p{font-size: .28rem;color: #999999;line-height: .5rem;display: inline-block;}

/* 购买须知 */
.notice{padding: 0 .26rem;}
.notice .twire{height: .02rem;width: .76rem;background: #F63B75;border-radius: .02rem;}
.notice p{display: inline-block;}
.notice .head{line-height: .38rem;text-align: center;}
.notice .head p:nth-child(2){color: #F63B75;font-size: .32rem;}
.notice .explain{}
.notice .explain li{margin-bottom: .16rem;list-style:disc;margin-left: .3rem;}
.notice .explain>p{font-size: .3rem;color: #999999;margin-bottom: .24rem;margin-top: .44rem;}
.notice .explain li p{display: block;font-size: .26rem;color: #333333;}
.notice .dot{display: inline-block;height: .12rem;width: .12rem;border-radius: 50%;background: black;}

/* 立即下单 */
.pay{border-top: 1px solid #E5E5E5;height: 1rem;margin-top: .64rem;}
.pay .price{float: left;padding-left: .24rem;margin-top: .12rem;}
.pay .price p:nth-child(1){font-size: .3rem;color: #F63B75;font-weight: bold;}
.pay .price p:nth-child(2){font-size: .24rem;color: #FF163D;}
.pay .order{float: right;text-align: center;width: 2.72rem;line-height: 1rem;background: linear-gradient(right,#F63B75,#FF8686);font-size: .3rem;color: white;}

/* 预付、全款 */
.allpay{height: 1rem;background: #FFEEF3;margin-top: .64rem;}
.allpay .allprice{float: left;margin-top: .12rem;width: 50%;text-align: center;}
.allpay .allprice p:nth-child(1){font-size: .3rem;color: #F63B75;font-weight: bold;}
.allpay .allprice p:nth-child(2){font-size: .24rem;color: #FF163D;}
.allpay .allorder{float: right;text-align: center;width: 50%;line-height: 1rem;background: linear-gradient(right,#F63B75,#FF8686);font-size: .3rem;color: white;}


/* 头部按钮 */
.headbutton{position: absolute;top: .5rem;width: 100%;padding: 0 .24rem;}
.headbutton p{height: .7rem;width: .7rem;border-radius: 50%;background: rgba(0, 0, 0, 0.4);line-height: .7rem;text-align: center;color: white;}
.headbutton .backroute{float: left;}
.headbutton .collect{float: right;}
.headbutton .share{float: right;margin-left: .2rem;}
.imgNum{background: rgba(0, 0, 0, 0.3);border-radius: .22rem;height: .44rem;padding: 0 .24rem;line-height: .44rem;color: white;font-size: .3rem;position: absolute;top: 4.36rem;right: .24rem;}
.headbutton i:nth-child(1){margin-right: 4.56rem;}
.headbutton i:nth-child(2){margin-right: .2rem;}

/* 吸顶菜单 */
.menu{height: 1.28rem;line-height: 1rem;padding-left: .32rem;padding-right: .4rem;padding-top:.28rem;position: fixed;top: 0;background: white;width: 100%;z-index: 9;}
.menu p{float: left;}
.menu .backroute{margin-right: 2.54rem;}
.menu .title{font-size: .36rem;margin-right: 1.32rem;}
.menu .collect{margin-right: .48rem;}
.menu .show{display: none}

/*分享模块*/
.footer-share-modules{position: fixed;bottom: 0;width: 100%;height: 4.36rem;background-color: #F6F6F6;z-index: 999}
.footer-title-modules{height: .8rem;position: relative;margin-top: .2rem}
.footer-title-modules:after{content: "";height: 1px;background-color: #909090;width: 3.63rem;position: absolute;left: 0;right: 0;;margin: auto;
z-index: 9;top: 0;bottom: 0}
.footer-title-modules p{position: absolute;left: 0;right: 0;margin: auto;width: 2.5rem;z-index: 99;line-height: .8rem;
background-color: #F6F6F6;text-align: center;color: #909090;font-size: .32rem}
.footer-share-modules li{float: left;width: calc(100% / 4);text-align: center;position: relative}
.footer-share-modules li p{width: 100%;text-align: center;top: .8rem;position: absolute}
.footer-share-modules li:nth-child(1) img{width: .64rem;display: inline-block}
.footer-share-modules li:nth-child(2) img{width: .58rem;display: inline-block}
.footer-share-modules li:nth-child(3) img{width: .52rem;display: inline-block}
.footer-share-modules li:nth-child(4) img{width: .59rem;display: inline-block}
.footer-share-modules ul{margin-top: .87rem}
.share-footer-button{position: absolute;bottom: 0;width: 100%;line-height: .85rem;text-align: center;color: #FC858F;font-size: .3rem;background-color: white;font-weight: bold}


/* 公共样式 */
.wire{height: .14rem;background: #F2F2F2;clear: both;}
.clear{clear: both;}
.ml26{margin-left: .26rem;}
.mr26{margin-right: .26rem;}
.mb32{margin-bottom: .32rem;}

.icon { display:inline-block}
.icon-collect { width: .7rem; height: .7rem; background: url("../../assets/img/shopDetail/collect.png");background-size: 100% 100% }
.icon-share { width: .7rem; height: .7rem; background: url("../../assets/img/shopDetail/share.png");background-size: 100% 100% }
.icon-back { width: .7rem; height: .7rem; background: url("../../assets/img/shopDetail/back.png");background-size: 100% 100% }
.icon-right { width: .12rem; height: .22rem; background: url("../../assets/img/shopDetail/right.png");background-size: 100% 100% }
.icon-backMenu { width: .16rem; height: .26rem; background: url("../../assets/img/shopDetail/right.png");background-size: 100% 100%;transform: rotateY(180deg) }
.icon-collectMenu { width: .42rem; height: .42rem; background: url("../../assets/img/shopDetail/collect1.png");background-size: 100% 100% }
.icon-shareMenu { width: .42rem; height: .42rem; background: url("../../assets/img/shopDetail/share1.png");background-size: 100% 100% }
.icon-phone { width: .36rem; height: .34rem; background: url("../../assets/img/shopDetail/phone.png");background-size: 100% 100% }
.icon-star { width: .32rem; height: .32rem; background: url("../../assets/img/shopDetail/star.png");background-size: 100% 100% }
.icon-ystar { width: .32rem; height: .32rem; background: url("../../assets/img/shopDetail/ystar.png");background-size: 100% 100% }
.icon-bstar { width: .32rem; height: .32rem; background: url("../../assets/img/shopDetail/bstar.png");background-size: 100% 100% }
.icon-like { width: .32rem; height: .32rem; background: url("../../assets/img/shopDetail/like.png");background-size: 100% 100% }
.icon-extend { width: .22rem; height: .12rem; background: url("../../assets/img/shopDetail/extend.png");background-size: 100% 100% }
.icon-grade { width: .22rem; height: .22rem; background: url("../../assets/img/shopDetail/grade.png");background-size: 100% 100% }
.icon-tap { width: .28rem; height: .28rem; background: url("../../assets/img/shopDetail/tap.png");background-size: 100% 100% }
.icon-like { width: .32rem; height: .32rem; background: url("../../assets/img/shopDetail/like.png");background-size: 100% 100% }
.icon-message { width: .32rem; height: .32rem; background: url("../../assets/img/shopDetail/message.png");background-size: 100% 100% }
.icon-user { width: .62rem; height: .62rem; background: url("../../assets/img/shopDetail/user.png");background-size: 100% 100% }
.icon-dianzan { width: .32rem; height: .32rem; background: url("../../assets/img/shopDetail/dianzan.png");background-size: 100% 100% }

</style>
