const { requestPromiseWrapper} = require('../../utils');
const appId = process.env.OPEN_WEATHER_APP_ID;
const url = process.env.OPEN_WEATHER_MAP_URL;

module.exports = {
  async getWeatherDataById(cityId) {
    const { body, httpResponse } = await requestPromiseWrapper({
      url: `${url}/data/2.5/weather?id=${cityId}&appid=${appId}&units=metric`,
      method: 'GET',
      json: true
    });
    return {
      statusCode: httpResponse.statusCode,
      weatherData: body
    };
  }
};
