import {Message} from "discord.js";
import {stringMatchesAny} from "./parsing";

export function isMessageTargetingSnaily(message: Message, onlyPings = true): boolean {
  let isTargeted = false;

  for (let [_, user] of message.mentions.users) {
    if (user.id === message.client.user?.id) {
      isTargeted = true;
      break;
    }
  }

  const str = message.content.toLowerCase()
  const weakMatches = [
    /snaily?/,
    /mod(er)?ator/,
    /bot is/,
  ]

  if (!isTargeted && !onlyPings && stringMatchesAny(str, weakMatches)) {
    isTargeted = true
  }

  return isTargeted;
}