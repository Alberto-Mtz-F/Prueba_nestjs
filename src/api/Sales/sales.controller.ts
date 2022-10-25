import { ISales } from './../../Models/sales.model';
import { SalesService } from './sales.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('sales')
export class SalesController {
    constructor(private salesService: SalesService){

    }

    @Post()
    Create(@Body() params: ISales){
        try {
            this.salesService.create(params)
            
        } catch (error) {
            console.log({error})
        }
        
    }
  
}
