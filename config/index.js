const { BOT_TOKEN } = require("../env.json");
require('dotenv')

module.exports = {
  Prefix: "$",

  Users: {
    OWNERS: ["484717395722895360"],
  },

  Client: {
    TOKEN: BOT_TOKEN || process.env.RAILWAY_BOT_TOKEN,
    ID: "938136480453365770",
  },
};
