import {DMChannel, NewsChannel, TextChannel} from "discord.js";

export async function snailyTypeMessage(channel: TextChannel | DMChannel | NewsChannel, message: string) {
  channel.startTyping(1)

  setTimeout(async () => {
    await channel.stopTyping()
    await channel.send(message)
  }, 2000)
}