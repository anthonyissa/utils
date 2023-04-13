# Notifications

This package contains code for sending messages to either a Telegram chat or a Discord channel using Node.js.

[Installation](#installation)

[Usage](#usage)
  - [Telegram Notification](#sending-a-telegram-notification)
  - [Discord Notification](#sending-a-discord-notification)

[Contributing](#contributing)

[License](#license)

## Installation

`
npm i @aitox/notifications
`

## Usage

To use this code, you will need to have a bot created on either Telegram or Discord, and obtain the necessary API tokens.

### Sending a Telegram Notification

```Javascript
const notifications = require("@aitox/notifications");

const token = "YOUR_TELEGRAM_BOT_TOKEN";
const chatId = "YOUR_TELEGRAM_CHAT_ID";
const message = "Your message goes here";

notifications.sendTelegramNotification(token, chatId, message)
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Sending a Discord Notification

```Javascript

const notifications = require("@aitox/notifications");
const { MessageEmbed } = require("discord.js");

const token = "YOUR_DISCORD_BOT_TOKEN";
const channelId = "YOUR_DISCORD_CHANNEL_ID";
const message = "Your message goes here";

notifications.sendDiscordNotification(token, channelId, message)
  .then((messageSent) => {
    console.log(messageSent.content);
  })
  .catch((error) => {
    console.error(error);
  });

// To send an embedded message, create an instance of the MessageEmbed class and pass it as the message parameter:
const embed = new MessageEmbed()
  .setTitle("My Title")
  .setDescription("My Description")
  .setColor("#0099ff");

notifications.sendDiscordNotification(token, channelId, embed)
  .then((messageSent) => {
    console.log(messageSent.content);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
