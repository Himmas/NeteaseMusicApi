/**
 * Created by kylin on 16/7/31.
 */
var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;


/**获取fm
 *  @param {function} callback 回调函数
 */
var fm = function () {
    var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    var option = (0, deepClone)(config.option);
    var method = 'GET';
    Object.assign(option, {
        url: config.origin+'/api/radio/get',
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
module.exports = fm;