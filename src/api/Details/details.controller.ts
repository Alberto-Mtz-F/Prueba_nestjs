import { Body, Controller, Get, Post } from '@nestjs/common';
import { DetailsService } from './details.service';

@Controller('details')
export class DetailsController {
    constructor(private detailsService : DetailsService){

    }

    
    @Get()
    findDetails(){
        return this.detailsService.findAllDetails()
    }
  
}