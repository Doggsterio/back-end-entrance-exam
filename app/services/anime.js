require('dotenv/config');
const cache = require('../domain/cache.js');
const errors = require('../static-data/errors.json');


async function getData(id) {

    if (!Number.isFinite(id)) {
        return { "Error": errors.anime.idError };
    }

    if (cache.has(id)) {
        return cache.getData(id);
    }

    const fetchedData = await fetch(`${process.env.API_URL}/${id}`).then( (data) => data.json() );

    cache.addData(id, fetchedData);

    return fetchedData;
}

module.exports = {
    getData,
}