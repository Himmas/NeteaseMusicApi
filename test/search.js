/**
 * Created by kylin on 16/7/27.
 */
var NeteaseApi = require('../src/app')

NeteaseApi.search('周杰伦',function (data) {
    console.log(data);
},10,0,2)