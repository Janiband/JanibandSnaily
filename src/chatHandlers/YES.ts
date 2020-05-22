import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const YES: ChatHandler =
  async (message) => {
    const msg = message.content.toLowerCase()
    const replies = [
      "it is done",
      "fine then bitch",
      "if that's how you want it",
      "I've added 5 years onto your ban"
    ]

    if (message.channel && stringMatchesAny(msg, [/^yes$/])) {
      await snailyTypeMessage(message.channel, arrayRandom(replies))
      return true;
    }
  }