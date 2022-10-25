import { SalesController } from './sales.controller';

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Sales } from 'src/entities/sales.entity';
import { SalesService } from './sales.service';
import { Details } from 'src/entities/details.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Sales,Details])],
  providers: [SalesService],
  controllers: [SalesController],
  exports:[TypeOrmModule]
})
export class SalesModule {}