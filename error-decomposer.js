module.exports = (error) => ({
  message: error.message,
  stack: error.stack,
});