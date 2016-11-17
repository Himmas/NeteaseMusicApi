/**
 * Created by kylin on 16/7/31.
 */
var NeteaseApi = require('../src/app')

NeteaseApi.comments(30394891,function (data) {
    console.log(data);
})