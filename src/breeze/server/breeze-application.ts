import * as express from 'express';
import BreezeRouter from "./breeze-router";
import {Server} from "http";

class BreezeApplication {

  private app = express();
  private server: Server;

  public run(): void {
    this.app.use(BreezeRouter.getRouter());
    this.server = this.app.listen(3000, () => {
      console.log("Flux application started on port 3000")
    });
  }

  public stop(): void {
    this.server.close();
  }

}

export default BreezeApplication;
