import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UserService } from './users/users.service';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { appController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [UsersModule, BooksModule, AuthModule, ConfigModule.forRoot({
     isGlobal: true,
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    })],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('HOST'),
      port: +configService.get<Number>('PORT'),
      username: configService.get('USER'),
      password: configService.get('PASSWORD'),
      database: configService.get('DATABASE'),
      entities: [],
      synchronize: true,
    }),
    inject: [ConfigService],
  })  
],
  controllers: [appController],
  providers: [UserService],
})
export class AppModule {
  constructor(){
    console.log('AppModule constructor');
  }
}
