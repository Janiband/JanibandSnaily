import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const UNBAN: ChatHandler =
  async (message) => {
    const str = message.content.toLowerCase()
    const matches = [
      /un-?b[ea]n/,
      /debanano/, /deban/, /desp?ban/,
      /(plz|pls|plis|pliz+|please).+(h[ea]lp)/,
      /^no+w*[1!]*$/,
      /\snao/,
      /^why+/,
      /banned (for|by) hac?k/,
      /b[ae]n.+no rea[zs]on/,
    ]

    const replies = [
      "%player GOT REKT",
      "NOT TODAY NOOB",
      "WAIT IT OUT BITCHASS",
      "YOUR REQUEST HAS BEEN DENIED %player",
      "PERMBANNED",
      "no",
      "No, heathen.",
      "Did you cheat on our blessed platform %player?",
      "Are you lying?",
      "says right here ur a liar",
      "go fuck yourself and don't even try to evade",
      "bro no",
      "just... shut up",
      "YOUR PUNSIHMENT IS VALID",
      "send your ban ID %player",
      "your ban has been extended 5 years",
      "your ban has been extended 10 years",
      "your ban has been extended 15 years",
      "your ban has been extended _permanently_",
    ]

    let isSelfResponse = false;
    const msgMatches = stringMatchesAny(str, matches);
    if (message.author.id === message.client.user?.id && msgMatches && Math.random() > 0.50) {
      isSelfResponse = true
    }

    if (message.channel && (isSelfResponse || msgMatches)) {
      // 75% chance
      if (Math.random() >= 0.25) {
        await snailyTypeMessage(message, arrayRandom(replies))
        return true
      }
    }
  }