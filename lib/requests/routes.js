const { getStatisticsRequests } = require('./controllers');
const { isAuthenticated } = require('../authorization/authorization-bearer-strategy');

const requestsRoutes = (router) => {
  router.get('/requests/statistic', isAuthenticated, getStatisticsRequests);
};

module.exports = requestsRoutes;