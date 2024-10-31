import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';

import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

import 'winston-daily-rotate-file';

const isDebug = process.env.NODE_ENV === 'development'

function createDailyRotateTransport(level: string, filename: string) {
  return new winston.transports.DailyRotateFile({
    level,
    dirname: 'logs',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple()
    )
  })
}
@Module({

  imports: [PrismaModule, WinstonModule.forRoot({
    level: 'silly',
    transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('MyApp', {
              colors: true,
              prettyPrint: true,
              processId: true,
              appName: true,
            }),
          ),
        }),
      ...(isDebug ? [] : [
        createDailyRotateTransport('warn', 'error'),
        createDailyRotateTransport('info', 'app')
      ])
      
      // other transports...
      // new winston.transports.File({
      //   filename: 'error.log',
      //   level: 'error',
      //   format: winston.format.combine(
      //     winston.format.timestamp(),
      //     winston.format.ms(),
      //     nestWinstonModuleUtilities.format.nestLike('MyApp', {
      //       colors: true,
      //       prettyPrint: true,
      //       processId: true,
      //       appName: true,
      //     }),
      //   ),
      // })
      ],
  })],  // 导入 PrismaModule
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
