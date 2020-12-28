import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny, stringStrip} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const UNBAN: ChatHandler =
  async (message) => {
      const str = stringStrip(message.content)
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
          // legacy
          // "%player GOT REKT",
          // "NOT TODAY NOOB",
          "WAIT IT OUT BITCHASS",
          "YOUR REQUEST HAS BEEN DENIED %player",
          // "PERMBANNED",
          "no",
          "No, heathen.",
          // "Did you cheat on our blessed platform %player?",
          // "Are you lying?",
          "says right here ur a liar",
          "go fuck yourself and don't even try to evade",
          // "bro no",
          "just... shut up",
          // "YOUR PUNISHMENT IS VALID",
          "send your ban ID %player",
          "your ban has been extended 6 months",
          "your ban has been extended 12 months",
          // "your ban has been extended 15 years",
          // "your ban has been extended _permanently_",

          // bnd
          "i have extended your ban now to 12 months since you still bullshit and continue to discuss.",
          "if you dont shut the fuck up now about the ban i will permanently ban you instead",
          "you are banned for cheating",
          "> What is the reason for being constantly banned from FiveM?\nLack of iq most probably, %player",
          "sec im just going to extend %player ban to 12 months",
          "tough shit, dont get banned",

          // Mars
          "Graphics mods don’t get you banned",
          "No ban talk",
          "You literally ban evaded"
      ]

      let isSelfResponse = false;
      const msgMatches = stringMatchesAny(str, matches);
      if (message.author.id === message.client.user?.id && msgMatches && Math.random() > 0.50) {
          isSelfResponse = true
      }

      if (message.channel && (isSelfResponse || msgMatches)) {
          await snailyTypeMessage(message, arrayRandom(replies))
          return true
      }
  }