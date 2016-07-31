/**
 * Created by kylin on 16/7/31.
 */
var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;


/**获取用户歌单
 *  @param {number} uid 用户id
 *  @param {function} callback 回调函数
 *  @param {number} offset 分页偏移量
 *  @param {number} limit 返回条数
 */
var userPlaylists = function () {
    var uid = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var limit = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];
    var offset = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

    var option = (0, deepClone)(config.option);
    var method = 'GET';
    Object.assign(option, {
        url: config.origin+'/api/user/playlist?offset='+offset+'&limit='+limit+'&uid='+uid,
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
module.exports = userPlaylists;