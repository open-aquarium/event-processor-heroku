
import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult, HealthCheckError } from '@nestjs/terminus';

export interface Dog {
  name: string;
  type: string;
}

@Injectable()
export class CustomHealthIndicator extends HealthIndicator {

  async isHealthy(): Promise<HealthIndicatorResult> {
    const result = this.getStatus("custom", true);

    if (result) {
      return result;
    }
    throw new HealthCheckError('Custom check failed', result);
  }
}
