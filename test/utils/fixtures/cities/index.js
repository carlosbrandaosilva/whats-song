const Chance = require('chance');

const chance = new Chance();

const getCity = (data = {}) => {
  const city = {
    id: data.id || chance.integer(),
    name: data.name || chance.word(),
    state: "",
    country: "PT",
    coord: {
      "lon": -7.42363,
      "lat": 39.312531
    }
  }
  return city;
};

module.exports = {
  getCity
};
