const express = require('express');
const router = express.Router();
const cacheController = require('../controllers/cache');


router.patch('/clear', (req, res) => {
    /* #swagger.summary = 'Очистка кэша';
       #swagger.description = 'Очищает имеющийся кэш.';
       #swagger.tags = ['Cache']
       #swagger.responses[200] = {
            description: 'Сообщение об успешном очищении кэша',
            schema: {
                message: "Кэш очищен."
            }
    }; */

    return cacheController.clearCache(req, res);
});
    
router.patch('/change-size', (req, res) => {
    /* #swagger.summary = 'Изменение размера кэша';
       #swagger.description = 'Изменяет размер кэша.';
       #swagger.tags = ['Cache']
       #swagger.parameters['newSize'] = {
            in: "query",                            
            description: "Размер кэша (в количестве элементов)",                   
            required: "true",                     
            type: "integer",
            schema: "3"                                               
       };
       #swagger.responses[200] = {
            description: 'Сообщение об успешном изменении размера кэша',
            schema: {
                message: "Размер кэша изменён."
            }
    }; */

    return cacheController.changeSize(req, res);
});
router.patch('/update', (req, res) => {
    /* #swagger.summary = 'Обновление кэша';
       #swagger.description = 'Обновляет кэш.';
       #swagger.tags = ['Cache']
       #swagger.responses[200] = {
            description: 'Сообщение об успешном обновлении кэша',
            schema: {
                message: "Кэш обновлён."
            }
    }; */
    
    return cacheController.updateCache(req, res);
});

module.exports = router