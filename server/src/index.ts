import app from '@/app';

const PORT:number = Number(process.env["SERVER_PORT"])

const server = new app(PORT);

server.start();
