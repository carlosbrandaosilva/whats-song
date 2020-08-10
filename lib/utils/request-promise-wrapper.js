const request = require('request');
const pkg = require('../../package.json');

module.exports = (options) => new Promise((resolve, reject) => {
  options.headers = { ...options.headers, referer: `http://${pkg.name}:${process.env.SERVER_PORT}` };
  request(options, (err, httpResponse, body) => {
    if (err) {
      reject(err);
      return;
    }
    resolve({
      httpResponse,
      body
    });
  });
});
