import { Details } from 'src/entities/details.entity';
import { ISales } from './../../Models/sales.model';
import { Sales } from './../../entities/sales.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(Sales) private salesEntity: Repository<Sales>,
        @InjectRepository(Details) private detailsEntity: Repository<Details>
        ){

    }

    async create(sale: ISales){
        const date = new Date();
        const details = new Details();
        let total = 0

        sale.details.forEach(item => {
            total = total + (item.quantity * item.unit_price)
            
        })

        const new_sele = await this.salesEntity.save({
            id_user: sale.id_user,
            date: date,
            total
        })
        sale.details.forEach(item => {
            details.product = item.product
            details.quantity = item.quantity
            details.unit_price = item.unit_price
            details.id_sales = (new_sele.id)

            this.detailsEntity.insert({
                id_sales: details.id_sales,
                quantity: details.quantity,
                product: details.product,
                unit_price: details.unit_price
            })
        });            
        
            
        return true;
    }
}
