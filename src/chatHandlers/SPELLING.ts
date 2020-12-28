import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny, stringStrip} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const SPELLING: ChatHandler =
  async (message) => {
      const msg = stringStrip(message.content)
      const matches = [/(sanily|snily|snoily?|sn[ae]ll?y?)/]
      const replies = [
          "learn to fucking spell %player",
          "did you learn to spell in Mississippi what the fuck",
          "please sign up for an English course immediately",
          "I can see English isn't your first language",
          "English only please",
      ]

      if (message.channel && stringMatchesAny(msg, matches)) {
          await snailyTypeMessage(message, arrayRandom(replies))
          return true;
      }
  }