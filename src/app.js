/**
 * Created by lijie on 16/7/27.
 */
var search = require('./api/search');
var login = require('./api/login');
var topPlaylists = require('./api/topPlaylists')

var NeteaseApi = {
    search: search,
    topPlaylists:topPlaylists,
    login:login
};
module.exports = NeteaseApi;