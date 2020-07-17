import {Model} from 'sequelize';
import {DataTypes} from 'sequelize';
import sequelize from '../sequelizeConnection';
import Group from './Group';

export default class Speciality extends Model {
}

Speciality.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {sequelize}
);
Speciality.hasMany(Group);
