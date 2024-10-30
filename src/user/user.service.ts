import { Injectable } from '@nestjs/common';
import { HomeResources } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    getUsers(): Promise<HomeResources[]> {
        const res = this.prisma.homeResources.findMany({})
        return res;
    }
}
