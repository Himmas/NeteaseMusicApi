/**
 * Created by kylin on 16/7/27.
 */
var NeteaseApi = require('../src/app')

NeteaseApi.topPlaylists(function (data) {
    console.log(JSON.parse(data).playlists);
},5)
