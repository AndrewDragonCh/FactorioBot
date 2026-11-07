# Factorio Bot

A basic Discord Bot that sets its presense to the number of players online and their Factorio usernames.

| ![Example Screenshot w/o Players](.forgejo/assets/noplayers.png) | ![Example Screenshot w/ One Player (soon)](.forgejo/assets/player.png) | ![Example Screenshot w/ Multiple Players](.forgejo/assets/players.png) |
| - | - | - |
| *Example showing no players online* | *Example showing 1 player online* | *Example showing mutiple player online* |

Best used on Vanilla plays where you want achievements to let players know whos online without opening the game.

## Install Instuctions

### Prerequisites

* Discord Bot - [Create a discord bot here](http://discord.com/developers/applications)
  > I've included the icon I used [in this repo](.forgejo/assets/factorio.png) (Inluding a gif!)
* Factorio Server with RCON Enabled - [Read about the Startup Parameters here](https://wiki.factorio.com/Command_line_parameters#Multiplayer:~:text=gamepad(controller)%20support-,Server%20options,-%2D%2Dport)

### Docker (recommended)

1. Copy `compose.yaml` & `.env.example` to a folder on your Docker host.
2. Rename `.env.example` to `.env` and fill it out
3. Run `docker compose up -d` to start the container

#### Docker Packages

Docker Packages are hosted on my local [Forgejo instance](https://git.andrewstill.cloud).

### Standalone

Docker Packages are hosted on my local [Forgejo instance](https://git.andrewstill.cloud).

1. Download the latest release from GitHub
2. [Install Node.JS v24 and PNPM](https://nodejs.org/en/download/current)
3. Install packages using `pnpm i`
4. Copy and rename `.env.example` to `.env` and fill it out
5. Build the bot using `pnpm run build`
6. Run the bot using `pnpm run start`

I'd recommend using a process manager like PM2 to manage the deployment. [Learn more about PM2 here](https://pm2.keymetrics.io/)

### Development

Most development happens on my local [Forgejo instance](https://git.andrewstill.cloud).

Uses Node 24 and pnpm

1. Fork and clone the Repo
2. Install the packages using `pnpm i`
3. Copy and rename .env.example to .env and fill it out
4. Use `pnpm run dev` to run the bot

### License

This project is licensed under the  [ISC License](https://github.com/AndrewDragonCh/FactorioBot/blob/main/LICENSE). The ISC license is functionally equivalent to MIT license with some unnecessary bits removed.
