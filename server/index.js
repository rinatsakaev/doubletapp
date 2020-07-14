import data from './data.json';
import sequelizeConnection from './sequelizeConnection';
import express from 'express';
import Speciality from './models/Speciality';
import Group from './models/Group';
import Color from './models/Color';
import Gender from './models/Gender';
import User from './models/User';
import routes from './routes';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes(app);
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
