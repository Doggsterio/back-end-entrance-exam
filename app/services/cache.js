require('dotenv/config');
const cache = require('../domain/cache.js');
const errors = require('../static-data/errors.json');
const messages = require('../static-data/messages.json');


function changeSize(size) {
    if (!Number.isFinite(size)) {
        return { "Error": errors.cache.numericError };
    }

    if (size === 0) {
        return { "Error": errors.cache.zeroError };
    }

    cache.changeSize(size);
    return { "message": messages.cache.sizeChanged };
}

function clearCache() {
    cache.clear();
    return { "message": messages.cache.cacheCleared };
}

async function updateCache() {
    let newValue;

    for (let key of cache.cache.keys()) {
        newValue = await fetch(`${process.env.API_URL}/${key}`).then( (data) => data.json());

        cache.updateData(key, newValue);
    }

    return { "message":  messages.cache.cacheUpdated };
}


module.exports = {
    changeSize,
    clearCache,
    updateCache,
}