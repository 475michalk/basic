const express = require('express');
const { createUser, updateUser, deleteUser } = require('../Controller/UserController');

const router = express.Router();

router.post("/", createUser);
router.put("/", updateUser);
router.delete("/", deleteUser);


module.exports = router;