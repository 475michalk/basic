const express = require('express');
const { addUser, updateUser, deleteUser } = require('./controllers/user_controller');

const router = express.Router();

router.post("/", addUser);
router.put("/", updateUser);
router.delete("/", deleteUser);


module.exports = router;








