import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny, stringStrip} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const CHEAT: ChatHandler =
  async (message) => {
      const msg = stringStrip(message.content)
      const matches = [
          /(no|never|dont)?\s?(chocolate|hax|cheat)/,
          /(whats|wots?)\s?popstar/,
          /(DO IT)/
      ]
      const replies = [
          // legacy
          "I DON'T GIVE A FUCK %player",
          "YOU'RE A DIRTY LIAR",
          "GO FUCK URSELF",
          "Keep telling yourself that %player",
          "Then WHY ARE YOU BANNED? dumbass",

          // bnd
          "Your ban is confirmed and you are a cheater",
          "end this discussion",
          "You need to write a text of MINIMUM 1000 words, and it needs to be about why you cheated, lied, and why cheating is bad",
          "!punish %player 30d cheating idiot"
      ]

      if (message.channel && stringMatchesAny(msg, matches)) {
          await snailyTypeMessage(message, arrayRandom(replies));
          return
      }
  }
