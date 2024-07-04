exports.createUser = (req, res) => {
   
        const { id, nameUser, email, phone } = req.body;
        const newUser = User.createUser(id, nameUser, email, phone);
        res.status(201).json(newUser);
    }

exports.updateUser = (req, res) => {
        const { id } = req.params;
        const updatedUser = User.updateUser(Number(id), req.body);
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }


exports.deleteUser = (req,res) => {
    const { id } = req.params;
    const deletedUser = User.deleteUser(Number(id));
    if (deletedUser) {
        res.json(deletedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}



