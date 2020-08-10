const { assert } = require('chai');
const { getToken } = require('../../../../lib/clients/spotify')
const Server = require('../../../../lib/server');
const { fixtures, nocks } = require('../../../utils');

const instanceServer = new Server();

describe('GET Token: Testes funcionais ', () => {
  before(async () => {
    instanceServer.start();
  });
  after(() => instanceServer.stop());
  afterEach(() => {
    nocks.cleanAll();    
  });
  describe('Casos de sucesso: Deve retornar, ', () => {
    it('200, deve retornar token com sucesso.', async () => {
      const tokenFixture = fixtures.token.getToken();
      const nockGetToken = nocks.spotify.getToken({ token: tokenFixture });
      const { body, statusCode } = await getToken();
      assert.deepEqual(body, tokenFixture);
      assert.isTrue(nockGetToken.isDone());
    });
  });
  describe('Casos de erro: Deve retornar, ', () => {
    it('Error ao chamar client spotify para geração de token.', async () => {
      const nockGetToken = nocks.spotify.getToken({ errorMessage: 'erro interno teste' });
      try {
        const { body, statusCode } = await getToken(); 
      } catch (error) {
        assert.deepEqual(error.message, 'erro interno teste');
      }
    });
  });
});
