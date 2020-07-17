import User from '../models/User';
import Color from '../models/Color';
import Group from '../models/Group';
import Gender from '../models/Gender';
import Speciality from '../models/Speciality';

export async function getUsers(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const users = await User.findAll({
        include: [{model: Color},
            {model: Group,
            include: Speciality},
            {model: Gender}]
    });
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
