import {ChatHandler} from "../types";
import {snailyTypeMessage} from "../lib/anxiety";
import {arrayRandom, stringStrip} from "../lib/parsing";

export const CODE: ChatHandler =
    async (message) => {
        const msg = stringStrip(message.content)
        const replies = [
            // Smallo
            "math is always faster than native calls",
            ".....",
            "this is what dumb cunts do",
            "I give up",
            ":person_shrugging:",
            "yeah you're not really making sense",
            "not sure what you're trying to accomplish but that code would basically stop anything from existing",
            "lol",
            "Why is there a random `]` there",
            "jesus christ",
            // bubble
            "cool",
            "such beautiful selfishness",
            "what",
            "no",
        ]

        if (message.channel && msg.match(/```lua/)) {
            await snailyTypeMessage(message, arrayRandom(replies))
            return true
        }
    }
