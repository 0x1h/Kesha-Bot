const client = require("../../index");
const { eventSender } = require("./eventSender");
require("colors");
 
const CronJob = require("cron").CronJob;

const cronExpression = "59 23 31 11 *";

client.on("ready", () => {
  function newYearAnniversary() {
    console.log("Sent...".bgGreen);

    eventSender(client)
  }

  const cronJob = new CronJob(
    cronExpression,
    newYearAnniversary,
    null,
    true,
    "Asia/Tbilisi"
  );

  cronJob.start();
});

module.exports = {
  name: "ready.js",
};

client.once("ready", async () => {
  console.log(
    "\n" + `[READY] ${client.user.tag} is up and ready to go.`.bgGreen
  );
});
