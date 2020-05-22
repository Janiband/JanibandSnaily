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
import {YES} from "./YES";
import {SPELLING} from "./SPELLING";
import {OPINION} from "./OPINION";
import {CENSORED} from "./CENSORED";

export const ChatHandlers: ChatHandlerMap = [
  CENSORED,
  PRAY, BETRAY, SACRIFICE,
  MUSIC, NOODLE,
  UNBAN, CHEAT,
  TAUNT, RETORT, OPINION,
  WELCOME,

  // handle pings if not handled already
  PINGED, YES, SPELLING,
]