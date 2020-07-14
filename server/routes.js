import {getUsers, getUser, createUser, deleteUser} from './controllers/users';

export default (app) => {
    app.get('/users/', getUsers);
    app.get('/users/:id', getUser);
    app.delete('/users/:id', deleteUser);
    app.post('/users/create', createUser);
};
