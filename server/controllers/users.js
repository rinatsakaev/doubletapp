import User from '../models/User';

export async function getUsers(req, res) {
    const users = await User.findAll();
    res.json(users);
}

export async function createUser(req, res) {
    await User.create(req.body);
    res.sendStatus(200);
}

export async function deleteUser(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user)
        res.sendStatus(404);

    await user.destroy();
    res.sendStatus(200);
}

export async function getUser(req, res) {
    const user = await User.findByPk(req.params.id);
    res.json(user);
}
