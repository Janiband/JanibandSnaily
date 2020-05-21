import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const CHEAT: ChatHandler =
  async (message) => {
    const str = message.content.toLowerCase()
    const matches = [/(no|never|dont)?\s?(chocolate|hax|cheat)/, /(whats|wots?)\s?popstar/]
    const replies = [
      "I DON'T GIVE A FUCK",
      "YOU'RE A DIRTY LIAR",
      "GO FUCK URSELF"
    ]

    if (message.channel && stringMatchesAny(str, matches)) {
      // 40% chance
      if (Math.random() >= 0.6) {
        await snailyTypeMessage(message.channel, arrayRandom(replies));
        return true
      }
    }
  }