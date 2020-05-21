import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAll} from "../lib/parsing";
import {isMessageTargetingSnaily} from "../lib/targeting";
import {snailyTypeMessage} from "../lib/anxiety";

export const WELCOME: ChatHandler =
  async (message) => {
    const str = message.content.toLowerCase();
    const matches = [
      /(thank|bless)/,
      /(you|u)/,
    ]
    const replies = [
      "U R WELCOME",
      "Of course child",
      "Just remember you are only alive because of me",
      "The Snail taketh, and the Snail giveth back",
      "I'm hungry"
    ]

    const targeted = isMessageTargetingSnaily(message, false)

    if (message.channel && targeted && stringMatchesAll(str, matches)) {
      await snailyTypeMessage(message.channel, arrayRandom(replies))
      return true
    }
  }