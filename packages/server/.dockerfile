FROM node:25-alpine AS base

RUN npm i -g corepack -f

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml  ./
COPY packages/server/package.json ./packages/server/package.json

RUN yarn install --immutable

COPY . .

RUN yarn workspace server build
RUN yarn workspace server build

FROM node:25-alpine AS production

WORKDIR /app

RUN npm i -g corepack -f

COPY --from=base /app/.pnp.cjs ./
COPY --from=base /app/.yarn/cache ./.yarn/cache
COPY --from=base /app/package.json ./
COPY --from=base /app/packages/server/package.json ./packages/server/
COPY --from=base /app/packages/server/dist ./packages/server/dist

USER 1000
EXPOSE 3001
CMD ["yarn", "node", "packages/server/dist/index.js"]


