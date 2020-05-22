import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAll} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

const prayerResponses = [
  "SNAILY ACCEPTS YOUR PRAYER %player, THIS TIME",
  "YOU ARE HEARD, %player",
  "MAY THE SNAIL BE WITH YOU MY CHILD",
  "YES! YES!!!!",
  "Your prayers give me sustenance, %player",
  "I require more followers",
]

export const PRAY: ChatHandler =
  async (message) => {
    const msg = message.content.toLowerCase()
    const regularMatchTerms = [/prays?/, /snaily/]
    const prayMatchTerms = [/(🙏|:pray:)/, /:\w+snaily?\w+:/]

    if (message.channel && (stringMatchesAll(msg, regularMatchTerms) || stringMatchesAll(msg, prayMatchTerms))) {
      // make sure snaily isn't replying to itself
      if (message.author.id === message.client.user?.id) return;
      await snailyTypeMessage(message, arrayRandom(prayerResponses))
      return true;
    }

    return;
  }