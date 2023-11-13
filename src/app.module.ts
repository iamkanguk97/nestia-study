import { Module } from '@nestjs/common';
import { BoardModule } from './modules/board.module';

@Module({
  imports: [BoardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
