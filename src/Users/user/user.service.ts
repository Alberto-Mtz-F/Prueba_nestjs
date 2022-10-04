import { User } from './../../Models/user.model';
import { Injectable } from '@nestjs/common';
import { TestScheduler } from 'rxjs/testing';

@Injectable()
export class UserService {
    private readonly Users: User[] = []

    create(user:User):boolean{
        this.Users.push(user)
        return true
    }

    getAll(): User[]{
        return this.Users;
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
    
    // Es otra forma de hacer el mismo trabajo y ademas te permite conocer el como funciona el objeto.
    /*updateUserbyID( id:number, user:User ):boolean{
        let user_index = this.Users.findIndex( (user) => user.id === id)

        if(user_index !== -1){
            const olduser = this.Users[user_index]
            
            this.Users[user_index] = {
                id: user.id,
                name: user.name,
                email: user.email,
                cellphone: user.cellphone,
                
            }

            this.checkOldUser(olduser,user_index)
            return true
        }
        return false
    }

    checkOldUser(olduser:User,user_index:number){
        if (this.Users[user_index].id === undefined) {
            this.Users[user_index].id = olduser.id
        }
        if (this.Users[user_index].name === undefined) {
            this.Users[user_index].name = olduser.name
        }
        if (this.Users[user_index].email === undefined) {
            this.Users[user_index].email = olduser.email
        }
        if (this.Users[user_index].cellphone === undefined) {
            this.Users[user_index].cellphone = olduser.cellphone
        }
    }*/
    
}
