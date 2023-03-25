const fetch = require("node-fetch");

/**
 * Sends a Telegram message to a specific chat id.
 * @param {string} token Token of the bot.
 * @param {string} chatId Id of the chat to send the message to.
 * @param {string} message Message to send.
 * @returns {Promise<Response>} Response from the Telegram API.
 */
const sendTelegramNotification = async (
  token,
  chatId,
  message
) => {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendTelegramNotification,
};
