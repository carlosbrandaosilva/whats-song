const request = require('supertest');
const { assert } = require('chai');
const Server = require('../../../../lib/server');
const { fixtures, nocks } = require('../../../utils');
const { repository: citiesRepository } = require('../../../../lib/cities')

const instanceServer = new Server();

describe.only('GET Categories: Testes funcionais ', () => {
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
    it('200, Get playlists por cidade de categoria rock retornadas com sucesso.', async () => {
      const city = 'Belo Horizonte';
      const cityFixtures = fixtures.cities.getCity({ name: city, externalId: 2643743 });
      await citiesRepository.insertOne(cityFixtures);
      const categoryId = 'rock';
      const playlistsFixtures = fixtures.playlists.create();
      const tokenFixture = fixtures.token.create();
      const trackFixtures = fixtures.tracks.create();
      const weatherDataFixtures = fixtures.weatherData.create();
      const nockGetToken = nocks.spotify.getToken({ token: tokenFixture });
      const nockGetPlaylists = nocks.spotify.getPlaylistsByCategory(
        { playlists: playlistsFixtures, categoryId }
      );
      const [ playList ] = playlistsFixtures.playlists.items;
      const nockGetPlaylistTracks = nocks.spotify.getPlaylistTracks(
        { tracks: trackFixtures, playlistId: playList.id }
      );
      const nockGetWeatherData = nocks.openWeather.getWeatherData(
        { cityId: cityFixtures.externalId, weatherData: weatherDataFixtures }
      );
      const playlistExpected = trackFixtures.items.map((item) => ({
        name: item.track.name,
        link: item.track.external_urls.spotify
      }));
      const { statusCode, body } = await request(app)
        .get(`/cities/${city}/playlists`);
      
      assert.deepEqual(statusCode, 200);
      assert.deepEqual(body, playlistExpected);
      assert.isTrue(nockGetToken.isDone());
      assert.isTrue(nockGetPlaylists.isDone());
      assert.isTrue(nockGetPlaylistTracks.isDone());
      assert.isTrue(nockGetWeatherData.isDone());
    });
    it('200, Get playlists por cidade de categoria pop retornadas com sucesso.', async () => {
      const city = 'Belo Horizonte';
      const cityFixtures = fixtures.cities.getCity({ name: city, externalId: 2643743 });
      await citiesRepository.insertOne(cityFixtures);
      const categoryId = 'pop';
      const playlistsFixtures = fixtures.playlists.create();
      const tokenFixture = fixtures.token.create();
      const trackFixtures = fixtures.tracks.create();
      const weatherDataFixtures = fixtures.weatherData.create({ temp: 26 });
      const nockGetToken = nocks.spotify.getToken({ token: tokenFixture });
      const nockGetPlaylists = nocks.spotify.getPlaylistsByCategory(
        { playlists: playlistsFixtures, categoryId }
      );
      const [ playList ] = playlistsFixtures.playlists.items;
      const nockGetPlaylistTracks = nocks.spotify.getPlaylistTracks(
        { tracks: trackFixtures, playlistId: playList.id }
      );
      const nockGetWeatherData = nocks.openWeather.getWeatherData(
        { cityId: cityFixtures.externalId, weatherData: weatherDataFixtures }
      );
      const playlistExpected = trackFixtures.items.map((item) => ({
        name: item.track.name,
        link: item.track.external_urls.spotify
      }));
      const { statusCode, body } = await request(app)
        .get(`/cities/${city}/playlists`);
      
      assert.deepEqual(statusCode, 200);
      assert.deepEqual(body, playlistExpected);
      assert.isTrue(nockGetToken.isDone());
      assert.isTrue(nockGetPlaylists.isDone());
      assert.isTrue(nockGetPlaylistTracks.isDone());
      assert.isTrue(nockGetWeatherData.isDone());
    });
    it('200, Get playlists por cidade de categoria classica retornadas com sucesso.', async () => {
      const city = 'Belo Horizonte';
      const cityFixtures = fixtures.cities.getCity({ name: city, externalId: 2643743 });
      await citiesRepository.insertOne(cityFixtures);
      const categoryId = 'classic';
      const playlistsFixtures = fixtures.playlists.create();
      const tokenFixture = fixtures.token.create();
      const trackFixtures = fixtures.tracks.create();
      const weatherDataFixtures = fixtures.weatherData.create({ temp: 3 });
      const nockGetToken = nocks.spotify.getToken({ token: tokenFixture });
      const nockGetPlaylists = nocks.spotify.getPlaylistsByCategory(
        { playlists: playlistsFixtures, categoryId }
      );
      const [ playList ] = playlistsFixtures.playlists.items;
      const nockGetPlaylistTracks = nocks.spotify.getPlaylistTracks(
        { tracks: trackFixtures, playlistId: playList.id }
      );
      const nockGetWeatherData = nocks.openWeather.getWeatherData(
        { cityId: cityFixtures.externalId, weatherData: weatherDataFixtures }
      );
      const playlistExpected = trackFixtures.items.map((item) => ({
        name: item.track.name,
        link: item.track.external_urls.spotify
      }));
      const { statusCode, body } = await request(app)
        .get(`/cities/${city}/playlists`);
      
      assert.deepEqual(statusCode, 200);
      assert.deepEqual(body, playlistExpected);
      assert.isTrue(nockGetToken.isDone());
      assert.isTrue(nockGetPlaylists.isDone());
      assert.isTrue(nockGetPlaylistTracks.isDone());
      assert.isTrue(nockGetWeatherData.isDone());
    });
  });
  describe('Casos de erro: Deve retornar, ', () => {
    it('500, error ao chamar api do spotify getToken.', async () => {
      const city = 'Belo Horizonte';
      const cityFixtures = fixtures.cities.getCity({ name: city, externalId: 2643743 });
      await citiesRepository.insertOne(cityFixtures);
      const weatherDataFixtures = fixtures.weatherData.create({ temp: 3 });
      const nockGetWeatherData = nocks.openWeather.getWeatherData(
        { cityId: cityFixtures.externalId, weatherData: weatherDataFixtures }
      );
      const nockGetToken = nocks.spotify.getToken({ errorMessage: 'internalError' });      
      const { statusCode, body } = await request(app)
        .get(`/cities/${city}/playlists`);
      
      assert.deepEqual(statusCode, 500);
      assert.isTrue(nockGetToken.isDone());
      assert.isTrue(nockGetWeatherData.isDone());
    });
    it('500, error ao chamar api de clima.', async () => {
      const city = 'Belo Horizonte';
      const cityFixtures = fixtures.cities.getCity({ name: city, externalId: 2643743 });
      await citiesRepository.insertOne(cityFixtures);
      const nockGetWeatherData = nocks.openWeather.getWeatherData(
        { cityId: cityFixtures.externalId, errorMessage: 'internalError' }
      );
      const nockGetToken = nocks.spotify.getToken();      
      const { statusCode, body } = await request(app)
        .get(`/cities/${city}/playlists`);
      
      assert.deepEqual(statusCode, 500);
      assert.isTrue(nockGetWeatherData.isDone());
      assert.isFalse(nockGetToken.isDone());
    });
    it('500, error ao chamar api do spotify getPlaylist.', async () => {
      const city = 'Belo Horizonte';
      const cityFixtures = fixtures.cities.getCity({ name: city, externalId: 2643743 });
      await citiesRepository.insertOne(cityFixtures);
      const categoryId = 'classic';
      const tokenFixture = fixtures.token.create();
      const trackFixtures = fixtures.tracks.create();
      const weatherDataFixtures = fixtures.weatherData.create({ temp: 3 });
      const nockGetToken = nocks.spotify.getToken({ token: tokenFixture });
      const nockGetWeatherData = nocks.openWeather.getWeatherData(
        { cityId: cityFixtures.externalId, weatherData: weatherDataFixtures }
      );
      const nockGetPlaylists = nocks.spotify.getPlaylistsByCategory(
        { errorMessage: 'internalError', categoryId }
      );
      const nockGetPlaylistTracks = nocks.spotify.getPlaylistTracks();

      const { statusCode, body } = await request(app)
        .get(`/cities/${city}/playlists`);
      
      assert.deepEqual(statusCode, 500);
      assert.isTrue(nockGetToken.isDone());
      assert.isTrue(nockGetPlaylists.isDone());      
      assert.isTrue(nockGetWeatherData.isDone());
      assert.isFalse(nockGetPlaylistTracks.isDone());
    });
  });
});
