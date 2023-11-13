import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfigSetting } from './configs/swagger';
import { PrismaService } from './modules/core/database/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get<PrismaService>(PrismaService);
  await prismaService.enableShutdownHooks(app);

  SwaggerConfigSetting(app);

  await app.listen(3000);
}
bootstrap();
