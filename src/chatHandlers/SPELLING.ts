import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const SPELLING: ChatHandler =
  async (message) => {
    const msg = message.content.toLowerCase();
    const matches = [/(sanily|snoily?|snelly?)/]
    const replies = [
      "learn to spell, fucktard",
      "did you learn to spell in Mississippi what the fuck",
      "please sign up for an English course immediately",
    ]

    if (message.channel && stringMatchesAny(msg, matches)) {
      await snailyTypeMessage(message.channel, arrayRandom(replies))
      return true;
    }
  }