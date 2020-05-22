import {Message} from "discord.js";

export function templateTargetPlayer(message: Message, str: string): string {
  const {author} = message;
  return str.replace(/%player/, `<@!${author.id}>`)
}

export async function snailyTypeMessage(message: Message, messageStr: string) {
  const {channel} = message;
  channel.startTyping(1)

  setTimeout(async () => {
    await channel.stopTyping()
    await channel.send(templateTargetPlayer(message, messageStr))
  }, 2000)
}