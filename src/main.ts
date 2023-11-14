import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfigSetting } from './configs/swagger';
import { PrismaService } from './modules/core/database/prisma.service';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get<PrismaService>(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'v',
  });

  SwaggerConfigSetting(app);

  await app.listen(8000);
}
bootstrap();
