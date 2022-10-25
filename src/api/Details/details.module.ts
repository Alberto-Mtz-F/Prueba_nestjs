
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Details } from 'src/entities/details.entity';
import { DetailsService } from './details.service';
import { DetailsController } from './details.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Details])],
  providers: [DetailsService],
  controllers: [DetailsController],
  exports:[TypeOrmModule]
})
export class DetailsModule {}