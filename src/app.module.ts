import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UserService } from './users/users.service';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UsersModule, BooksModule, AuthModule],
  controllers: [],
  providers: [UserService],
})
export class AppModule {
  constructor(){
    console.log('AppModule constructor');
  }
}