/**
 * Created by kylin on 16/8/2.
 */
var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;


/**根据id获取歌曲
 *  @param {number} id 歌曲id
 *  @param {function} callback 回调函数
 */
var song = function () {
    var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


    var option = (0, deepClone)(config.option);
    var method = 'GET';
    Object.assign(option, {
        url: config.origin+'/api/song/detail?ids=%5B'+id+'%5d',
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
module.exports = song;