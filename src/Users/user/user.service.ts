import { User } from './../../Models/user.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly Users: User[] = []

    create(user:User){
        this.Users.push(user)
    }

    getAll(): User[]{
        return this.Users;
    }

    getByEmail(email: string): User{
        return this.Users.find( (user) => user.email === email )
    }
    

}
