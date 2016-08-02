/**
 * Created by kylinzhou on 16/8/2.
 */

var NeteaseApi = require('../src/app')

NeteaseApi.lrc(186001,function (data) {
    console.log(data);
})