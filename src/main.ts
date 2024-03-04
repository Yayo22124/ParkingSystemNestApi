import * as dotenv from "dotenv";
import * as morgan from "morgan";

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita el intercambio de cookies (si es necesario)
  });
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
