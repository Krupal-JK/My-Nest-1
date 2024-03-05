import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { userMiddleware } from './users.middleware';

@Module({
    controllers:[UsersController],
    providers: [UserService],
    exports: [UserService]
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(userMiddleware).forRoutes("users")
    }    
}
