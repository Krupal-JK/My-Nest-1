import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class RoleGuard implements CanActivate{
    private rolePassed : string;
    constructor(role: string,){
        this.rolePassed = role;
    }
    canActivate(context: ExecutionContext): boolean {

        const request : any = context.switchToHttp().getRequest<Request>();
        return this.rolePassed == request.user.username
    }
}