FROM  node:25-alpine

RUN apk add --no-cache gcompat

RUN npm install --g corepack -f

RUN corepack enable

WORKDIR /app

COPY . .

RUN ls -la

RUN yarn install

RUN yarn build:server

CMD ["yarn", "start:server"]

USER 1000
