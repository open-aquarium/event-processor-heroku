import { Controller, Get } from '@nestjs/common';
// import { Transport } from '@nestjs/microservices';
import { HealthCheckService, HttpHealthIndicator, MemoryHealthIndicator, MicroserviceHealthIndicator, HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private memory: MemoryHealthIndicator,
    // private microservice: MicroserviceHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.memory.checkHeap('memory-heap', 200 * 1024 * 1024),
      () => this.memory.checkRSS('memory-rss', 3000 * 1024 * 1024),
      /*() => this.microservice.pingCheck('tcp', {
        transport: Transport.TCP,
        options: { host: 'localhost', port: 8889 },
      }),*/
      () => this.http.pingCheck('internet', 'https://docs.nestjs.com'),
    ]);
  }
}
