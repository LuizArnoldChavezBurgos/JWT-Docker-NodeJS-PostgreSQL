FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
COPY .env ./.env
COPY healthcheck.sh ./healthcheck.sh

RUN chmod +x ./healthcheck.sh

RUN npm install --ignore-scripts
RUN npm run build

COPY database ./database

EXPOSE 4000

CMD ["npm", "run", "migrate:start"]