import {Model} from 'sequelize';
import {DataTypes} from 'sequelize';
import sequelize from '../sequelizeConnection';

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
