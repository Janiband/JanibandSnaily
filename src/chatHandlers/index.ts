import {ChatHandlerMap} from "../types";
import {PRAY} from "./PRAY";
import {BETRAY} from "./BETRAY";
import {MUSIC} from "./MUSIC";
import {NOODLE} from "./NOODLE";
import {UNBAN} from "./UNBAN";
import {CHEAT} from "./CHEAT";
import {TAUNT} from "./TAUNT";
import {SACRIFICE} from "./SACRIFICE";

export const ChatHandlers: ChatHandlerMap = [
  PRAY, BETRAY, SACRIFICE,
  MUSIC, NOODLE,
  UNBAN, CHEAT,
  TAUNT]