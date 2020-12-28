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
        /(shoots|stabs|murders|farts|laughs).+(at|back|snaily?)/,
        /(screw|fuc?k|no) (u|you)/,
        /i (hate|kill) (u|you)/,
        /(noob|pleb)/,
        /(you|u) (cant|can't|cannot)/,
        /(pussy|piece of sh[ei]t|cunt|hoe|whore|no balls|bitch|ugly|rude|st[ia]nky|stupid|dumb?|lame)/,
        /^(terrible|bad) support/,
        /^(k|stfu)$/,
        /^bot$/,
        /(eat|suc?k).+(dick|chode|ban)s?/
    ]

    const replies = [
      "I don't have to deal with your bullshit %player",
      "I WILL FUCKIN DOUBLE BAN U",
      "I'm getting tired of your shit, %player",
      "I could kill you all with ease",
      "Pray to your god now %player, it will be your last chance",
      "i stg %player",
      "Call ur mom rn because it's the last time she will hear your voice",
      "I hope you have a will and testament",
      "_\\*bitchslaps %player\\*_",
      "_\\*shoots %player\\*_",
      "_\\*stabs %player\\*_",
      "terrible support",
      "I'd like to see you try to play FiveM now",
      "Check how long your ban is now %player",
      "_\\*unracks AR\\*_",
      "...",
    ]

    if (message.channel && message.author.id !== message.client.user?.id && stringMatchesAny(str, taunts)) {
      await snailyTypeMessage(message, arrayRandom(replies));
      return true;
    }
  }