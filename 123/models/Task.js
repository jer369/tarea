const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Task = sequelize.define('Task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {});

Task.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Task, { foreignKey: 'userId' });

module.exports = Task;
