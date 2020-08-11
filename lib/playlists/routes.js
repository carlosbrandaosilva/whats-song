const { getByCity } = require('./controllers');
const { isAuthenticated } = require('../authorization/authorization-bearer-strategy');

const playlistsRoutes = (router) => {
  router.get('/cities/:city/playlists', isAuthenticated, getByCity);
};

module.exports = playlistsRoutes;