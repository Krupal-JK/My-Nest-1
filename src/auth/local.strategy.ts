import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local'
import { User } from "src/users/data/user.dto";
import { UserService } from "src/users/users.service";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userService: UserService){
        super()
    }

    validate(username: string, password: string) : User {
        let userData = this.userService.getUserByUsername(username)
        if(!userData) throw new UnauthorizedException()
        if(userData.password === password) return userData
        else throw new UnauthorizedException()
    }
} 