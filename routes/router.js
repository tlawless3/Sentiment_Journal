const express = require('express');
const router = express.Router();
const sentiment = require('sentiment');
const models = require('../models');
const Journals = models.Journals;

router.get('/', function(req, res, next){
  res.render('index');
});

router.get('/journal', function(req, res, next){
  res.render('journal');
});

router.post('/journal', function(req, res, next){
  console.log(req.body.journalEntry);
  Journals.create({
    Content: null,
    Score: sentiment(req.body.journalEntry).score,
  })
  .then(function(){
    res.redirect('/');
  })
  .catch(function(err){
    next(err);
  })
});

module.exports = router;
