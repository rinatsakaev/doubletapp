import * as Sequelize from 'sequelize';
import {Model} from 'sequelize';
import Speciality from './Speciality';
import sequelize from '../sequelizeConnection';

export default class Group extends Model {}
Group.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {sequelize});
Group.belongsTo(Speciality);
