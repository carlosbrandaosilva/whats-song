const db = require('../../database');

const COLLECTION_NAME = 'cities';

const citiesRepository = (() => {
  const findOne = (filter, options = {}) => db.getCollection(COLLECTION_NAME)
    .findOne(filter, options);
  const insertMany = (cities) => db.getCollection(COLLECTION_NAME).insertMany(cities);
  const insertOne = (city) => db.getCollection(COLLECTION_NAME).insertOne(city);

  return {
    findOne,
    insertMany,
    insertOne
  };
})();

module.exports = citiesRepository;
