import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {


    // 等于 this.userService = UserService
    constructor(private userService: UserService) {

    }
    
    @Get()
    getUsers(): any {
        return this.userService.getUsers()
    }
}
