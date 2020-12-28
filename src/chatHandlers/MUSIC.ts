import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny, stringStrip} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const MUSIC: ChatHandler =
  async (message) => {
      const msg = stringStrip(message.content)
      const matches = [
          /(sing|play)(s|ing)\s?(a|the)?/,
      ];

    const musicMessages = [
      "_\\*dances along\\*_",
      "_\\*likes %player's song\\*_",
      "_\\*hums a tune\\*_",
      "_\\*sways\\*_",
      "_\\*sings a song\\*_",
    ]

      if (message.channel && stringMatchesAny(msg, matches)) {
          // 50% chance
          if (Math.random() >= 0.50) {
              await snailyTypeMessage(message, arrayRandom(musicMessages))
              return true;
          }
      }
  }
