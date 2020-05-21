import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const TAUNT: ChatHandler =
  async (message) => {
    let isTargeted = false;
    const str = message.content.toLowerCase();

    for (let [_, user] of message.mentions.users) {
      if (user.id === message.client.user?.id) {
        isTargeted = true;
        break;
      }
    }

    if (!isTargeted && str.match(/snaily/)) {
      isTargeted = true
    }

    // ANY
    const taunts = [
      /(shoot|fart|laugh)s? at/,
      /(screw|fuc?k|no) (u|you)/,
      /i (hate|kill) (u|you)/,
      /(noob|pleb)/,
      /(you|u) (cant|can't|cannot)/,
      /snaily?.+(ugly|rude|stupid|dumb?|lame)/,
      /(terrible|bad) support/,
    ]

    const replies = [
      "FUCK U",
      "I WILL FUCKIN BAN U",
      "YOU DARE QUESTION YOUR GOD?",
      "STFU",
    ]

    if (message.channel && isTargeted && stringMatchesAny(str, taunts)) {
      await snailyTypeMessage(message.channel, arrayRandom(replies));
      return true;
    }
  }