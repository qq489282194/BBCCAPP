<template>
	<div :class="[{'signtop':sign}]">
		<div :class="[{'signXbar':signX}]"></div>
			<div :class="[{'signtopX':phoneSignX},'top']">
				<div  class="back" id="back" @click="goback" >
					<div class="backbox">
						<img src="../assets/img/back1.png"/>
					</div>
				</div>
			<div class="title">
				<slot></slot>
			</div>
			<div class="shareImg">
				<slot name="shareImg"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		nativeBack,
		phoneSign,
		isIPhoneX
	} from '@/assets/js/share.js'
	export default {
		name: 'Topcomom',
		data() {
			return {
				sign: false,
				signX: true,
				phoneSignX:false,
			}
		},
		created() {
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
				console.log(this.$route.path)
				// debugger
				if (this.$route.path == '/Index' || this.$route.path == '/SixActivity') {
					nativeBack()
					console.log('test---')
				} else {
					this.$router.go(-1)
				}
			},
			testClick() {
				console.log('-----')
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
		height: 3.375rem;
		line-height: 3.375rem;
		overflow: hidden;
		align-items: center;
		width: 100%;
		background-color: #fff;
		z-index: 9999;
		text-align: center;
		top: 0;
	}
	.signtop{
		overflow: hidden;
	}
	.signtop .top {
		height: 3.75rem;
		/* line-height: 3.75rem; */
		overflow: hidden;
		display: flex;
		justify-content: space-around;
	}

	.signtop .top {
		top: -1.125rem;
		
	}
	.signtop .signtopX  {
		top: 0px;
		height: 35px;
		/* line-height: 35px; */
	}
	.signtopX .title {
		/* padding-top: -13px; */
		text-align: center;
	}
	.signtopX #back{
		padding-top: 0px;
	}
	.signtopX .shareImg{
		padding-top: 0px;
	}
	.title {
		/* width: 13.75rem; */
		color: #333;
		font-size: 16px;
		height: 100%;
		flex: 1;
		display: flex;
		/* align-items: center; */
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		/* padding-top: 80px; */
		margin-top: 20px;
		/* margin-left: 5rem; */
		background: black
	}
	.shareImg{
		top: 32px;
		display: flex;
		margin: 0 20px;
		padding-top: 20px;
	}



	#back {
		/* position: absolute; */
		/* background: pink; */
		/* z-index: 100099888; */
		top: 30px;
		cursor: pointer;
		padding-top: 22px;
		margin: 0 6px;
		left: 15px;
		width: 40px;
		height: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding-left: 5px; */
		box-sizing: border-box;
		/* height: 35px; */
	}
	.backbox {
		width: 40px;
		height: 100%;
	  display: flex;
		align-items: center;
		justify-content: center;
	}
	.back img{
		width: 10px;
		height: 17px;
		float: left;
	}

	.signtop .back {
		top: 30px;
		left: 15px;
		width: 60px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.signtop .signtopX .back {
		top: 22px;
	}

	.signXbar {
		position: fixed;
		top: -44px;
		width: 100%;
		background-color: #fff;
		height: 44px;
		z-index: 999999;
	}
</style>
