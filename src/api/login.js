/**
 * Created by kylin on 16/7/27.
 */

var request = require('request');

var config = require('../config');

var deepClone = require('../util').deepClone;

var login = function () {

    var option = (0, deepClone)(config.option);
    var method = 'POST';
    // var setOpt = {
    //     Text: JSON.stringify({phone:"",password:"",rememberLogin:"true"}),
    //     pubKey: 010001,
    //     nonce: '0CoJUm6Qyw8W8jud',
    //     modulus: '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    // }
    // function aesRsaEncrypt(text, pubKey, modulus, nonce) {
    //     var secKey = createSecretKey(16);
    //     return {
    //         encText : aesEncrypt(aesEncrypt(text, nonce), secKey),
    //         encSecKey : rsaEncrypt(secKey, pubKey, modulus)
    //     }
    // }
    // var formObj = aesRsaEncrypt(setOpt.Text,setOpt.pubKey,setOpt.modulus,setOpt.nonce)
    //
    // Object.assign(option, {
    //     url: 'https://music.163.com/weapi/login/cellphone/',
    //     form:{},
    //     method: method
    // });
    //
    // request(option, function (err, res, body) {
    //     if (!err && res.statusCode == 200) {
    //         var info = JSON.parse(body);
    //         console.log(body);
    //     } else {
    //         console.error(err);
    //     }
    // });
}
module.exports = login;