const mongo = require('mongodb').MongoClient;

const dropModule = (() => {
  const dropDatabase = async () => {
    const mongodbUri = process.env.MONGO_URL_TEST;
    const client = await mongo.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await client.db().dropDatabase();
    await client.close();
  };

  return {
    dropDatabase
  };
})();

module.exports = dropModule;
