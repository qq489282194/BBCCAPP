<template>
	<div :class="[{'signtop':sign}]">
		<div :class="[{'signXbar':signX}]"></div>
			<div :class="[{'signtopX':phoneSignX},'top']">
				<img src="../../assets/img/back.png" class="back" @click="goback" />
				<div class="title">
					<slot></slot>
				</div>
				<div class="icon-share" v-if="icon.type == 1" @click="tuShare">
					<img src="../../assets/img/newmember/share.png" alt="">
				</div>
				<div :class="[{'icon-tanhaoipx':phoneSignX},'icon-tanhao']" v-if="icon.type == 2" @click="goDetail">
					<img src="../../assets/img/newmember/tanhao.png" alt="">
				</div>
				<div class="invite" v-if="invite" @click="toPoster">
					<p>设置</p>
				</div>
			</div>
		</div>
	<!-- </div> -->
</template>

<script>
	import {
		nativeBack,
		phoneSign,
		isIPhoneX,
		setStatusBarClor
	} from '@/assets/js/share.js'
	export default {
		name: 'Topcomom',
		data() {
			return {
				sign: false,
				signX: true,
				phoneSignX:false,
				// invite:false
			}
		},
		props: {
          icon: {
            type: Object,
            default: () => {
              return {}
            }
		  },
		  invite: {
            type: Boolean,
            default: () => {
              return false
            }
          }
        },
		created() {
			 setStatusBarClor(0)
			var phoneSignb = phoneSign()
			console.log(phoneSignb, '手机机型')
			if (phoneSignb == 'iOS') {
				this.sign = true
				console.log(phoneSignb, 'sign--ios标志')
			}
			var phoneSignX = isIPhoneX()
			 if(phoneSignX){
				 this.phoneSignX = phoneSignX
			 }
			console.log(phoneSignX, 'phoneX的标志')
		},
		methods: {
			goback() {
				if(this.icon.back == 0){
					// nativeBack()
					this.closeHtml()
				}else{
					this.backRouter()
				}
				// nativeBack()

				// if (this.$route.path == '/Index') {
				// 	nativeBack()
				// } else {
				// 	this.$router.go(-1)
				// }

			},
			toPoster () {
				this.MixinToUrl('poster')
			},
			tuShare(){},
			goDetail(){
				this.MixinToUrl(this.icon.query)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top {
		position: fixed;
		display: flex;
		justify-content: space-around;
		height: 76px;
		line-height: 58px;
		align-items: center;
		width: 100%;
		background-color: #fff;
		z-index: 9999;
		text-align: center;
		top: 0;
		border-bottom: 1px solid #E6E7E8;
	}

	.signtop .top {
		height: 72px;
		line-height: 56px;
	}

	.signtop .top {
		top: -18px;
	}
	.signtop .signtopX  {
		top: -7px;
		height: 45px;
		line-height: 45px;
	}
	.title {
		width: 70%;
		color: #333;
		font-size: 18px;
		/* border-bottom: 1px solid #eee; */
		height: 8vh;
		box-sizing: border-box;
		padding-top: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0 auto;
		/* height: 0px; */
	}
	.signtopX .title {
		padding-top: 8px;
	}

	.back {
		position: absolute;
		top: 42px;
		left: 20px;
		width: .15rem;
		height: .25rem;
	}

	.signtop .back {
		top: 45px;
	}

	.signtop .signtopX .back {
		top: 14px;
	}

	.signXbar {
		position: absolute;
		top: -94px;
		width: 100%;
		background-color: #fff;
		height: 88px;
		z-index: 999999;
	}

	.icon-share{
		height: .4rem;
		width: .4rem;
		position: absolute;
		right: 20px;
		top: 42px;
	}

	.icon-tanhao{
		height: .3rem;
		width: .3rem;
		position: absolute;
		right: 20px;
		top: 42px;
	}
	.icon-tanhaoipx{
		height: .3rem;
		width: .3rem;
		position: absolute;
		right: 20px;
		top: 15px;
	}
	.invite{
		position: absolute;
		top: .38rem;
		right: .4rem;
		font-size: .28rem;
		color: #666666;
	}
</style>
