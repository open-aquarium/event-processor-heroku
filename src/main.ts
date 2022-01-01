import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Cross-Origin Resource Sharing
  app.enableCors();

  // OpenAPI
  const config = new DocumentBuilder()
    .setTitle('Event Processor - Open Aquarium')
    .setDescription('The Event Processor API description')
    .setVersion('1.0')
    .addTag('event-processor')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  // Listen to a custom port or 3000 as default
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
