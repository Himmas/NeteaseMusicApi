#API
###search 搜索
``` javascript
api.search(name:String[,callback:function,limit:Number default:3, offset:Number default:0])
```
###topPlaylists 热门歌单
``` javascript
api.topPlaylists([callback:function,limit:Number default:50, offset:Number default:0])
```
###userPlaylists 用户歌单
``` javascript
api.userPlaylists(uid:Number[,callback:function,limit:Number default:10, offset:Number default:0])
```
###fm 私人FM
``` javascript
api.fm([callback:function])
```
###playlists 根据id获取歌单
``` javascript
api.playlists(id:Number[,callback:function])
```
###artistAlbums 根据歌手id专辑
``` javascript
api.artistAlbums(id:Number[,callback:function],limit:Number default:10, offset:Number default:0])
```
###album 根据id获取专辑
``` javascript
api.album(id:Number[,callback:function])
```
###lrc 根据id获取歌词
``` javascript
api.lrc(id:Number[,callback:function,lv:Number default:-1])
```
###song 根据id获取歌曲信息
``` javascript
api.song(id:Number[,callback:function])
```
