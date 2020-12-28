import {Message} from "discord.js";

export type ChatHandler = (message: Message) => Promise<string | boolean | undefined | void>;
export type ChatHandlerMap = ChatHandler[];
