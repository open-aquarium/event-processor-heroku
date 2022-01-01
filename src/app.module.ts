import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { ShutdownService } from './shutdown/shutdown.service';
import { CustomHealthIndicator } from './health/health';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
  ],
  controllers: [
    AppController,
    HealthController,
  ],
  providers: [
    AppService,
    CustomHealthIndicator,
    ShutdownService,
  ],
})
export class AppModule {}
