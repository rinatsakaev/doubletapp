import User from '../models/User';
import Color from '../models/Color';
import Group from '../models/Group';
import Gender from '../models/Gender';
import Speciality from '../models/Speciality';

export async function getUsers(req, res) {
    const users = (await User.findAll({
        include: [{model: Color},
            {model: Group},
            {model: Gender}]
    })).map(x => x.toJSON());
    const specialities = (await Speciality.findAll()).map(x => x.toJSON());
    for (let i = 0; i < users.length; i++)
        users[i].Group.Speciality = specialities.find(x => x.id === users[i].Group.SpecialityId);

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
