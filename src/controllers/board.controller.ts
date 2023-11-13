import { TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';

@Controller()
export class BoardController {
  @TypedRoute.Get('asdf')
  async getBoard() {
    console.log('asdf');
    return;
  }
}
