const { getByCity } = require('./controllers');

const playlistsRoutes = (router) => {
  router.get('/cities/:city/playlists', getByCity);
};

module.exports = playlistsRoutes;