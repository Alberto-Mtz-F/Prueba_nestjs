import { Module } from '@nestjs/common';
import { Connection } from './configs/DBConnection';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesModule } from './api/Sales/sales.module';
import { UserModule } from './api/users/user/user.module';
import { DetailsModule } from './api/Details/details.module';


@Module({
  imports: [Connection, UserModule, SalesModule, DetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
