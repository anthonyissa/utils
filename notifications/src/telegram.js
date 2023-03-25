const fetch = require("node-fetch");

const tokenRegex = /[0-9]+:[A-Za-z0-9]+/i;

const sendTelegramNotification = async (
  token,
  chatId,
  message
) => {
  try {
    if (!tokenRegex.test(token)) throw new Error("Invalid token syntax");

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
