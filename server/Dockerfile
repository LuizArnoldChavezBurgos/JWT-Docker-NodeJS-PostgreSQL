FROM node:latest

WORKDIR /app

# Install dos2unix
RUN apt-get update && apt-get install -y dos2unix

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
COPY .env ./.env
COPY wait-for-it.sh ./wait-for-it.sh

# Convert line endings and set execute permissions
RUN dos2unix ./wait-for-it.sh && chmod +x ./wait-for-it.sh

RUN npm install
RUN npm run build

COPY database ./database

EXPOSE 4000

CMD ["./wait-for-it.sh", "db_backend:5432", "--", "npm", "run", "migrate:start", "&&", "npm", "start"]