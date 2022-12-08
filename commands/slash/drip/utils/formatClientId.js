const formatClientId = (client_id) => {
  return client_id.replace(/<@|>/g, "");
};

module.exports = { formatClientId };
