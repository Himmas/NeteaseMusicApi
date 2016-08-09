/**
 * Created by kylin on 16/8/2.
 */

var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;


/**根据id获取歌单
 *  @param {number} id 歌单id
 *  @param {function} callback 回调函数
 */
var lrc = function () {
    var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var lv = arguments.length <= 2 || arguments[2] === undefined ? -1 : arguments[2];

    var option = (0, deepClone)(config.option);
    var method = 'GET';
    Object.assign(option, {
        url: config.origin+'/api/song/lyric?id='+id+'&lv='+lv,
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
module.exports = lrc;