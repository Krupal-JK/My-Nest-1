import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class userMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("This is the USER Middleware ")
        next()
    }
}