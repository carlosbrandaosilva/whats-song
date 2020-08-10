const nock = require('nock');

module.exports = {
  cleanAll: nock.cleanAll,
  getToken(options = {}) {
    const url = options.url || process.env.SPOTIFY_URL_TOKEN
    if (options.errorMessage) {
      return nock(url)
        .post('/api/token')
        .replyWithError(options.errorMessage);
    }
    return nock(url)
      .post('/api/token')
      .reply(options.statusCode || 200, options.token || {});
  },
  getPlaylistsByCategory(options = {}) {
    const url = options.url || process.env.SPOTIFY_URL_API
    if (options.errorMessage) {
      return nock(url)
        .get(`/browse/categories/${options.categoryId}/playlists`)
        .replyWithError(options.errorMessage);
    }
    return nock(url)
      .get(`/browse/categories/${options.categoryId}/playlists`)
      .reply(options.statusCode || 200, options.playlists || {});
  }
};
