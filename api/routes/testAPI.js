var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Sending from Backend API');
});

module.exports = router;