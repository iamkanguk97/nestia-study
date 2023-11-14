import { Controller, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { TypedRoute } from '@nestia/core';
import { DOMAIN_NAME } from 'src/constants/enum';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/modules/core/auth/guards/local.guard';

@ApiTags('User API (사용자 API)')
@Controller(DOMAIN_NAME.USER)
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * @summary 20231114 - 로컬 로그인을 위한 사용자 생성
   *
   * @tag User
   */
  @TypedRoute.Post('sign-up')
  @HttpCode(HttpStatus.OK)
  async postSignUp() {
    return;
  }

  /**
   * @summary 20231114 - 로컬 로그인 (이메일과 비밀번호를 통한 로그인)
   *
   * @tag User
   */
  @TypedRoute.Post('local-login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async postLocalLogin() {
    return;
  }

  @TypedRoute.Get('kakao-login/callback')
  @UseGuards()
  async getkakaoLoginCallback() {
    return;
  }

  @TypedRoute.Get('kakao-login')
  @UseGuards()
  async getKakaoLogin() {
    return;
  }
}
