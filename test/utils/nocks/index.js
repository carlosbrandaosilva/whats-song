const nock = require('nock');
const spotify = require('./spotify');
const { cleanAll } = nock;

module.exports = {
  cleanAll,
  spotify
}