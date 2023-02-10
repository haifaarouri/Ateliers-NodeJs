var express = require('express');
var router = express.Router();
var os = require('os');

router.get('/', (req, res, next) => {
    res.json({
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform(),
    })
});

router.get('/cpus', (req, res, next)=> {
    res.json({
        cpus : os.cpus(),
    })
})

module.exports = router;