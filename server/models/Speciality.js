import * as Sequelize from 'sequelize';
import {Model} from 'sequelize';

class Speciality extends Model {
    static init(sequelize) {
        return super.init({
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
            }
        )
    }
}
