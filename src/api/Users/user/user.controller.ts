import { User } from './../../../Models/user.model';
import { Body, Controller, Get, Param, Post,  Put } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }

    @Post()
    Create(@Body() params: User):string | boolean{
        if(this.userService.userExists(Number(params.id))){
            return "El usuario ya existe"
        }
        try {
            this.userService.create(params)
            return true
        } catch (error) {
            console.log({error})
        }
        
    }
    @Get('/all')
    getUsers(): User[]{
        return this.userService.getAll()
    }

    @Get('/:email')
    getUser(@Param('email') param): User | string{
        const user = this.userService.getByEmail(param)
        return user ?? "El Usuario no existe"
    }
    @Put('/update/:id')
    updateUser (@Body() user:User, @Param('id') id ){
        return this.userService.updateUserbyID(Number(id),user)
    } 
}
