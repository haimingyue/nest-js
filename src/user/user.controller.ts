import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {


    // 等于 this.userService = UserService
    constructor(private userService: UserService) {

    }
    
    @Get('/get')
    getUsers(): any {
        // console.log("helloword")
        return this.userService.getUsers()
    }
}
