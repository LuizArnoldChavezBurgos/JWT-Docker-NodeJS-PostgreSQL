FROM node:latest

WORKDIR /app


COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
COPY .env ./.env

RUN npm install
RUN npm run build
RUN npm run migrate

EXPOSE 4000

CMD [ "npm", "start" ]