/**
 * Created by lijie on 16/7/27.
 */
var search = require('./api/search');
var login = require('./api/login');
var topPlaylists = require('./api/topPlaylists')
var userPlaylists = require('./api/userPlaylists')
var fm = require('./api/fm')
var playlists = require('./api/playlists')
var artistAlbums = require('./api/artistAlbums')

var NeteaseApi = {
    search: search,
    topPlaylists:topPlaylists,
    login:login,
    userPlaylists:userPlaylists,
    fm:fm,
    playlists:playlists,
    artistAlbums:artistAlbums
};
module.exports = NeteaseApi;