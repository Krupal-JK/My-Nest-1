import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Request } from "express";

export class appInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {
        const ctx = context.switchToHttp()
        const request = ctx.getRequest<Request>()
        request.body.name = "SKD"
        return next.handle().pipe(map((data)=>{           
            data[0].name = "JAY SHREE RAM"
            return data
        }))
    }
}