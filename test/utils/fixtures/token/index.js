const Chance = require('chance');

const chance = new Chance();

const create = (data = {}) => {
  const token = {
    access_token: chance.hash(),
    token_type: 'Bearer',
    expires_in: 3600,
    scope: ""
  }
  return token;
};

module.exports = {
  create
};
