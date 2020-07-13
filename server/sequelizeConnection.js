import {Sequelize} from 'sequelize';
import path from "path";
const connection =  new Sequelize('qhlpwazs', 'qhlpwazs', '6EChyrCaOZaXSTqD6INjn1Qh-dafmurf',
    {
        host: 'rogue.db.elephantsql.com',
        dialect: 'postgres',
        models: [path.join(__dirname, 'models')]
    });
export default connection;
