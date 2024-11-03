import { Controller, Delete, Get, Post, Put, Version } from '@nestjs/common';

@Controller({
    path: 'home',
    version: '1'
})
export class HomeController {
    @Get('resource')
    @Version('1')
    find() {
        return 'find'
    }
    @Get('resource')
    @Version('2')
    find2() {
        return 'find2'
    }
    @Post()
    create() {
        return 'create'
    }
    @Put()
    update() {
        return 'update'
    }
    @Delete()
    delete() {
        return 'delete'
    }
}
