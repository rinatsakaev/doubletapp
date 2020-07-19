import {Sequelize} from 'sequelize';
import path from "path";
import config from "./dbConfig";
const connection =  new Sequelize(config.database, config.username, config.password,
    {
        host: config.host,
        dialect: config.dialect,
        models: [path.join(__dirname, 'models')]
    });
export default connection;
