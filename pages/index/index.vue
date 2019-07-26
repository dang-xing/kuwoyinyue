<template>
	<view class="hot-song">
		<music-list :songData='songData' :title="title"></music-list>
		<music-list :songData="newSongData" :title="title1"></music-list>
	</view>
</template>

<script>
	import MusicList from '@/components/music-list.vue'
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
						console.log(this.newSongData)
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
						console.log(data);
						ret.push(creatSong(data))
					}
				})
				return ret
			},
		},
		components:{
			MusicList,
		}
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

</style>
