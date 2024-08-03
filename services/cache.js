require('dotenv/config');
const cache = require('../domain/cache.js');


function changeSize(size) {
    if (size === 0) {
        return { "Error": "Размер кэша не может быть меньше или равным 0." }
    }

    cache.changeSize(size);
    return { "message": "Размер кэша изменён." };
}

function clearCache() {
    cache.clear();
    return { "message": "Кэш очищен." };
}

async function updateCache() {
    let newValue;

    for (let key of cache.cache.keys()) {
        newValue = await fetch(`${process.env.API_URL}/${key}`).then( (data) => data.json());
        cache.updateData(key, newValue);
    }

    return { "message": "Кэш обновлён." };
}


module.exports = {
    changeSize,
    clearCache,
    updateCache,
}