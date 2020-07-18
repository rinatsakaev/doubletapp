import Speciality from '../models/Speciality';
import Group from '../models/Group';

export async function getSpecialities(req, res) {
    return res.json(await Speciality.findAll({
            include: [{model: Group}]
        }));
}
