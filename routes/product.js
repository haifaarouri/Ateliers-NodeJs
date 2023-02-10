var product = require('../products.json')
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=> {
    res.json(product);
});

router.get('/:id', (req, res, next)=> {
    res.json(product[req.params.id]);
});

router.get('/:id/:qt', (req, res, next)=> {
    res.json({
        id : req.params.id,
        qt : req.params.qt,
        unit_price : Math.floor(product[req.params.id].price),
        total_price : Math.floor(product[req.params.id].price) * req.params.qt,
    });
});

module.exports = router;