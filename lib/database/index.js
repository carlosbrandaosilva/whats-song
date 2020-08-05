const databaseUri = process.env.MONGO_URL;
const Db = require('./mongodb');
const dbInstance = new Db();
const { logger } = require('../utils')

module.exports = {
  async close() {
    try {
      if (dbInstance) {
        logger.info('[MongoDB] Database trying to disconnect');
        await dbInstance.close();
      }
    } catch (e) {
      logger.error('Error on close DB: %j', e);
      throw e;
    }
  },
  async connect(uri) {
    const mongoConnectionUri = uri || databaseUri;
    try {
      await dbInstance.connect(mongoConnectionUri);
      logger.info('[MongoDB] Database connected');
    } catch (e) {
      logger.error('[MongoDB] Database failed to connect - ', e.message);
      throw e;
    }
  },
  getCollection(name) {
    return dbInstance.getCollection(name);
  },
  ObjectId: dbInstance.ObjectId
};
