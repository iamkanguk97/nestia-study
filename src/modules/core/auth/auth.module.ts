import { Module } from '@nestjs/common';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthService } from './services/auth.service';
import { LocalAuthGuard } from './guards/local.guard';

@Module({
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
  exports: [AuthService, LocalAuthGuard],
})
export class AuthModule {}
