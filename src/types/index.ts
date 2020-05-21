import {Message} from "discord.js";

export type ChatHandler = (message: Message) => Promise<string | boolean | undefined>;
export type ChatHandlerMap = ChatHandler[];
