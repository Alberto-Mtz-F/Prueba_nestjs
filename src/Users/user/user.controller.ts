import { userModel } from './../../Models/user.model';
import { Body, Controller, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(){

    }

    @Post()
    Create(@Body() params: userModel):void{
        console.log("Nombre es: " + params.name,"\nCorreo es: " + params.email,
        "\nTelefono es: " + params.cellphone );
        
    }

}
