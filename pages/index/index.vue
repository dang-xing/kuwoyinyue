<template>
	<view class="hot-song">
		<view>
		<view class="hot-song-top">
			<text class="hotsong-title">{{title}}</text>
			<text class="hot-more">更多></text>
		</view>
		<view class="music-list">
			<view class="music-item" v-for="(item,index) in songData" @click="selectItem(index)" :key='index'>
				<image :src="item.picurl" mode="scaleToFill" lazy-load='true'></image>
				<text class="music-title">{{item.name}}</text>
				<text class="music-singer">{{item.singer}}</text>
			</view>
		</view>
		</view>
		<view>
		<view class="hot-song-top">
			<text class="hotsong-title">{{title1}}</text>
			<text class="hot-more">更多></text>
		</view>
		<view class="music-list">
			<view class="music-item" v-for="(item,index) in newSongData" @click="newselectItem(index)" :key='index'>
				<image :src="item.picurl" mode="scaleToFill" lazy-load='true'></image>
				<text class="music-title">{{item.name}}</text>
				<text class="music-singer">{{item.singer}}</text>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	import {creatSong} from '../../static/js/song.js'
	export default {
		data() {
			return {
				songData:[],
				title:'热门歌曲',
				title1:'新歌推荐',
				newSongData:[],
			}
		},
		onLoad() {
			this.hotSong();
		},
		onShow(){
			this.newSong();
		},
		methods: {
			hotSong:function(){
				uni.request({
					url:'http://music.cyxlove.cn/top/song?type=7',
					success:(res)=>{
						if(res.data.data !=''){
							this.songData=this._initSongdata(res.data.data);
							this.songData.splice(6,100);
						}
					}	
				})
			},
			newSong:function(){
				uni.request({
					url:'http://music.cyxlove.cn/personalized/newsong',
					success:(res)=>{
						if(res.data.result !=''){
							this.newSongData=this._initSongdata(res.data.result);
							this.newSongData.splice(6,10);
						}
					}
				})
			},
			_initSongdata:function(list){
				let ret=[];
				list.forEach((item)=>{
					if(item.song ==undefined){
						let data=item
						ret.push(creatSong(data))
					}else{
						let data=item.song
						ret.push(creatSong(data))
					}
				})
				return ret
			},
			selectItem:function(index) {
				uni.setStorage({
					key:'playData',
					data:this.songData[index],
					success: () => {
						uni.switchTab({
							url: '/pages/play/play'
						});
					}
				})
			},
			newselectItem:function(index){
				uni.setStorage({
					key:'playData',
					data:this.newSongData[index],
					success: () => {
						uni.switchTab({
							url: '/pages/play/play'
						});
					}
				})
			}
		},
	}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}

.hot-song{
	box-sizing: border-box;
	padding: 15upx 20upx;
}
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
	will-change: transform;
	height: 180upx !important;
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
