const assert = require('assert');

describe('index', () => {
  it('should fail on require', async () => {

    try {
      const logger = require('./index.js')(undefined);
      logger.log({ "erro": "teste" });
    } catch (error) {
      return assert.ok(true);
    }
    return assert.fail();
  });


  it('should require without error', async () => {
    const config = {
      graylog : {
        server : "https://httpbin.org/post"
      }
    };
    const logger = require('./index.js')(config);
    logger.log({ "erro": "teste" });
    return assert.ok(true);
  });
});