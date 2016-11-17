/**
 * Created by kylinzhou on 16/8/2.
 */
var NeteaseApi = require('../src/app')

NeteaseApi.song(327233,function (data) {
    console.log(data);
})