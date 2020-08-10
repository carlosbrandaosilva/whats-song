const { insertOne } = require('../repository');
const { logger } = require('../../utils')

module.exports = async (request) => {
  const insertResult = await insertOne(request);  
  if(!insertResult.insertedId) {
    logger.error('Error insert request.')
  }
  return insertResult;
}