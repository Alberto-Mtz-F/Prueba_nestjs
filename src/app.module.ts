import { Module } from '@nestjs/common';
import { Connection } from './configs/DBConnection';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesModule } from './api/Sales/sales.module';
import { UserModule } from './api/Users/user/user.module';
import { DetailsModule } from './api/Details/details.module';
import { ConfigModule } from  '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'docker' ? '.env' : '.env.local'
  }), Connection, UserModule, SalesModule, DetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
