import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Details } from 'src/entities/details.entity';
import { IDetails } from 'src/Models/details.model';

@Injectable()
export class DetailsService {
    constructor(
        @InjectRepository(Details) private detailsEntity: Repository<Details>
    ){

    }

    async create(id_sale:number, details: IDetails[]){
        details.forEach(element  => {
            this.detailsEntity.insert({
                product: element.product,
                quantity: element.quantity,
                unit_price: element.unit_price,
                id_sales: id_sale
            })
        });
        return true
    }

    findAllDetails(){
        return this.detailsEntity.find({relations:['id_sales']})
    }
}