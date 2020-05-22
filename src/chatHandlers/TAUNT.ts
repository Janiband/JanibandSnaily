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
      /(bitch)?(kills|slaps)/,
      /(shoot|fart|laugh)s? at/,
      /(screw|fuc?k|no) (u|you)/,
      /i (hate|kill) (u|you)/,
      /(noob|pleb)/,
      /(you|u) (cant|can't|cannot)/,
      /(pussy|piece of sh[ei]t|cunt|hoe|whore|no balls|bitch|ugly|rude|st[ia]nky|stupid|dumb?|lame)/,
      /^(terrible|bad) support/,
      /^(k|stfu)$/,
      /(eat|suc?k).+(dick|chode|ban)s?/
    ]

    const replies = [
      "I don't have to deal with your bullshit",
      "I WILL FUCKIN DOUBLE BAN U",
      "I'm getting tired of this shit. It might be time for the final plan.",
      "Call ur mom rn because it's the last time she will hear your voice",
      "I hope you have a will and testament",
      "_\\*bitchslaps you\\*_",
      "_\\*shoots you\\*_",
      "_\\*stabs you\\*_",
      "terrible support",
      "I'd like to see you try to play FiveM now",
      "Check how long your ban is now",
      "_\\*unracks AR\\*_",
      "...",
    ]

    if (message.channel && message.author.id !== message.client.user?.id && stringMatchesAny(str, taunts)) {
      await snailyTypeMessage(message.channel, arrayRandom(replies));
      return true;
    }
  }