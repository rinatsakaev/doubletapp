import {getUsers, getUser, createUser, deleteUser} from './controllers/users';
import {getColors} from './controllers/colors';
import {getSpecialities} from './controllers/specialities';
import {getGenders} from './controllers/genders';
import path from "path";
async function errorWrapper(req, res, func) {
    try{
        await func(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}
export default (app) => {
    app.get('/users/', (req, res) => errorWrapper(req, res, getUsers));
    app.get('/colors/', (req, res) => errorWrapper(req, res, getColors));
    app.get('/genders/', (req, res) => errorWrapper(req, res, getGenders));
    app.get('/specialities/', (req, res) => errorWrapper(req, res, getSpecialities));
    app.get('/users/:id', (req, res) => errorWrapper(req, res, getUser));
    app.delete('/users/:id', (req, res) => errorWrapper(req, res, deleteUser));
    app.post('/users/', (req, res) => errorWrapper(req, res, createUser));
};
