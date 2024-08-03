require('dotenv/config');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger/swagger-output.json');
const cacheRouter = require('./routes/cache');
const animeRouter = require('./routes/anime');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/cache', cacheRouter);
app.use('/anime', animeRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});