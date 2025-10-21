FROM oven/bun:latest

WORKDIR /app

COPY bun.lockb package.json ./

RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000

CMD [ "bun", "run", "start" ]