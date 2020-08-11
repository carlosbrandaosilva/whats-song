const Chance = require('chance');

const chance = new Chance();

const create = (data = {}) => {
  const weather = {
    main: {
      temp: data.temp || 23.76
    },
    name: 'London',
}
  return weather;
};

module.exports = {
  create
};
