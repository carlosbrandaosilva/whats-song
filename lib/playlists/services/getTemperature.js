const { getWeatherDataById } = require('../../clients/open-weather-map');
const getCityId = require('./getCityId');
const { logger } = require('../../utils')

module.exports = async (cityName) => {
  const cityId = await getCityId(cityName);
  const { statusCode, weatherData } = await getWeatherDataById(cityId);
  //cache node cache
  if(statusCode !== 200) {
    throw new Error(`Error getWeather statusCode: ${statusCode}, error: ${weatherData}`);
  }
  return weatherData.main.temp;
};