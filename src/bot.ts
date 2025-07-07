import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import { getOnlinePlayers } from './rconClient';
import * as dotenv from 'dotenv';
dotenv.config({quiet: true});

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
  console.log(`Logged in as ${client.user!.tag}`);

  const updateStatus = async () => {
    const status = await getOnlinePlayers();
    if (status.count >= 1) {
      client.user!.setPresence({
        activities: [{ name: `${status.count} player${status.count === 1 ? '' : 's'} online: ${status.players}`, type: ActivityType.Watching }],
        status: 'online',
      });
    }
    else {
      client.user!.setPresence({
        activities: [{ name: 'No players online', type: ActivityType.Watching }],
        status: 'idle',
      });
    }
  };

  await updateStatus();
  setInterval(updateStatus, 60_000);
});

client.login(process.env.DISCORD_TOKEN);
