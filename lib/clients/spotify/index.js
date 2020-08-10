const { requestPromiseWrapper } = require('../../utils');

module.exports = {
  async getToken() {
    const urlToken = process.env.SPOTIFY_URL_TOKEN;
    const { body, httpResponse } = await requestPromiseWrapper({
      url: `${urlToken}/api/token`,
      method: 'POST',
      body: 'grant_type=client_credentials',
      json: true,
      headers: {
        Authorization: `Basic ${process.env.TOKEN_BASIC}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return {
      statusCode: httpResponse.statusCode,
      token: body
    };
  },
  async getCategories(bearerToken) {
    const urlApi = process.env.SPOTIFY_URL_API;
    const { body, httpResponse } = await requestPromiseWrapper({
      url: `${urlApi}/browse/categories`,
      method: 'GET',
      json: true,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
      }
    });
    return {
      statusCode: httpResponse.statusCode,
      categories: body.categories
    };
  },
  async getPlayListsByCategory(bearerToken, categoryId) {
    const urlApi = process.env.SPOTIFY_URL_API;
    const { body, httpResponse } = await requestPromiseWrapper({
      url: `${urlApi}/browse/categories/${categoryId}/playlists`,
      method: 'GET',
      json: true,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
      }
    });
    return {
      statusCode: httpResponse.statusCode,
      playlists: body.playlists
    };
  }
};
