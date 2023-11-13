import { Module } from '@nestjs/common';
import { PROJECT_MODULES } from './modules';

@Module({
  imports: [...PROJECT_MODULES],
  controllers: [],
  providers: [],
})
export class AppModule {}
