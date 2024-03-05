import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import {User, UserDto} from "../data/user.dto"
import { validate } from "class-validator";

export class Userpipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata) {
        const userClass = plainToInstance(UserDto, value)
        const error = await validate(userClass)
        if(error?.length > 0){
            throw new BadRequestException(error)
        }
        console.log(value, "validated")
        return value
    }
}