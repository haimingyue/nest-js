import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.setGlobalPrefix('/api')
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '2'
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
