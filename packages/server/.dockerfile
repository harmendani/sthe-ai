FROM  node:alpine3.22

RUN apk add --no-cache gcompat

RUN npm install --g corepack --force

RUN corepack enable

WORKDIR /app

COPY /packages/server .

RUN npm i

RUN npm run build

CMD ["node"]

USER 1000
