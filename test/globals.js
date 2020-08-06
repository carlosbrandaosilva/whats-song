const { dropDatabase } = require('./database/drop-database');
const database = require('../lib/database');
require('dotenv').config()

before('Sobrescreve a url do banco e add token default', async () => {
  await database.connect(process.env.MONGO_URL_TEST);
});

after('Remove a base de dados usada para testes', async () => {
  await dropDatabase();
  await database.close();
});
