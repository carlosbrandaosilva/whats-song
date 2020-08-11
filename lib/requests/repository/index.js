const db = require('../../database');

const COLLECTION_NAME = 'requests';

const requestsRepository = (() => {
  const findOne = (filter, options = {}) => db.getCollection(COLLECTION_NAME)
    .findOne(filter, options);
  const insertOne = (request) => db.getCollection(COLLECTION_NAME).insertOne(request);
  const aggregate = (pipeline) => db.getCollection(COLLECTION_NAME).aggregate(pipeline);

  return {
    findOne,
    insertOne,
    aggregate
  };
})();

module.exports = requestsRepository;
