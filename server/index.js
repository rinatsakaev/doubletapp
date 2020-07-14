import data from './data.json';
import sequelizeConnection from './sequelizeConnection';
import express from 'express';
import Speciality from './models/Speciality';
import Group from './models/Group';
const app = express();
app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

sequelizeConnection.authenticate()
    .then(() => sequelizeConnection.sync({force: true}))
    .then(() => {
        Speciality.bulkCreate(data.specialities)
            .then(() => Group.bulkCreate(data.groups))
    })
    .then(() => {
        const port = 9090;

        app.listen(port, async () => {
            console.info(`Server started on ${port}`);
            console.info(`Open http://localhost:${port}/`);
        });
    });
