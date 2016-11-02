var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;


/**
 * 根据歌曲id获取歌曲评论
 *  @param {number} id 歌曲id
 *  @param {function} callback 回调函数
 */
var comments = function () {
    var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    var option = (0, deepClone)(config.option);
    var method = 'GET';
    Object.assign(option, {
        url: config.origin+'/api/v1/resource/comments/R_SO_4_'+id+'/?rid=R_SO_4_'+id+'&offset=0&total=false&limit=100',
        method: method
    });
    request(option, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            var info = JSON.parse(body);
            callback && callback(JSON.stringify(info, '', 2));
        } else {
            console.error(err);
        }
    });
}
module.exports = comments; 
