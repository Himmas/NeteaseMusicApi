/**
 * Created by kylin on 16/7/27.
 */

var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;

/**获取热门歌单
*  @param {function} callback
*  @param {number} offset 分页偏移量
*  @param {number} limit 返回条数
*/
var topPlaylists = function () {

    var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var limit = arguments.length <= 1 || arguments[1] === undefined ? 50 : arguments[1];
    var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

    var option = (0, deepClone)(config.option);
    var method = 'GET';
    Object.assign(option, {
        url: config.origin+'/api/playlist/list?&order=hot&offset='+offset+'&limit='+limit,
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
module.exports = topPlaylists;