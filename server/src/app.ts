//dotent config
import dotenv from 'dotenv';
dotenv.config();

//Node server with express and typescript
import express, { Express } from "express";
import { Server as HttpServer } from "http";
import bodyParser from 'body-parser';

// Routes
import loginRoute from '@/infraestructure/routes/login.route';

class Server {
  private app: Express;
  private httpServer: HttpServer | undefined;
  private port: number;
  

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(loginRoute);
  }

  public start(): void {
    this.httpServer = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  public stop(): void {
    if (this.httpServer) {
      this.httpServer.close(() => {
        console.log(`Server stopped on port ${this.port}`);
      });
    } else {
      console.error('Server not running.');
    }
  }
}

export default Server;
