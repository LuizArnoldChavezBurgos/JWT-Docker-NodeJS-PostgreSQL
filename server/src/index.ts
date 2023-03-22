// import app from '@/app';
import app from '@/app';

const PORT:number = Number(process.env["PORT"])

const server = new app(PORT);

server.start();
