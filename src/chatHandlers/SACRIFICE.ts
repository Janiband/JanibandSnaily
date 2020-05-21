import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAll} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const SACRIFICE: ChatHandler =
  async (message) => {
    const msg = message.content.toLowerCase()
    const matches = [
      /(sacrifice[sd]?)/, /(you|snaily?)/
    ]
    const replies = [
      "SNAILY ACCEPTS YOUR OFFERING",
      "I REQUIRE ANOTHER SOUL",
      "GOOD, YOU HAVE PLEASED YOUR GOD"
    ]

    if (message.channel && stringMatchesAll(msg, matches)) {
      await snailyTypeMessage(message.channel, arrayRandom(replies))
      return true
    }
  }