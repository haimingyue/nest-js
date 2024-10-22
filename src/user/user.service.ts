import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUsers() {
        return {
            code: 1,
            data: [],
            msg: '请求用户列表成功'
        }
    }
}
