import { Injectable, OnApplicationShutdown, BeforeApplicationShutdown } from '@nestjs/common';

@Injectable()
export class ShutdownService implements OnApplicationShutdown, BeforeApplicationShutdown {

  beforeApplicationShutdown(signal?: string) {
    console.log("beforeApplicationShutdown", signal); // e.g. "SIGINT"  
  }

  onApplicationShutdown(signal: string) {
    console.log("onApplicationShutdown", signal); // e.g. "SIGINT"
  }
}
