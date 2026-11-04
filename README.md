# Factorio Bot

A basic Discord Bot that sets its presense to the number of players online and their Factorio usernames.

![Example Screenshot w/o Players](.github/assets/noplayers.png)
> *Example showing no players online*

![Example Screenshot w/ Players (soon)](.github/assets/players.png)
> *Example showing 1 player online*

Best used on Vanilla plays where you want achievements to let players know whos online without opening the game.

## Install Instuctions

### Docker (recommended)

Soon

### Standalone

1. Download the latest release from GitHub
2. [Install Node.JS v24 and PNPM](https://nodejs.org/en/download/current)
3. Install packages using `pnpm i`
4. Copy and rename .env.example to .env and fill it out
   * [Create a discord bot here](http://discord.com/developers/applications)
   * [Add the RCON command parameters to your Factorio Server's startup command](https://wiki.factorio.com/Command_line_parameters)
5. Build the bot using `pnpm run build`
6. Run the bot using `pnpm run start`

I'd recommend using a process manager like PM2 to manage the deployment. [Learn more about PM2 here](https://pm2.keymetrics.io/)

### Development

Uses Node 24 and pnpm

1. Fork and clone the Repo
2. Install the packages using `pnpm i`
3. Copy and rename .env.example to .env and fill it out
4. Use `pnpm run dev` to run the bot

### License

License is the ISC and can be used according to the terms of the lincense.
