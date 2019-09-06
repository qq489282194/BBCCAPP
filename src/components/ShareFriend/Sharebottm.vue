<template>
  <div>
    <van-popup
      v-model="show"
      position="bottom"
      :overlay="true"
      :close-on-click-overlay="false"
      transition
    >
      <div class="flex_sprond">
        <img src="../../assets/img/sharefriend/clo.png" class="close" @click="close"/>
        <div @click="onShare('weChat')">
          <img src="../../assets/img/sharefriend/weixin.png" />
          <p>微信</p>
        </div>
        <div @click="onShare('friendCircle')">
          <img src="../../assets/img/sharefriend/pengyoquan.png" />
          <p>朋友圈</p>
        </div>
        <div @click="onShare('qq')">
          <img src="../../assets/img/sharefriend/qq.png" />
          <p>QQ</p>
        </div>
        <div @click="onShare('sina')">
          <img src="../../assets/img/sharefriend/weibo.png" />
          <p>新浪微博</p>
        </div>
      </div>
    </van-popup>
  </div>
</template>


<script type="text/javascript">
//调用原生方法
import { system_shareTo } from "@/assets/js/share.js";
export default {
  name: "Sharebottm",
  data() {
    return {
      show: false
    };
  },
  created() {},
  methods: {
	  showShare(){
		  this.show = true
	  },
	close(){
		this.show =false
	},
    onShare(item) {
      var imgUrl = "http://bbccmxgshop.meibbc.com/static/img/top01.ac12877.png";
      system_shareTo("标题", "描述", 'imgUrl', 'url', "", "", item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/css/shareFriend/com.scss";
.flex_sprond {
  margin: 0.5rem 0 0.8rem;
  div {
    flex: 1;
  }
  p {
    color: #666;
    font-size: 0.24rem;
    text-align: center;
  }
  img {
    width: 1rem;
    height: 1rem;
    display: block;
    margin: 0.2rem auto;
  }
  img.close {
    position: absolute;
    right: 0.2rem;
    top: 0rem;
    width: 0.44rem;
    height: 0.44rem;
  }
}
</style>
