import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from 'express'

@Injectable()
export class UserGuard implements CanActivate{
    public username : string = 'SKD'
    public password : string = 'Test@1001'

    canActivate(context: ExecutionContext): boolean{
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>()        
        console.log(request.headers["password"], "=====-", request.headers["username"])
        if(request.headers["username"] == undefined || request.headers["password"] == undefined) return false
        return request.headers['username'] === this.username && request.headers['password'] === this.password
    }
}