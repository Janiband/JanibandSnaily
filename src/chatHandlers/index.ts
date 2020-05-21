import {ChatHandlerMap} from "../types";
import {PRAY} from "./PRAY";
import {BETRAY} from "./BETRAY";
import {MUSIC} from "./MUSIC";
import {NOODLE} from "./NOODLE";
import {UNBAN} from "./UNBAN";
import {CHEAT} from "./CHEAT";
import {TAUNT} from "./TAUNT";
import {SACRIFICE} from "./SACRIFICE";
import {RETORT} from "./RETORT";
import {PINGED} from "./PINGED";
import {WELCOME} from "./WELCOME";

export const ChatHandlers: ChatHandlerMap = [
  PRAY, BETRAY, SACRIFICE,
  MUSIC, NOODLE,
  UNBAN, CHEAT,
  TAUNT, RETORT,
  WELCOME,

  // handle pings if not handled already
  PINGED,
]