import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/data/user.dto";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    generateToken(payload: User): string {
        // Check if jwtService is defined before using it
        if (!this.jwtService) {
            throw new Error('JwtService is not initialized.');
        }
        return this.jwtService.sign(payload);
    }
}
