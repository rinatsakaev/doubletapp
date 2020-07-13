import * as Sequelize from 'sequelize';
import {Model} from 'sequelize';

class User extends Model{
    static init(sequelize){
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            fullName:{
                type: Sequelize.STRING,
                allowNull: false
            },
            rating:{
                type: Sequelize.INTEGER,
                allowNull: false
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        }, {sequelize})
    };
    static associate(models){
        this.group = this.belongsTo(models.Group);
        this.color = this.belongsTo(models.Color);
        this.gender = this.belongsTo(models.Gender);
    }
}
