import {Snaily} from "./Snaily";
import * as dotenv from "dotenv";

// load config first
dotenv.config()
import {Config} from "./SnailyConfig";

// load snaily
new Snaily(Config);

