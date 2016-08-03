var origin = 'http://music.163.com';

var option = {
    headers: {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'music.163.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36',
        'Origin': origin,
        'Referer': origin,
        },
    proxy: false,
    cookies:{
        'appver': '1.5.2'
    }
};
var config = {
    origin: origin,
    option: option
};

module.exports = config;