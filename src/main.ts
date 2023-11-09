import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfigSetting } from './configs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SwaggerConfigSetting(app);

  await app.listen(3000);
}
bootstrap();