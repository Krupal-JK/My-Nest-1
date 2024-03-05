import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";

export class Userexeception extends HttpException{
    constructor(){
        super('Bad Request', HttpStatus.BAD_REQUEST);
    }
}

@Catch(HttpException)
export class UserCustomexception implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost): any {
        
    }
}