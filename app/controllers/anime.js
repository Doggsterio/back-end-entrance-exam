const animeService = require('../services/anime');


async function getData(req, res) {
    try {
        const data = await animeService.getData(Number(req.params.id));
        res.json(data);
    } catch (error) {
        res.status(500).send(`Error while getting anime info (anime id - ${req.params.id})`)
    }
}


module.exports = {
    getData,
}