const NodeCache = require( "node-cache" );
const citiesCache = new NodeCache();
const { repository: citiesRepositoty } = require('../../cities');
const { logger } = require('../../../lib/utils')

module.exports = async (cityName) => {
  let city = citiesCache.get(cityName)
  if(!city) {
    city = await citiesRepositoty.findOne({ name: cityName });
    if(!city) {
      logger.error(`City ${cityName} not found, returned default cityId.`);    
      return process.env.CITY_ID_DEFAULT ;
    }
    const ttlCacheCity = process.env.CACHE_CITY;
    citiesCache.set(cityName, city, ttlCacheCity );
  }
  return city.id;
};