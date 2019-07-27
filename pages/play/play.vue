<template>
	<view class="song-wrap">
		<view class="song-bg">
			<view class="song-img">
			<image :src="playSongData.picurl" mode="widthFix"></image>
			<view class="song-play-btn" v-on:click="playMusic()">
				<image src="../../static/pause.png" mode="widthFix" v-if="isPlay"></image>
				<image src="../../static/play.png" mode="widthFix" v-else></image>
			</view>
			</view>
		</view>
		<view class="song-lysr">
			<view class="song-list">
				<text class="song-item">你不努力谁会看的起你</text>
				<text class="song-item">你不努力谁会看的起你</text>
				<text class="song-item">你不努力谁会看的起你</text>
				<text class="song-item">你不努力谁会看的起你</text>
				<text class="song-item active">你不努力谁会看的起你</text>
				<text class="song-item">你不努力谁会看的起你</text>
				<text class="song-item">你不努力谁会看的起你</text>
				<text class="song-item">你不努力谁会看的起你</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				playSongData:[],
				innerAudioContext:'',
				isPlay:false,
				timer:'',
			}
		},
		onLoad(){
			
		},
		onShow(){
			this.getPlayData();
		},
		methods: {
			playMusic(){
				if(this.isPlay){
					this.innerAudioContext.pause();
					this.isPlay=false;
				}else{
					this.innerAudioContext.play();
					this.isPlay=true;
				}
			},
			getPlayData:function(){
				uni.getStorage({
					key:'playData',
					success: (res) => {
						if(res.data !=''){
							this.playSongData=res.data;
							if(this.innerAudioContext==''){
								this.innerAudioContext=uni.createInnerAudioContext()
								this.innerAudioContext.src=this.playSongData.url;
								this.innerAudioContext.autoplay=true;
								this.isPlay=true;
							}else{
								this.innerAudioContext.destroy();
								this.innerAudioContext=uni.createInnerAudioContext()
								this.innerAudioContext.src=this.playSongData.url;
								this.innerAudioContext.autoplay=true;
								this.isPlay=true;
							}
					
						}
					}
				})
			},
			//图片旋转
			musicImgrote:function(){
				let deg=0;
				
			}
			
		}
	}
</script>

<style>
.song-wrap{
}
.song-bg{
	background-color: rgba(255,255,255,0.6);
	text-align: center;
}
.song-img {
	width: 500upx;
	height: 500upx;
	border: 10upx solid rgba(255,228,67,0.8);
	border-radius: 50%;
	display: inline-block;
	margin-top: 120upx;
	position: relative;
}
.song-img image{
	width: 100%;
	height: auto;
	border-radius: 50%;
}
.song-play-btn{
	width: 120upx;
	height: 120upx;
	background-color: rgba(000,000,000,0.5);
	position: absolute;
	left: 190upx;
	top:190upx;
	border-radius: 50%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}
.song-play-btn image{
	width: 90upx;
	display: inline-block;
	margin-left: 5upx;
}
.song-list {
	text-align: center;
	margin-top: 30upx;
	height: 300upx;
	overflow: hidden;
}
.song-list text{
	display: block;
	margin: 0 auto;
	font-size: 30upx;
	color: #666;
	height: 60upx;
	line-height: 60upx;
}
.active{
	color: #ffe443 !important;
	font-size: 36upx !important;
}
</style>
