import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { UserDto } from 'src/src/user.dto';

@Controller('user')
export class UserController {
    constructor(private srv: UserService) {}

    @Get()
    getUsers() {
        return this.srv.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') userId: string, @Res() res: Response) {
        const user = this.srv.getUserById(Number(userId));
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(user);
    }

    @Post()
    addUser(@Body() newUser: UserDto, @Res() res: Response) {
        this.srv.addUser(newUser);
        return res.json({ message: "User added", user: newUser });
    }

    @Put(':id')
    updateUser(@Body() updateUser: UserDto, @Param('id') id: string, @Res() res: Response) {
        const updatedUser = this.srv.updateUser(Number(id), updateUser);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ message: "User updated", user: updatedUser });
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string, @Res() res: Response) {
        const deletedUser = this.srv.deleteUser(Number(id));
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ message: "User deleted", user: deletedUser });
    }
}
