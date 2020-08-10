const request = require('supertest');
const { assert } = require('chai');
const Server = require('../../../../lib/server');
const { fixtures, nocks } = require('../../../utils');
const { repository: citiesRepository } = require('../../../../lib/cities')

const instanceServer = new Server();

describe('GET Categories: Testes funcionais ', () => {
  let app;
  before(() => {
    instanceServer.defineConfig();
    ({ app } = instanceServer);
  });
  after(() => instanceServer.stop());
  afterEach(() => {
    nocks.cleanAll();    
  });
  describe('Casos de sucesso: Deve retornar, ', () => {
    it.only('200, Get playlists por cidade de categoria pop retornadas com sucesso.', async () => {
      const cityFixtures = fixtures.cities.getCity({ name: 'London' });
      await citiesRepository.insertOne(cityFixtures);
      const categoryId = 'pop';
      const city = 'london';
      const playlistsFixtures = fixtures.playlists.getPlaylistsByCategory();
      const tokenFixture = fixtures.token.getToken();
      // const nockGetToken = nocks.spotify.getToken({ token: tokenFixture });
      // const nockGetPlaylists = nocks.spotify.getPlaylistsByCategory(
      //   { playlists: playlistsFixtures, categoryId }
      // );
      const playlistExpected = [
        {
          name: playlistsFixtures.playlists.items[0].name,
          link: playlistsFixtures.playlists.items[0].external_urls.spotify
        }
      ];
      const { statusCode, body } = await request(app)
        .get(`/cities/${city}/playlists`);
      
      assert.deepEqual(statusCode, 200);
      assert.deepEqual(body, playlistExpected);
      assert.isTrue(nockGetToken.isDone());
      assert.isTrue(nockGetPlaylists.isDone());
    });
    it('200, Get playlists por cidade de categoria rock retornadas com sucesso.', async () => {
    });
    it('200, Get playlists por cidade de categoria classica retornadas com sucesso.', async () => {
    });
    it('200, Get playlists com nome da cidade não encontrado retornado playlists com sucesso baseado na cidade default.', async () => {      
    });
    it('204,', async () => {
    });
  });
  describe('Casos de erro: Deve retornar, ', () => {
    it('500, error ao chamar api do spotify getToken.', async () => {      
    });
    it('500, error ao chamar api de clima.', async () => {      
    });
    it('500, error ao chamar api do spotify getPlaylist.', async () => {      
    });
  });
});
