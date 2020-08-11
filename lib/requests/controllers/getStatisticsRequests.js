const { getStatisticsRequests } = require('../services');
const { logger } = require('../../utils')

module.exports = async (req, res) => {
  try {
    const report = await getStatisticsRequests();
    res.json(report);
  } catch (error) {
    logger.error('Error. %o', error);
    res.sendStatus(500);
  }
};
