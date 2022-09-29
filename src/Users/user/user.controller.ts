import { User } from './../../Models/user.model';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }

    @Post()
    Create(@Body() params: User):void{
        this.userService.create(params)
        
    }
    @Get('/all')
    getUsers(): User[]{
        return this.userService.getAll()
    }

    @Get('/:email')
    getUser(@Param('email') param): User{
        return this.validateQuest(this.userService.getByEmail(param))
    }

    validateQuest(request: User){
        if (request != undefined) {
            return request;
        } else {
            console.error('El Usuario no existe');
            
        } 
    }
}
