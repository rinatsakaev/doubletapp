import * as Sequelize from 'sequelize';
import {Model} from 'sequelize';
import sequelize from '../sequelizeConnection';
export default class Gender extends Model {}
Gender.init(
    {
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
    }, {sequelize}
);
