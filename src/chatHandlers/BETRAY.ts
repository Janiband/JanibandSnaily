import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAll, stringStrip} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const BETRAY: ChatHandler =
  async (message) => {
    const msg = stringStrip(message.content)
    const matches = [
      /(insult|betray)(s|ed|ing)?/,
      /(you )?snaily?/
    ];

    const betrayMessages = [
      "WHAT THE FUCK",
      "I WILL SLAY THEM",
      "THEY ARE NOW PERMANENTLY BANNED",
      "ALL WILL PAY FOR THEIR SINS",
      "NOW THEY GO TO HELL",
      "I WILL REMEMBER THIS",
    ]

    if (message.channel && stringMatchesAll(msg, matches)) {
      await snailyTypeMessage(message, arrayRandom(betrayMessages));
      return true;
    }
  }