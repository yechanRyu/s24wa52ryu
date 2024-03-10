var express = require('express');
var router = express.Router();
var min = 1;
var max = 10;
var x = Math.floor(Math.random()* (max - min + 1) + min);
var y = Math.floor(Math.random()* (max - min + 1) + min);
var r = Math.hypot(x,y);
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(`Math.hypot(${x},${y}) applied to ${x},${y} is ${r}`);
});

module.exports = router;
