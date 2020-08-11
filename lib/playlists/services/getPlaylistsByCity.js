const getCategoryId = require('./getCategoryId');
const getTemperature = require('./getTemperature');
const { streamingsStrategy } = require('./strategies/streamings');
const { saveRequest } = require('../../requests/services')

module.exports = async (cityName, streamingName) => {
  const temperature = await getTemperature(cityName);
  const category = await getCategoryId(temperature);
  const playlist = await streamingsStrategy[streamingName].execute(category);
  await saveRequest(cityName, temperature, category);
  return playlist;
}