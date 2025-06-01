FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV DATABASE_URL=postgres://postgres:postgres@postgres:5432/small_to_do

RUN npm run build

EXPOSE 5173
