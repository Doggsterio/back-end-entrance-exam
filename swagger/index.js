const swaggerAutogen = require('swagger-autogen');
const path = require('path');
require('dotenv/config');

const doc = {
    info: {
        title: 'REST API',
        version: '1.0.0',
        description: 'Описание REST API сервиса по управлению кэшем.'
    },
    host: `localhost:${process.env.PORT}`
};

const outputFile = path.join(__dirname, 'swagger-output.json');
const endpointsFiles = [path.join(__dirname, '../app.js')];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(({ success }) => {
    console.log(`Generated: ${success}`)
});