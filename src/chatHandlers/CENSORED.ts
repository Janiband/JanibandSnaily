import {ChatHandler} from "../types";
import {snailyTypeMessage} from "../lib/anxiety";
import {arrayRandom, stringStrip} from "../lib/parsing";

export const CENSORED: ChatHandler =
  async (message) => {
      const msg = stringStrip(message.content)
      const replies = [
          "self-censored because your opinions are shit",
          "%player is too fucking weak to even say it publicly",
          "hiding behind spoilers like a bitch i see",
          "that's offensive %player",
          "im calling the police",
          "did you learn those words from your mother?",
          "I'm not opening that"
      ]

      if (message.channel && msg.match(/\|\|.+\|\|/)) {
          await snailyTypeMessage(message, arrayRandom(replies))
          return true
      }
  }