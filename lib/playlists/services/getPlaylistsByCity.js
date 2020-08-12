const NodeCache = require("node-cache");
const playlistCache = new NodeCache();
const getCategoryId = require('./getCategoryId');
const getTemperature = require('./getTemperature');
const { streamingsStrategy } = require('./strategies/streamings');
const { saveRequest } = require('../../requests/services')

module.exports = async (cityName, streamingName) => {
  let playlistData = playlistCache.get(cityName)
  if (!playlistData) {
    const ttlCachePlalist = process.env.CACHE_PLAYLIST;
    const temperature = await getTemperature(cityName);
    const category = await getCategoryId(temperature);
    const playlist = await streamingsStrategy[streamingName].execute(category);
    playlistData = { playlist, temperature, category };
    playlistCache.set(cityName, playlistData, ttlCachePlalist );
  }
  await saveRequest(cityName, playlistData.temperature, playlistData.category);
  return playlistData.playlist;
}