import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
import { UserGuard } from './users/users.guard';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new UserGuard())
  await app.listen(8000);
}
bootstrap();
