/**
 * Created by kylin on 16/8/8.
 */
var NeteaseApi = require('../src/app')

NeteaseApi.dailyRecommend(function(data){
    console.log(data);
})