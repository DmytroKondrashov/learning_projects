FROM oven/bun:1-alpine AS build

WORKDIR /app 

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM nginx:1-alpine AS serve

COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /app

EXPOSE 80
