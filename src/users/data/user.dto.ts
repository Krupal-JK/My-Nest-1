import { IsBoolean, IsInt, IsString } from "class-validator";

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    verified: boolean;
}

export class UserDto{
    @IsInt()
    id: number;

    @IsString()
    username: string;
    
    @IsString()
    email: string;
    
    @IsString()
    password: string;
    
    @IsBoolean()
    verified: boolean;

}