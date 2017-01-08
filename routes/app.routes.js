var express = require('express');
var router = express.Router();

router.get('/', function(req, res, net) {
    res.render('home');
});

module.exports = router;