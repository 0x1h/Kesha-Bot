const formatMessage = (message) => {
  const format = message.split(" ").join("+");
  return format;
};

module.exports = { formatMessage };
