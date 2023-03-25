const { sendTelegramNotification } = require("../src/telegram");
const dotenv = require("dotenv");
dotenv.config();

describe("Telegram Notifications", () => {
    it("Should send a message to a telegram chat", async () => {
        const response = await sendTelegramNotification(process.env.TELEGRAM_BOT_TOKEN, process.env.TELEGRAM_CHAT_ID, "hello");
        expect(response.status).toBe(200);
    });
});