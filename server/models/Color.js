import * as Sequelize from 'sequelize';
import {Model} from 'sequelize';

class Color extends Model {
    static init(sequelize) {
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
