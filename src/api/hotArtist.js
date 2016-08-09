/**
 * Created by kylin on 16/8/8.
 */
var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;


/**热门歌手
 *  @param {function} callback 回调函数
 *  @param {number} limit 返回条数
 *  @param {number} offset 分页偏移量
 */
var hotArtist = function () {
    var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var limit = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];
    var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

    var option = (0, deepClone)(config.option);

    var method = 'GET';
    Object.assign(option, {
        url: config.origin+'/api/artist/top?offset='+offset+'&limit='+limit+'&total=false',
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
module.exports = hotArtist;