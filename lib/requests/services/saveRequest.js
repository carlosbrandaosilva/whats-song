const { insertOne } = require('../repository');
const { logger } = require('../../utils')

module.exports = async (city, temperature, category) => {
  const request = { 
    city, 
    temperature,
    category,
    created: new Date() 
  }
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