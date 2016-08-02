/**
 * Created by kylinzhou on 16/8/2.
 */
var NeteaseApi = require('../src/app')

NeteaseApi.song(411921852,function (data) {
    console.log(data);
})