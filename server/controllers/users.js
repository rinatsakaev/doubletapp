import User from '../models/User';

export async function getUsers(req, res) {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function createUser(req, res) {
    try{
        await User.create(req.body);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function deleteUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user)
            res.sendStatus(404);

        await user.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function getUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        res.json(user);
    } catch (e) {
        res.sendStatus(500);
    }
}
