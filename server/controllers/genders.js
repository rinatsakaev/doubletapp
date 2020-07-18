import Gender from '../models/Gender';
export async function getGenders(req, res) {
    const genders = await Gender.findAll();
    return res.json(genders);
}
