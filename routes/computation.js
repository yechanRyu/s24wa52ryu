var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();
var r = Math.hypot(x,y);
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(`Math.hypot${x,y} applied to ${x,y} is ${r}`);
});

module.exports = router;
