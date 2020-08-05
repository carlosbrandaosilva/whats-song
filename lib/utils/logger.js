const winston = require('winston');

const colorizer = winston.format.colorize();

const formatter = winston.format.printf(
  item => `${item.timestamp} [${item.level}]: ${item.message}`
);

const colorizeFormatter = winston.format.printf((item) => {
  const message = `${item.timestamp} [${item.level}]: ${item.message}`;
  return colorizer.colorize(item.level, message);
});

const consoleConfig = {
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
    colorizeFormatter
  ),
  timestamp: false,
  json: false,
  prettyPrint: true
}

const logger = winston.createLogger({
  transports: [new winston.transports.Console(consoleConfig)],
  exitOnError: false,
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.simple()
  )
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  }
};

module.exports = logger;