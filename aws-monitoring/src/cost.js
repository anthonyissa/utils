const AWS = require("aws-sdk");
require("dotenv").config();

/**
 * Watch AWS cost and exit if threshold is reached.
 * Add this to the of the file to watch AWS cost while your app is running.
 * If the cost threshold is reached, the app will exit.
 * @param {number} priceThreshold
 * @param {boolean} exitOnThresholdReached
 */
const watchAWSCost = (priceThreshold, exitOnThresholdReached = false) => {
  const { AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY } = process.env;
  if (!AWS_ACCESS_KEY || !AWS_SECRET_ACCESS_KEY)
    throw new Error(
      "AWS_ACCESS_KEY and AWS_SECRET_ACCESS_KEY must be set in .env file"
    );

  const costexplorer = new AWS.CostExplorer({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
  });

  const params = {
    TimePeriod: {
      Start: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        .toISOString()
        .split("T")[0],
      End: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
        .toISOString()
        .split("T")[0],
    },
    Granularity: "MONTHLY",
    Metrics: ["UnblendedCost"],
  };

  setInterval(() => {
    costexplorer.getCostAndUsage(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        throw err;
      } else {
        console.log(JSON.stringify(data, null, 2));
        let cost = 0;
        data.ResultsByTime.forEach((result) => {
          cost += parseFloat(result.Total.UnblendedCost.Amount);
        });
        console.log(`Cost: ${cost}`);
        if (cost > priceThreshold) {
          console.log(`Cost threshold reached: ${cost}`);
          if (exitOnThresholdReached) {
            console.log("Exiting...");
            process.exit(0);
          }
        }
      }
    });
  }, 3000);
};

module.exports = watchAWSCost;
