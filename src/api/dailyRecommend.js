/**
 * Created by kylin on 16/8/8.
 */
var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;

var aesRsaEncrypt = require('../aesRsaEncrypt')

var md5 = require('md5')

var dailyRecommend = function () {
    var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    var textObj = {
        offset:0,
        total:true,
        limit:20,
        csrf_token:"527d916aef401b0e45626603beedbcc3"
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
        url: 'http://music.163.com/weapi/v1/discovery/recommend/songs',
        form: {
            params: 'Yvb7Q0P4BfMDo/gdEbGbwJQbxM0f5b2AG3MvkxDSJ6tF+mIWvYUzjGoPzvkuWET/G/ykoMpYi2rr4eDN5WpW4KG3L05R0TSTm5/mRGTx0I8ITYDw2f9jVKr1LD5o4PkgLvvhY9klLgHB4mLpBqn8dmcYWjj885pDm9M4g+G5j5ooJ8fUwDviNvcNOy2vwSzP',
            encSecKey: '471ed0911ca380fa4f65e2fb7a41a7c032811f60a265b7ae87901b86ab0614ef3bc0201599657a5de119d7b79293da8cfce658c1f5330e2649bb8f2fdfaee4d3bf2f37791d787fb79154a0d09cca2adc002ba7fae51372b960178315480e85e0d8141e3ec2caea10ab55cf79270cca1036f67a5fba95985520ee8f4d02e98963'
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
module.exports = dailyRecommend;