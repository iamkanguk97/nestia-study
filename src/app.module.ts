import { Module } from '@nestjs/common';
import { BoardController } from './controllers/board.controller';

@Module({
  imports: [BoardController],
  controllers: [],
  providers: [],
})
export class AppModule {}
