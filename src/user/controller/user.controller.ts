import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserModule } from '../user.module';

@Controller('user')
export class UserController {

   
    constructor(private userService: UserService) {}

    @Post()
    createUser(@Body() userData: { id: number, nameUser: string, email: string, phone: string }): UserModule {
        const { id, nameUser, email, phone } = userData;
        return this.userService.createUser(id, nameUser, email, phone);
    }

    @Patch(':id')
    updateUser(@Param('id') id: number, @Body() updatedUser: Partial<UserModule>): UserModule | null {
        return this.userService.updateUser(id, updatedUser);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): UserModule | null {
        return this.userService.deleteUser(id);
    }
    
}
