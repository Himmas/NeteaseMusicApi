#API
###search 搜索
``` javascript
api.search(name:String,[callback:function,limit:Number default:3, offset:Number default:0])
```
###topPlaylists 热门歌单
``` javascript
api.topPlaylists([callback:function,limit:Number default:50, offset:Number default:0])
```
###userPlaylists 用户歌单
``` javascript
api.userPlaylists(uid:Number,[callback:function,limit:Number default:10, offset:Number default:0])
```
###fm 私人FM
``` javascript
api.fm([callback:function])
```