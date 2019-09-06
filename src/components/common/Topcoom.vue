<template>
	<div :class="[{'isIPhoneXsign':isIPhoneXsign,'phoneModelsign':phoneModelsign},'topbar']">
	</div>
</template>

<script>
	import {isIPhoneX} from '@/assets/js/share.js'
	import {unit} from '@/assets/js/device.js'
	export default {
		name: 'Footcoom',
		data() {
			return {
				isIPhoneXsign:false,
				phoneModelsign:false
			}
		},
		created() {
			this.isIPhoneXsign = isIPhoneX()
			//判断手机机型
			this.phoneModelEight()
		},
		methods: {
			phoneModelEight(){
				var phoneModel = unit().getModels().join(' or ')
				if (phoneModel == 'iPhone 8' || phoneModel =='iPhone 7 Plus'|| phoneModel =='iPhone 8 Plus'||phoneModel =='iPhone 6s Plus' || phoneModel == 'iPhone 6 Plus'||phoneModel =='iPhone 6'||phoneModel =='iPhone 6s'||phoneModel =='iPhone 7') {
					this.phoneModelsign = true
				}else{
					this.phoneModelsign = false
				}
			},
		}
	}
</script>
<style scoped>
	.topbar {
		/* background-color: #0f0736; */
		background-color: white;
		height: 2.45rem!important;
		/* position: absolute; */
		position: fixed;
		top: -2.45rem;
		left: 0;
		width: 100%;
		z-index: 4000;
	}
	.phoneModelsign{
		height: 1.3rem;
	}
	.isIPhoneXsign{
		height: 2.75rem;
		top: -2.45rem;
	}
</style>
