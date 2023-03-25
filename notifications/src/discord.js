const { Client, EmbedBuilder, GatewayIntentBits } = require("discord.js");

/**
 * Sends a Discord message to a specific channel id.
 * @param {string} token Token of the bot.
 * @param {string} channelId Id of the channel to send the message to.
 * @param {string | EmbedBuilder} message Message to send.
 * @returns {Promise<Message>} Message sent.
 */
const sendDiscordNotification = async (token, channelId, message) => {
  try {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    await client.login(token);
    const channel = await client.channels.fetch(channelId);
    const messageSent = await channel.send(
      message instanceof EmbedBuilder ? { embeds: [message] } : message
    );
    client.destroy();
    return messageSent;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    sendDiscordNotification,
};