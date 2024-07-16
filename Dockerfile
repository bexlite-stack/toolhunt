FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .
COPY public public

EXPOSE 8803

ENV NODE_ENV production
CMD ["bun", "run", "--watch", "src/index.ts"]