import { BadRequestException, Body, Controller, Request, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("app")
export class appController {
    constructor(private readonly authService: AuthService) {

    }

    @Post('/login')
    login(@Request() req): String{
        const token = this.authService.generateToken(req.body)
        return token
    }

    @Get('/getdata')
    @UseGuards(AuthGuard('jwt'))
    getData(@Request() req): String{
        return "This is get data from the server" +" " + JSON.stringify(req.user)
    }

}