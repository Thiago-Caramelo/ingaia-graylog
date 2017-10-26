const errorDecomposer = require('./error-decomposer');

module.exports = (config) => {
  const sendLog = require('./send-log')(config);

  const error = ( {error, ...data} ) =>
  sendLog({
    ...errorDecomposer(error),
    ...data,
  });

  return {
    error,
    log: sendLog,
  }
}