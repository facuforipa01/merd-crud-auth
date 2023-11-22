import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/config.js';
import User from './user.js';

class Task extends Model { }

Task.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false

    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
        unique: false
    },
    user:{
        type:DataTypes.INTEGER,
        foreignKey:true
        }
   },
    {
        sequelize,
        modelName: 'Task'
    });
      
    Task.belongsTo(User, {
        foreignKey: 'id', 
       })
       
       User.hasMany(Task, {
         foreignKey: 'id'
        })

Task.sync()
    .then(() => {
        console.log('La tabla de Task ha sido creada');
    })
    .catch((error) => {
        console.error('Error al crear la tabla de Task: ', error);
    });

export default Task;