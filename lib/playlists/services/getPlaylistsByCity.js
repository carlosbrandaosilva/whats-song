const { getToken, getPlayListsByCategory } = require('../../clients/spotify');
const getCategoryId = require('./getCategoryId');
const getCityId = require('./getCityId');
const getWeatherData = require('./getWeatherData');
const { saveRequest } = require('../../requests/services')

module.exports = async (cityName) => {
  const cityId = await getCityId(cityName);
  const weatherData = await getWeatherData(cityId);
  const categoryId = await getCategoryId(weatherData.main.temp);
  const { token,  statusCode : statusCodeToken } = await getToken();
  if (statusCodeToken !== 200) {
    throw new Error(`Error on get token bearer, statusCode: ${statusCodeToken}, error: ${token}`)
  }
  const tokenBearer = token.access_token;
  const { playlists, statusCode : statusCodePlayList } = await getPlayListsByCategory(tokenBearer, categoryId);
  if(statusCodePlayList !== 200) {
    throw new Error(`Error on get playlists, statusCode: ${statusCodePlayList}, category: ${categoryId}, error: ${playlists}`)
  }
  let result;
  if (playlists && playlists.items) {
    result = playlists.items.map((item) => ({
      name: item.name,
      link: item.external_urls.spotify
    }));
  }
  return result;
}