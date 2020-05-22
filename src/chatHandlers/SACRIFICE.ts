import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const SACRIFICE: ChatHandler =
  async (message) => {
    const msg = message.content.toLowerCase()
    const matches = [
      /(sacrifice[sd]?)/,
      /throws?.+in(to)?/,
    ]
    const replies = [
      "SNAILY ACCEPTS YOUR OFFERING, %player",
      "I REQUIRE ANOTHER SOUL, %player",
      "GOOD, YOU HAVE PLEASED YOUR GOD",
      "A debt has been paid",
      "You are absolved of your sins",
    ]

    if (message.channel && stringMatchesAny(msg, matches)) {
      await snailyTypeMessage(message, arrayRandom(replies))
      return true
    }
  }