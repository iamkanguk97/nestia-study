import { Module } from '@nestjs/common';
import { BoardController } from 'src/controllers/board.controller';

@Module({
  imports: [],
  controllers: [BoardController],
})
export class BoardModule {}
