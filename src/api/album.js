/**
 * Created by kylin on 16/8/1.
 */
var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;


/**根据id获取专辑
 *  @param {number} id 专辑id
 *  @param {function} callback 回调函数
 */
var album = function () {
    var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


    var option = (0, deepClone)(config.option);
    var method = 'GET';
    Object.assign(option, {
        url: config.origin+'/api/album/'+id,
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
module.exports = album;