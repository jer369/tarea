const { Task } = require('../models');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.user.id } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
};

const createTask = async (req, res) => {
  try {
    const { name } = req.body;
    const newTask = await Task.create({ name, userId: req.user.id });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear tarea' });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la tarea' });
  }
};

const updateTask = async (req, res) => {
  try {
    const { name } = req.body;
    const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    task.name = name;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { done } = req.body;
    const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    task.done = done;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el estado de la tarea' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    await task.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};

module.exports = { getTasks, createTask, getTask, updateTask, updateTaskStatus, deleteTask };
