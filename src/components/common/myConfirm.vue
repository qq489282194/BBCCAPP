<template>
  <transition name="confirm-fade">
    <div v-if="isShowConfirm" class="my-confirm" @click.stop="clickFun('clickCancel')">
      
      <div class="confirm-content-wrap" @click.stop>
        <h3 v-if="showTitle" class="my-confirm-title">{{ titleText }}</h3>
        <!-- <div class="close"><img @click="clickFun('clickCancel')" src="../../assets/img/close1.png" alt=""></div> -->
        <div class="my-confirm-content">
          <div v-if="html" v-html="html"></div>
          <div v-else>{{ content }}</div>
        </div>
        <div class="my-operation">
          <div v-if="type==='confirm'" class="my-cancel-btn" @click="clickFun('clickCancel')">
            <p class="my-btn-text my-border-right">{{ cancelText }}</p>
          </div>
          <div class="confirm-btn" @click="clickFun('clickConfirm')">
            <p class="my-btn-text">{{ confirmText }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        isShowConfirm: false, // 用于控制整个窗口的显示/隐藏
        titleText: '操作提示', // 提示框标题
        content: 'Say Something ...', // 提示框的内容
        cancelText: '取消', // 取消按钮的文字
        confirmText: '确认', // 确认按钮的文字
        type: 'confirm', // 表明弹框的类型：confirm - 确认弹窗（有取消按钮）；alert - 通知弹框（没有取消按钮）
        outerData: null, // 用于记录外部传进来的数据，也可以给外部监听userBehavior，事件的函数提供判断到底是哪个事件触发的
        showTitle: '是否显示标题',
        html: false
      }
    },
    methods: {
      show (content, config) {
        this.content = content || 'Say Something ...'

        // if (Object.prototype.toString.call(config) === '[object Object]') {
          // 确保用户传递的是一个对象
          this.titleText = config.titleText || '操作提示'
          this.cancelText = config.cancelText || '取消'
          this.confirmText = config.confirmText || '确认'
          this.type = config.type || 'confirm'
          this.outerData = config.data || null
          this.showTitle = config.title || false
          this.html = config.html || false
        // }

        this.isShowConfirm = true
      },
      hidden () {
        this.isShowConfirm = false
        this.titleText = '操作提示'
        this.cancelText = '取消'
        this.confirmText = '确认'
        this.type = 'confirm'
        this.outerData = null
      },
      clickFun (type) {
        this.$emit('userBehavior', type, this.outerData)
        this.hidden()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-confirm {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
    /* 这里防止当用户长按屏幕，出现的黑色背景色块，以及 iPhone 横平时字体的缩放问题 */
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  /* 进入和出去的动画 */
  .confirm-fade-enter-active {
    animation: opacity 0.3s;
  }
  .confirm-fade-enter-active .confirm-content-wrap {
    animation: scale 0.3s;
  }
  .confirm-fade-leave-active {
    animation: outOpacity 0.2s;
  }

  /* 包裹层容器样式 */
  .confirm-content-wrap {
    position: absolute;
    /*top: 28%;*/
    top: 35%;
    left: 0;
    right: 0;
    width: 280px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    z-index: 999;
    user-select: none;
  }

  /* 顶部标题部分 */
  .my-confirm-title {
    padding-top: 20px;
    text-align: center;
    font-size: .34rem;
    font-weight: 500;
    color: #333;
  }

  /* 中间内容部分 */
  .my-confirm-content {
    padding: 0 20px;
    padding-top: 0.4rem;
    margin-bottom: 0.2rem;
    text-align: left;
    font-size: .3rem;
    color: #666;
    line-height: 1.5;
  }

  /* 底部按钮样式 */
  .my-operation {
    display: flex;
    // padding: 0 .3rem 0.3rem;
    margin-top: .3rem;
    border-top: 1px solid #eee;
  }
  .my-operation .my-cancel-btn, .confirm-btn {
    flex: 1;
  }
  .my-cancel-btn{
    border-right: 1px solid #f1f1f1;
  }
  .my-operation .confirm-btn p {
    // color: #ffb000;
    // background: rgba(246, 59, 117, 1);
    // color: #fff;
    color: rgba(246, 59, 117, 1);
  }
  .my-operation .my-btn-text {
    text-align: center;
    font-size: 16px;
    
    // padding: 6px 0;
    // border: 1px solid #ddd;
    line-height: .7rem;
    border-radius: .35rem;
    font-size: .28rem;
    width: 80%;
    margin: 8px auto;
  }

  /* 其他修饰样式 */
  .my-border-right {
    // border-right: 1px solid #eee;
  }

  /* 进来的动画 */
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes scale {
    0% {
      transform: scale(0);
    }
    60% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  /* 出去的动画 */
  @keyframes outOpacity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .close{
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    width: 0.36rem;
    color: #999;
  }
</style>
