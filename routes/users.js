var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to my Humble abode of peace my dear friends!');
});

module.exports = router;