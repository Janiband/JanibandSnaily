import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const CHEAT: ChatHandler =
  async (message) => {
    const str = message.content.toLowerCase()
    const matches = [/(no|never|dont)?\s?(chocolate|hax|cheat)/, /(whats|wots?)\s?popstar/]
    const replies = [
      "I DON'T GIVE A FUCK %player",
      "YOU'RE A DIRTY LIAR",
      "GO FUCK URSELF",
      "Keep telling yourself that %player",
      "Then WHY ARE YOU BANNED? dumbass",
    ]

    if (message.channel && stringMatchesAny(str, matches)) {
      // 40% chance
      if (Math.random() >= 0.6) {
        await snailyTypeMessage(message, arrayRandom(replies));
        return true
      }
    }
  }