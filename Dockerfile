FROM node:24-slim AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN corepack prepare pnpm@latest --activate \
    && pnpm install --frozen-lockfile

COPY tsconfig.json ./
COPY src ./src

RUN pnpm run build

FROM node:24-slim AS production

ENV NODE_ENV=production

WORKDIR /app

RUN corepack enable \
    && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY --from=build /app/dist ./dist

USER node

CMD ["node", "dist/bot.js"]
