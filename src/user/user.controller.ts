import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Controller('user')
export class UserController {

    // private logger = new Logger('AppModule')


    // 等于 this.userService = UserService
    constructor(private userService: UserService, @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {
        // this.logger.log("hello1")
        this.logger.error("hello2")
        this.logger.warn("hello3")
        this.logger.verbose("hello4")
        this.logger.debug("hello5")
    }
    
    @Get('/get')
    getUsers(): any {
        // console.log("helloword")
        return this.userService.getUsers()
    }
}
