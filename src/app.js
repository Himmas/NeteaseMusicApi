/**
 * Created by lijie on 16/7/27.
 */
var search = require('./api/search');
var login = require('./api/login');
var topPlaylists = require('./api/topPlaylists')
var userPlaylists = require('./api/usePlaylists')
var fm = require('./api/fm')

var NeteaseApi = {
    search: search,
    topPlaylists:topPlaylists,
    login:login,
    userPlaylists:userPlaylists,
    fm:fm
};
module.exports = NeteaseApi;