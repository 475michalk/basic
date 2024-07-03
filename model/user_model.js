class User {
    constructor() {
        this.users = [];
        this.currentId = 1;
    }

    addUser(name, email, phone) {
        const newUser = {
            id: this.currentId,
            user_name: name,
            email: email,
            phone: phone
        };
        this.users.push(newUser);
        this.currentId++;
        return newUser;
    }

    updateUser(id, updatedUser) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { id: id, ...updatedUser };
            return this.users[userIndex];
        }
        return null;
    }

    deleteUser(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            const deletedUser = this.users.splice(userIndex, 1);
            return deletedUser[0];
        }
        return null;
    }


}
exports.User = User;