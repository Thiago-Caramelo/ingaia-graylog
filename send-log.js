const request = require('superagent');

const hostName = require('os').hostname();

const RETRY_TIMEOUT_MILISECONDS = 5000;

module.exports = (config) => {
  const addInformationToLog = (log) => ({
    ...log,
    application: config.application,
    source: hostName,
    timestamp: new Date().toString(),
    environment: config.environment
  });
  
  const sendLog = (log) =>
    request
      .post(config.graylog.server)
      .send( addInformationToLog(log) )
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
        return setTimeout(() => sendLog(log), RETRY_TIMEOUT_MILISECONDS);
      });
      
    return sendLog;
}