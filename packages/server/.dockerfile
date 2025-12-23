FROM node:22-alpine AS base

RUN corepack enable

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml  ./
COPY packages/server/package.json ./packages/server/package.json
COPY packages/server/.env ./

RUN yarn install --immutable

COPY . .

RUN yarn build:server

FROM node:22-alpine AS stage

WORKDIR /app

RUN corepack enable

COPY --from=base /app/package.json /app/yarn.lock /app/.yarnrc.yml  ./
COPY --from=base /app/packages/server/package.json ./packages/server/package.json
COPY --from=base /app/packages/server/dist ./packages/server/dist
COPY --from=base /app/.env ./

RUN yarn workspaces focus server --production

CMD ["yarn", "node", "packages/server/dist/index.js"]


