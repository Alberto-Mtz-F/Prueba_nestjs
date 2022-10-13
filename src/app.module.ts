
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from './configs/DBConnection';
import { UserController } from './users/user/user.controller';
import { UserService } from './users/user/user.service';
import { UserModule } from './users/user/user.module';

@Module({
  imports: [Connection, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
