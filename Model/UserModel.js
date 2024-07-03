class User {
    constructor(id, nameUser, email, phone) {
        this.id = id;
        this.nameUser = nameUser;
        this.email = email;
        this.phone = phone;
    }

    static users = []; // מערך לאחסון המשתמשים

 
    static createUser(id, nameUser, email, phone) {
        if (!id || !nameUser || !email || !phone) {
            throw new Error('All fields are required');
        }
    
        if (!email.includes('@') || email.includes(' ')) {
            throw new Error('Invalid email format');
        }
    
        const newUser = new User(id, nameUser, email, phone);
        this.users.push(newUser);
        return newUser;
    }
    
    static updateUser(id, updatedUser) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { id: id, ...updatedUser };
            return this.users[userIndex];
        }
        return null;
    }

    static deleteUser(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            const deletedUser = this.users.splice(userIndex, 1);
            return deletedUser[0];
        }
        return null;
    }

   
}

module.exports= User;
