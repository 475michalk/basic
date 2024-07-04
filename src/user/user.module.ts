import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {

//   constructor(
//     public id?: number,
//     public nameUser?: string,
//     public email?: string,
//     public phone?: string
// ) {}

// static users: UserModule[] = [];

// static createUser(id: number, nameUser: string, email: string, phone: string): UserModule {
//     if (!id || !nameUser || !email || !phone) {
//         throw new Error('All fields are required');
//     }

//     if (!email.includes('@') || email.includes(' ')) {
//         throw new Error('Invalid email format');
//     }

//     const newUser = new UserModule(id, nameUser, email, phone);
//     this.users.push(newUser);
//     return newUser;
// }

// static updateUser(id: number, updatedUser: UserModule): UserModule | null {
//   const userIndex = this.users.findIndex(user => user.id === id);
//   if (userIndex !== -1) {
//       this.users[userIndex] = updatedUser;
//       return this.users[userIndex];
//   }
//   return null;
// }


// static deleteUser(id: number): UserModule | null {
//     const userIndex = this.users.findIndex(user => user.id === id);
//     if (userIndex !== -1) {
//         const [deletedUser] = this.users.splice(userIndex, 1);
//         return deletedUser;
//     }
//     return null;
// }
}



