import {ChatHandler} from "../types";
import {arrayRandom, stringMatchesAny} from "../lib/parsing";
import {isMessageTargetingSnaily} from "../lib/targeting";
import {snailyTypeMessage} from "../lib/anxiety";

export const OPINION: ChatHandler =
  async (message) => {
    const msg = message.content.toLowerCase();
    const isTargeted = isMessageTargetingSnaily(message, false)
    const matches = [/opinion/];
    const replies = [
      "i have no opinion, for i am only a snail",
      "fuck that",
      "it would take too long to explain my opinion",
      "my opinion is that you're a dumbass",
      "I don't care enough",
      "it's a very important issue",
      "you are an idiot, and thats my final opinion"
    ]

    if (message.channel && isTargeted && stringMatchesAny(msg, matches)) {
      await snailyTypeMessage(message.channel, arrayRandom(replies))
      return true;
    }
  }
