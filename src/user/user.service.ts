import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/src/user.dto';

@Injectable()
export class UserService {
    users: UserDto[] = [];
    constructor() {
        let user1: UserDto = new UserDto();
        user1.id = 1;
        user1.nameUser = "Tami";
        user1.email = "tami96910@gmail.com";
        user1.phone = "0504196910";
        let user2: UserDto = new UserDto();
        user2.id = 3;
        user2.nameUser = "Ran";
        user2.email = "ran1234@gmail.com";
        user2.phone = "0504155610";
        let user3: UserDto = new UserDto();
        user3.id = 2;
        user3.nameUser = "Gili";
        user3.email = "gili000@gmail.com";
        user3.phone = "0528794556";
        this.users.push(user1, user2, user3)
    }
    getAllUsers(): UserDto[] {
        return this.users;
    }
    getUserById(id: number): UserDto {
        return this.users.find(x => x.id == id);
    }
    addUser(user: UserDto) {
        return this.users.push(user);
    }
    
    updateUser(id: number, user: UserDto): UserDto {
        let index = this.users.findIndex(x => x.id === id);
        if (index >= 0) {
            this.users[index] = user;
            return this.users[index];
        }
        return null;
    }
    
    deleteUser(id: number): UserDto {
        let index = this.users.findIndex(x => x.id === id);
        if (index >= 0) {
            const deletedUser = this.users.splice(index, 1)[0];
            return deletedUser;
        }
        return null;
    }
    
}
