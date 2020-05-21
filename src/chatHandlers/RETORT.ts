import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const RETORT: ChatHandler =
  async (message) => {
    const msg = message.content.toLowerCase()
    const triggers = [
      /^no+[1!]*$/,
      /no* (lie|lying|fib)/,
      /unfair b[ae]n/,
    ]

    const retorts = [
      "YES MFER",
      "Yes.",
      "I HAVE SPOKEN",
      "did i stutter bitch"
    ]

    if (message.channel && message.author.id !== message.client.user?.id && stringMatchesAny(msg, triggers)) {
      await snailyTypeMessage(message.channel, arrayRandom(retorts));
      return true;
    }
  }