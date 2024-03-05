import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { localStrategy } from './local.strategy';

@Module({
    imports: [PassportModule, UsersModule],
    providers: [localStrategy]
})
export class AuthModule {}
