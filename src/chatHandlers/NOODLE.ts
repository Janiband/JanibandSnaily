import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAll, stringStrip} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const NOODLE: ChatHandler =
  async (message) => {
    const msg = stringStrip(message.content)
    const matches = [
      /(makes|cooks)/,
      /(noodles|ramen)/,
    ]

    const messages = [
      "_\\*grabs a bowl from %player\\*_",
      "_\\*waits for a bowl\\*_",
      "_\\*expects better service\\*_"
    ]

    if (message.channel && stringMatchesAll(msg, matches)) {
      await snailyTypeMessage(message, arrayRandom(messages))
      return true
    }
  }