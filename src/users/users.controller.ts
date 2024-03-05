import { BadRequestException, Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "./data/user.dto";
import { Userpipe } from "./pipes/user.pipe";
import { Userexeception } from "./users.exception";
import { UserGuard } from "./users.guard";
import { appInterceptor } from "./users.interceptor";
import { AuthGuard } from "@nestjs/passport";

@Controller("users")
export class UsersController {
    
    // public userService: UserService = new UserService();
    constructor (private userService: UserService){}
    
    @Post("/addUser")
    @UseInterceptors(appInterceptor)   
    addUsers(@Body(new Userpipe()) user: User): any {
        return this.userService.addUsers(user)
    }
    
    @Get("/getUsers")   
    @UseGuards(AuthGuard('local'))
    getUsers(): User[] {
        return this.userService.getUsers()
    }
    @Get("/getOneUser")
    getOneUser(@Query("userId",) userId: string): object {
        console.log(typeof userId, "userId", userId)
        return this.userService.getOneUser(userId);
    }
    @Put("/updateUser")
    updateUsers(@Body() user:User): String {
        return this.userService.updateUsers(user)
    }
    @Delete("/deleteUser")
    deleteUsers(@Query("userId") userId: string): String {
        return this.userService.deleteUsers(userId)
    }
}