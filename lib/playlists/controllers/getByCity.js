const { getPlaylistsByCity } = require('../services');
const { logger } = require('../../utils')

module.exports = async (req, res) => {
  try {
    const { params: { city } } = req
    const playlists = await getPlaylistsByCity(city);
    if (!playlists) {
      logger.error('Error not content.');
      res.sendStatus(204);
    }
    res.json(playlists);
  } catch (error) {
    logger.error('Error. %o', error);
    res.sendStatus(500);
  }
};
