import { RCONClient } from 'tsrcon-client';
import * as dotenv from 'dotenv';
dotenv.config();

const rcon = new RCONClient(
  process.env.RCON_HOST!,
  Number(process.env.RCON_PORT!),
  process.env.RCON_PASSWORD!,
  {
    timeout: 3000,
    retries: 1,
  }
);

export async function getOnlinePlayers(): Promise<{ count: number; players: string[] }> {
  try {
    if (!rcon['authenticated']) {
      await rcon.connect();
    }

    const result = await rcon.sendCommand('/p o');

    const match = result.match(/Online players \((\d+)\): ?(.*)/);

    if (match) {
      const count = parseInt(match[1], 10);
      const playerList = match[2]
        .split(',')
        .map(name => name.trim())
        .filter(name => name.length > 0);

      return {
        count,
        players: playerList,
      };
    }

    return {
      count: 0,
      players: [],
    };
  } catch (err: any) {
    return {
      count: 0,
      players: [],
    };
  }
}

