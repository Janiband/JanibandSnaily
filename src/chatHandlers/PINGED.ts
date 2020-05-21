import {ChatHandler} from "../types";
import {isMessageTargetingSnaily} from "../lib/targeting";
import {arrayRandom} from "../lib/parsing";
import {snailyTypeMessage} from "../lib/anxiety";

export const PINGED: ChatHandler =
  async (message) => {
    let isTargeted = isMessageTargetingSnaily(message);
    const replies = [
      "Did you just ping a fucking bot? What are you, retarded?",
      "Do you **WANT** to be banned?",
      "pinging mods? srsly",
      "Do you have a deathwish?"
    ]

    if (message.channel && isTargeted) {
      await snailyTypeMessage(message.channel, arrayRandom(replies))
      return true;
    }
  }