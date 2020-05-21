export interface SnailyConfig {
  discordToken: string;
}

export const Config: SnailyConfig = {
  discordToken: process.env.SNAILY_DISCORD_TOKEN!
}
