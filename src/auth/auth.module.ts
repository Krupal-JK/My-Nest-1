import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.stretagy';
import { localStrategy } from './local.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: "helloworld",
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, localStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}