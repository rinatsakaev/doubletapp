import User from '../models/User';
import Color from '../models/Color';
import Group from '../models/Group';
import Gender from '../models/Gender';
import Speciality from '../models/Speciality';
import path from 'path';
export async function getUsers(req, res) {
    const users = (await User.findAll({
        include: [{model: Color},
            {model: Group},
            {model: Gender}]
    })).map(x => x.toJSON());
    const specialities = (await Speciality.findAll()).map(x => x.toJSON());
    for (let i = 0; i < users.length; i++)
        users[i].Group.Speciality = specialities.find(x => x.id === users[i].Group.SpecialityId);

    return res.json(users);
}

export async function createUser(req, res) {
    console.log(__dirname);
    const result = await User.create(req.body);
    if (req.files){
        const extension = req.files.avatar.name.split('.').pop();
        req.files.avatar.mv(`./static/avatars/`)
            .then(res.sendStatus(200))
            .catch(x => console.log(x));
        return;
    }
    return res.sendStatus(200);
}

export async function deleteUser(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user)
        return res.sendStatus(404);

    await user.destroy();
    return res.sendStatus(200);
}

export async function getUser(req, res) {
    const user = await User.findByPk(req.params.id);
    return res.json(user);
}
