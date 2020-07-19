import * as Sequelize from 'sequelize';
import {Model} from 'sequelize';
import sequelize from '../sequelizeConnection';
import Group from './Group';
import Color from './Color';
import Gender from './Gender';

export default class User extends Model {
}

User.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    avatar: {
        type: Sequelize.STRING,
        defaultValue: 'default.png'
    }
}, {sequelize});

User.belongsTo(Group);
User.belongsTo(Color);
User.belongsTo(Gender);
