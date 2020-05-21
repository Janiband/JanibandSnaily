import {Client, Message} from "discord.js";
import {ChatHandlers} from "./chatHandlers";
import {SnailyConfig} from "./SnailyConfig";

export class Snaily {
  private client: Client;

  constructor(config: SnailyConfig) {
    this.client = new Client({
      presence: {
        activity: {name: "over Cfx.re #bans", type: "WATCHING"},
        status: "online",
      }
    });

    this.client.on('message', (message) => {
      this.processMessage(message).catch(e => console.error(e))
    })

    this.client.login(config.discordToken);
  }

  async processMessage(message: Message) {
    console.log("[MSG] " + message.content)
    for (let handler of ChatHandlers) {
      const result = await handler(message)
      if (typeof result !== 'undefined') {
        if (typeof result === 'string') {
          await message.reply(result)
        } else {
          break;
        }
      }
    }
  }
}