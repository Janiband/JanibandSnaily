import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAll, stringStrip} from "../lib/parsing";
import {isMessageTargetingSnaily} from "../lib/targeting";
import {snailyTypeMessage} from "../lib/anxiety";

export const WELCOME: ChatHandler =
  async (message) => {
    const msg = stringStrip(message.content)
    const matches = [
      /(thank|bless)/,
      /(you|u)/,
    ]
    const replies = [
      "U R WELCOME %player",
      "Of course child",
      "Just remember you are only alive because of me",
      "The Snail taketh, and the Snail giveth back",
      "I'm hungry",
    ]

    const targeted = isMessageTargetingSnaily(message, false)

    if (message.channel && targeted && stringMatchesAll(msg, matches)) {
      await snailyTypeMessage(message, arrayRandom(replies))
      return true
    }
  }