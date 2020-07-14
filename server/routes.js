import {getUsers, getUser, createUser, deleteUser} from './controllers/users';
async function errorWrapper(req, res, func) {
    try{
        await func(req, res);
    } catch (e) {
        res.sendStatus(500);
    }
}
export default (app) => {
    app.get('/users/', (req, res) => errorWrapper(req, res, getUsers));
    app.get('/users/:id', (req, res) => errorWrapper(req, res, getUser));
    app.delete('/users/:id', (req, res) => errorWrapper(req, res, deleteUser));
    app.post('/users/create', (req, res) => errorWrapper(req, res, createUser));
};
