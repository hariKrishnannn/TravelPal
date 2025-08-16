const logger = (req, res, next) => {
  console.log('Logging for testing purposes');
  next();
};

module.exports = logger;
