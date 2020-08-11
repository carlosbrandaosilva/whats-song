const getPlaylistsByCity = require('./getPlaylistsByCity')
const getCityId = require('./getCityId')
const getCategoryId = require('./getCategoryId')
const getTemperature = require('./getTemperature')
const { streamingsStrategy } = require('./strategies/streamings');

module.exports = {
  getPlaylistsByCity,
  getCityId,
  getCategoryId,
  getTemperature,
  streamingsStrategy
}