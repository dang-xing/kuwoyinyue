export default class song{
	constructor({id,name,singer,picurl,url}){
		this.id=id;
		this.name=name;
		this.singer=singer;
		this.picurl=picurl;
		this.url=url;
	}
}
export function creatSong(data){
	return new song({
		id:data.id,
		name:data.name,
		singer:data.artists[0].name,
		picurl:data.album.picUrl,
		url:`https://music.163.com/song/media/outer/url?id=${data.id}.mp3`
	})
}
