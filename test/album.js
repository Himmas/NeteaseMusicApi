/**
 * Created by kylinzhou on 16/8/2.
 */
var NeteaseApi = require('../src/app')

NeteaseApi.album(34720827,function (data) {
    console.log(data);
})