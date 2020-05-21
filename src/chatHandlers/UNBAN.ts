import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const UNBAN: ChatHandler =
  async (message) => {
    const str = message.content.toLowerCase()
    const matches = [/unban/, /unben/, /debanano/, /deban/, /(plz|pls|plis|please)/]
    const replies = [
      "REKT",
      "NOT TODAY NOOB",
      "WAIT IT OUT BITCHASS",
      "YOUR REQUEST HAS BEEN DENIED",
      "PERMBANNED",
      "No.",
      "No, heathen."
    ]

    if (message.channel && stringMatchesAny(str, matches)) {
      // 50% chance
      if (Math.random() >= 0.5) {
        await snailyTypeMessage(message.channel, arrayRandom(replies))
        return true
      }
    }
  }