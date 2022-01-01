import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      appName: "event-processor",
      appVersion: "0.0.1"
    };
  }
}
