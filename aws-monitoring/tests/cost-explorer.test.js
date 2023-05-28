const watchAWSCost = require("../src/cost");

require("dotenv").config();

describe("AWS Cost Controller", () => {
    it("Should watch AWS cost", async () => {
        watchAWSCost(-1, true);
    });
});