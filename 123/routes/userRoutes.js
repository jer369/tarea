const express = require('express');
const { getUser, updateUser, updateUserStatus, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:id', authMiddleware, getUser);
router.put('/:id', authMiddleware, updateUser);
router.patch('/:id', authMiddleware, updateUserStatus);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
