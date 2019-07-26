<template>
	<view>
	<view class="hot-song-top">
		<text class="hotsong-title">{{title}}</text>
		<text class="hot-more">更多></text>
	</view>
	<view class="music-list">
		<view class="music-item" v-for="item in songData" >
			<image :src="item.picurl" mode="widthFix"></image>
			<text class="music-title">{{item.name}}</text>
			<text class="music-singer">{{item.singer}}</text>
		</view>
	</view>
	</view>
</template>
<script>
	export default {
		props:{
			songData:{
				type:Array,
				default:[],
			},
			title:{
				type:String,
				default:'',
			}
		},
		data() {
			return {
				
			};
		},
		
		
	}
</script>

<style>
.hotsong-title{
	font-size:32upx;
	font-weight: bold;
}
.hot-more{
	font-size: 28upx;
	color: #666;
	float: right;
	margin-top: 10upx;
}
.music-list{
	display: flex;
	flex-direction: row;
	margin-top: 20upx;
	display: -webkit-flex;
    justify-content: justify-content;
    flex-wrap: wrap;
}
.music-item{
	width: 30%;
	margin: 0 11upx 30upx 11upx;
}
.music-item image{
	width: 100%;
	margin-bottom: 0 !important;
}
.music-item text{
	width: 100%;
	height: 30upx;
	whitespace:nowrap;
	text-overflow:ellipsis;
	overflow: hidden;
	line-height: 30upx;
	
}
.music-title{
	font-size: 28upx;
	color: #000;
	display: inline-block;
}
.music-singer{
	font-size: 22upx;
	color: #666;
	display: block;
}
</style>
