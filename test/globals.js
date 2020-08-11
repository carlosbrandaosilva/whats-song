const sha256 = require('sha256');
const { dropDatabase } = require('./database/drop-database');
const authorizationRepository = require('../lib/authorization/repository');
const database = require('../lib/database');
require('dotenv').config()

before('Sobrescreve a url do banco e add token default', async () => {
  await database.connect(process.env.MONGO_URL_TEST);
  const authTokenFixture = {
    clientId: 'ingaia',
    token: sha256('senha'),
    userId: 'ingaiaTeste',
  };
  await authorizationRepository.insertOne(authTokenFixture);
});

after('Remove a base de dados usada para testes', async () => {
  await dropDatabase();
  await database.close();
});
