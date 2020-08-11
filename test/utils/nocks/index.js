const nock = require('nock');
const spotify = require('./spotify');
const openWeather = require('./open-weather');
const { cleanAll } = nock;

module.exports = {
  cleanAll,
  spotify,
  openWeather
}