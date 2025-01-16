const { User } = require('../models');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({ username, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username, password } });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    res.json({ message: 'Login exitoso' });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

module.exports = { getUsers, createUser, loginUser };
