import { User } from './../../../Models/user.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as userEntity} from '../../../entities/user.entity';
;

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(userEntity)
        private userEntity : Repository<userEntity>
    ){

    }
    private readonly Users: User[] = []

    async create(user : User){
        // this.Users.push(user)
        return await this.userEntity.insert(user)

    }

    getAll(){
        return this.userEntity.find();
    }

    getByEmail(email: string): User{
        return this.Users.find( (user) => user.email === email )
    }
    
    updateUserbyID( id:number, user:User ):boolean{
        let user_index = this.Users.findIndex( (user) => user.id === id)

        if(this.userExists(id)){
            const newUser : User = Object.assign(this.Users[user_index], user)
            this.Users[user_index] = newUser
            return true
        }
        return false
    }

    /**
     * @description Esta funcion valida si el usauario existe
     * @param id id del usuario que verificamos si existe
     * @returns true si el usuario existe o flase si el usuario no existe
     */
    userExists(id: number):boolean{
        const index = this.Users.findIndex((user) => user.id === id)
        return index !== -1
    }

}
