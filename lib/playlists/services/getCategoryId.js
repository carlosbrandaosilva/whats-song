
module.exports = (temperature) => {
  if(temperature > 25) {
    return 'pop';
  }
  if(temperature >= 10 && temperature <= 25) {
    return 'rock';
  }
  return 'classic';
};