import * as Sequelize from 'sequelize';
import {Model} from 'sequelize';
import sequelizeConnection from '../sequelizeConnection';

export default class Color extends Model {
    static init() {
        return super.init({
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
            }
        )
    }
}
