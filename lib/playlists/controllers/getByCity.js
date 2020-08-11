const { getPlaylistsByCity } = require('../services');
const { logger } = require('../../utils')

module.exports = async (req, res) => {
  try {
    const { params: { city } } = req
    const streamingName = process.env.STREAMING_NAME;
    const playlists = await getPlaylistsByCity(city, streamingName);
    res.json(playlists);
  } catch (error) {
    logger.error('Error. %o', error);
    res.sendStatus(500);
  }
};
