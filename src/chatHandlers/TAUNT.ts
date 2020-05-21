import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";
import {isMessageTargetingSnaily} from "../lib/targeting";

export const TAUNT: ChatHandler =
  async (message) => {
    const str = message.content.toLowerCase()
    let isTargeted = isMessageTargetingSnaily(message, false);

    // ANY
    const taunts = [
      /(shoot|fart|laugh)s? at/,
      /(screw|fuc?k|no) (u|you)/,
      /i (hate|kill) (u|you)/,
      /(noob|pleb)/,
      /(you|u) (cant|can't|cannot)/,
      /(ugly|rude|st[ia]nky|stupid|dumb?|lame)/,
      /(terrible|bad) support/,
      /stfu/,
      /(eat|suc?k).+(dick|chode|ban)s?/
    ]

    const replies = [
      "FUCK U",
      "I WILL FUCKIN BAN U",
      "YOU DARE QUESTION YOUR GOD?",
      "STFU",
      "_\\*bitchslaps u\\*_"
    ]

    if (message.channel && isTargeted && stringMatchesAny(str, taunts)) {
      await snailyTypeMessage(message.channel, arrayRandom(replies));
      return true;
    }
  }