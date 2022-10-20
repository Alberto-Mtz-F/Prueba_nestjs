import { ISales } from './../../Models/sales.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Details } from 'src/entities/details.entity';

@Injectable()
export class DetailsService {
    constructor(
        @InjectRepository(Details) private detailsEntity: Repository<Details>
    ){

    }

    async create(details: ISales){
        for (let index = 0; index < details.details.length; index++) {
            await this.detailsEntity.insert(details.details[index])
            //CAmbiar tablas 
            
        }
        return true
    }

    findAllDetails(){
        return this.detailsEntity.find({relations:['id_sales']})
    }
}