const { getWeatherDataById } = require('../../clients/open-weather-map');
const { logger } = require('../../utils')

module.exports = async (cityId) => {
  const { statusCode, weatherData } = await getWeatherDataById(cityId);
  //cache redis
  if(statusCode !== 200) {
    throw new Error(`Error getWeather statusCode: ${statusCode}, error: ${weatherData}`);
  }
  return weatherData;
};