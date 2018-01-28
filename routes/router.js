const express = require('express');
const router = express.Router();
// const views = require('../views');

router.get('/', function(req, res, next){
  res.render('index');
});

module.exports = router;
