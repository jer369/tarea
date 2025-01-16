const express = require('express');
const { getTasks, createTask, getTask, updateTask, updateTaskStatus, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, createTask);
router.get('/:id', authMiddleware, getTask);
router.put('/:id', authMiddleware, updateTask);
router.patch('/:id', authMiddleware, updateTaskStatus);
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
