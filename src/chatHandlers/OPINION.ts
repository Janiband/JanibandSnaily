import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny, stringStrip} from "../lib/parsing";
import {isMessageTargetingSnaily} from "../lib/targeting";
import {snailyTypeMessage} from "../lib/anxiety";

export const OPINION: ChatHandler =
  async (message) => {
      const msg = stringStrip(message.content)
      const isTargeted = isMessageTargetingSnaily(message, false)
      const matches = [/opinion/];
      const replies = [
          "i have no opinion, for i am only a snail",
          "fuck that",
          "it would take too long to explain my opinion",
          "my opinion is that you're a dumbass",
          "I don't care enough",
          "it's a very important issue",
          "educate yourself",
          "There's no discussion to be had :zany_face:"
      ]

      if (message.channel && isTargeted && stringMatchesAny(msg, matches)) {
          await snailyTypeMessage(message, arrayRandom(replies))
          return true;
      }
  }