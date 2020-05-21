import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const UNBAN: ChatHandler =
  async (message) => {
    const str = message.content.toLowerCase()
    const matches = [
      /unban/, /unben/,
      /debanano/, /deban/, /desp?ban/,
      /(plz|pls|plis|please)/,
      /^no+w*[1!]*$/
    ]

    const replies = [
      "REKT",
      "NOT TODAY NOOB",
      "WAIT IT OUT BITCHASS",
      "YOUR REQUEST HAS BEEN DENIED",
      "PERMBANNED",
      "No.",
      "No, heathen.",
      "Did you cheat on our blessed platform?",
      "Are you lying?",
      "says right here ur a liar",
    ]

    if (message.channel && stringMatchesAny(str, matches)) {
      // 50% chance
      if (Math.random() >= 0.5) {
        await snailyTypeMessage(message.channel, arrayRandom(replies))
        return true
      }
    }
  }