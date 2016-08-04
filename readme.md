#neteaseMusicApi
<p align="left">
    <a href="https://www.npmjs.com/package/neteaseMusicApi"><img src="https://img.shields.io/npm/v/neteaseMusicApi.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/neteaseMusicApi"><img src="https://img.shields.io/npm/l/neteaseMusicApi.svg" alt="License"></a>
</p>

#install
``` 
npm install neteaseMusicApi
``` 

#useage
``` javascript
var neteaseMusicApi = require('neteaseMusicApi')

neteaseMusicApi.album(34720827,function (data) {
    console.log(data);
})
``` 

#api
###search 搜索
``` javascript
neteaseMusicApi.search(name:String[,callback:function,limit:Number default:3, offset:Number default:0])
```
###topPlaylists 热门歌单
``` javascript
neteaseMusicApi.topPlaylists([callback:function,limit:Number default:50, offset:Number default:0])
```
###userPlaylists 用户歌单
``` javascript
neteaseMusicApi.userPlaylists(uid:Number[,callback:function,limit:Number default:10, offset:Number default:0])
```
###fm 私人FM
``` javascript
neteaseMusicApi.fm([callback:function])
```
###playlists 根据id获取歌单
``` javascript
neteaseMusicApi.playlists(id:Number[,callback:function])
```
###artistAlbums 根据歌手id专辑
``` javascript
neteaseMusicApi.artistAlbums(id:Number[,callback:function],limit:Number default:10, offset:Number default:0])
```
###album 根据id获取专辑
``` javascript
neteaseMusicApi.album(id:Number[,callback:function])
```
###lrc 根据id获取歌词
``` javascript
neteaseMusicApi.lrc(id:Number[,callback:function,lv:Number default:-1])
```
###song 根据id获取歌曲信息
``` javascript
neteaseMusicApi.song(id:Number[,callback:function])
```
###login 用户登陆
``` javascript
neteaseMusicApi.login(phone:Number,password:String[,callback:function,rememberLogin:Boolean default:true])
```
