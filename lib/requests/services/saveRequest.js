const { insertOne } = require('../repository');
const { logger } = require('../../utils')

module.exports = async (cityName) => {
  const request = { city: cityName, created: new Date() }
  try {
    const insertResult = await insertOne(request);  
    if(!insertResult.insertedId) {
      throw new Error();
    }
    return insertResult;
  } catch (error) {
    logger.error('Error insert request.')
  }  
}