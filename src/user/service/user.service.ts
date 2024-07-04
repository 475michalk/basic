import { Injectable } from '@nestjs/common';

export class User {
    constructor(
        public id: number,
        public nameUser: string,
        public email: string,
        public phone: string
    ) { }

    static users: User[] = [];

    static createUser(id: number, nameUser: string, email: string, phone: string): User {
        if (!id || typeof id !== 'number') {
            throw new Error('ID must be a number and is required');
        }

        if (!nameUser || typeof nameUser !== 'string') {
            throw new Error('Name must be a string and is required');
        }

        if (!email || typeof email !== 'string') {
            throw new Error('Email must be a string and is required');
        }

        if (!phone || typeof phone !== 'string') {
            throw new Error('Phone must be a string and is required');
        }

        if (!email.includes('@') || email.includes(' ')) {
            throw new Error('Invalid email format');
        }

        const newUser = new User(id, nameUser, email, phone);
        // Save or return newUser as needed
        return newUser;
    }


    static updateUser(id: number, updatedUser: Partial<User>): User | null {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
            return this.users[userIndex];
        }
        return null;
    }

    static deleteUser(id: number): User | null {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            const [deletedUser] = this.users.splice(userIndex, 1);
            return deletedUser;
        }
        return null;
    }
}

@Injectable()
export class UserService {
    createUser(id: number, nameUser: string, email: string, phone: string): User {
        return User.createUser(id, nameUser, email, phone);
    }

    updateUser(id: number, updatedUser: Partial<User>): User | null {
        return User.updateUser(id, updatedUser);
    }

    deleteUser(id: number): User | null {
        return User.deleteUser(id);
    }

    findAll(): User[] {
        return User.users;
    }

    findOne(id: number): User | undefined {
        return User.users.find(user => user.id === id);
    }
}
