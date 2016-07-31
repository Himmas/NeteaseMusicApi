/**
 * Created by kylinzhou on 16/7/31.
 */
var NeteaseApi = require('../src/app')

NeteaseApi.playlists(433856560,function (data) {
    console.log(data);
})