const telegram = require("./src/telegram.js");
const discord = require("./src/discord.js");

module.exports = {
    ...telegram,
    ...discord,
};