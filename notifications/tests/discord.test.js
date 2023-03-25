const { sendDiscordNotification } = require("../src/discord");
const dotenv = require("dotenv");
const { EmbedBuilder } = require("discord.js");
dotenv.config();

describe("Discord Notifications", () => {
    it("Should send a message to a discord channel", async () => {
        const response = await sendDiscordNotification(process.env.DISCORD_BOT_TOKEN, process.env.DISCORD_CHANNEL_ID, "hello");
        expect(response).toBeDefined();
    });

    it("Should send an embed to a discord channel", async () => {
        const response = await sendDiscordNotification(process.env.DISCORD_BOT_TOKEN, process.env.DISCORD_CHANNEL_ID, new EmbedBuilder().setTitle("hello"));
        expect(response).toBeDefined();
    });
});