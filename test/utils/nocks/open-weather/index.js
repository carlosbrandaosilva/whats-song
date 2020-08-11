const nock = require('nock');

module.exports = {
  cleanAll: nock.cleanAll,
  getWeatherData(options = {}) {
    const url = options.url || process.env.OPEN_WEATHER_MAP_URL
    const appId = options.appId || process.env.OPEN_WEATHER_APP_ID
    if (options.errorMessage) {
      return nock(url)
        .get(`/data/2.5/weather?id=${options.cityId}&appid=${appId}&units=metric`)
        .replyWithError(options.errorMessage);
    }
    return nock(url)
      .get(`/data/2.5/weather?id=${options.cityId}&appid=${appId}&units=metric`)
      .reply(options.statusCode || 200, options.weatherData || {});
  }
};
