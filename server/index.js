import data from './data.json';
import sequelizeConnection from './sequelizeConnection';
import express from 'express';
import Speciality from './models/Speciality';
import Group from './models/Group';
import Color from './models/Color';
import Gender from './models/Gender';
import User from './models/User';
import routes from './routes';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'static')));
routes(app);
console.log("DIRNAME", path.resolve(__dirname));
sequelizeConnection.authenticate()
    .then(() => sequelizeConnection.sync({force: true}))
    .then(() => {
        Speciality.bulkCreate(data.specialities)
            .then(() => Group.bulkCreate(data.groups))
            .then(() => Color.bulkCreate(data.colors))
            .then(() => Gender.bulkCreate(data.genders))
            .then(() => User.bulkCreate(data.users))
    })
    .then(() => {
        const port = 9090;
        app.listen(port, async () => {
            console.info(`Server started on ${port}`);
            console.info(`Open http://localhost:${port}/`);
        });
    });
