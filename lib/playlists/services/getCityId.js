const { repository: citiesRepositoty } = require('../../cities');
const { logger } = require('../../../lib/utils')

module.exports = async (cityName) => {
  const city = await citiesRepositoty.findOne({ name: cityName });
  if(!city) {
    logger.error(`City ${cityName} not found, returned default cityId.`);    
    return process.env.CITY_ID_DEFAULT;
  }
  return city.externalId;
};