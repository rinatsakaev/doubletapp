import Color from '../models/Color';

export async function getColors(req, res) {
    const colors = await Color.findAll();
    return res.json(colors);
}
