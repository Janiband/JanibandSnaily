import {ChatHandler} from "../types";
import {snailyTypeMessage} from "../lib/anxiety";
import {arrayRandom} from "../lib/parsing";

export const CENSORED: ChatHandler =
  async (message) => {
    const msg = message.content.toLowerCase()
    const replies = [
      "self-censored because your opinions are shit",
      "too fucking weak to even say it publicly",
      "hiding behind spoilers like a bitch i see",
      "that's offensive",
      "im calling the police",
      "did you learn those words from your mother?",
      "i can see past that spoiler, and honestly, you're a vile being."
    ]

    if (message.channel && msg.match(/\|\|.+\|\|/)) {
      await snailyTypeMessage(message.channel, arrayRandom(replies))
      return true
    }
  }
