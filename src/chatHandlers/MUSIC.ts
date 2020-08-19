import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const MUSIC: ChatHandler =
  async (message) => {
    const str = message.content.toLowerCase();
    const matches = [
      /(sing|play)(s|ing)\s?(a|the)?/,
      /doots?/,
    ];

    const musicMessages = [
      "_\\*dances along\\*_",
      "_\\*hums a tune\\*_",
      "_\\*sways\\*_",
      "_\\*sings a song\\*_",
      "_\\*taps nonexistent foot\\*_"
    ]

    if (message.channel && stringMatchesAny(str, matches)) {
      // 50% chance
      if (Math.random() >= 0.50) {
        await snailyTypeMessage(message.channel, arrayRandom(musicMessages))
        return true;
      }
    }
  }
