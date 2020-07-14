import * as Sequelize from 'sequelize';
import {Model} from 'sequelize';
import sequelize from '../sequelizeConnection';

export default class Color extends Model {}

Color.init({
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {sequelize}
);


