/**
 * Created by kylinzhou on 16/7/31.
 */
var NeteaseApi = require('../src/app')

NeteaseApi.artistAlbums(6452,function (data) {
    console.log(data);
},10)