/**
 * Created by kylin on 16/7/27.
 */

var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;

var aesRsaEncrypt = require('../aesRsaEncrypt')

var node_cryptojs = require('node-cryptojs-aes');

var md5 = require('md5')

var login = function () {
    var phone = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var password = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var callback = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
    var rememberLogin = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
    var textObj = {
        phone:phone,
        password:md5(password),
        rememberLogin:rememberLogin,
        csrf_token:"3f053fd8a3aa37f56dd0ec02405e5e99"
    }

    var setOpt = {
        Text: JSON.stringify(textObj),
        pubKey: "010001",
        nonce: '0CoJUm6Qyw8W8jud',
        modulus: '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    }
    var passObj = aesRsaEncrypt(setOpt.Text, setOpt.pubKey, setOpt.modulus, setOpt.nonce);

    var option = (0, deepClone)(config.option);
    var method = 'POST';
    Object.assign(option, {
        url: 'https://music.163.com/weapi/login/cellphone/',
        form: {
            params: passObj.encText,
            encSecKey: passObj.encSecKey
        },
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
module.exports = login;