import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const SPELLING: ChatHandler =
  async (message) => {
    const msg = message.content.toLowerCase();
    const matches = [/(sanily|snoily?|snelly?)/]
    const replies = [
      "learn to fucking spell %player",
      "did you learn to spell in Mississippi what the fuck",
      "please sign up for an English course immediately",
      "I can see English isn't your first language",
    ]

    if (message.channel && stringMatchesAny(msg, matches)) {
      await snailyTypeMessage(message, arrayRandom(replies))
      return true;
    }
  }