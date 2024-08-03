const cacheService = require('../services/cache');


function changeSize(req, res) {
    try {
        res.json(cacheService.changeSize(Number(req.query.newSize)));
    } catch (error) {
        res.status(500).send(`Error while changing cache size.`)
    }
}

function clearCache(req, res) {
    try {
        res.json(cacheService.clearCache());
    } catch (error) {
        res.status(500).send(`Error while cleaning cache.`)
    }
}

async function updateCache(req, res) {
    try {
        res.json(await cacheService.updateCache());
    } catch (error) {
        res.status(500).send(`Error while updating cache.`)
    }
}


module.exports = {
    changeSize,
    clearCache,
    updateCache,
}