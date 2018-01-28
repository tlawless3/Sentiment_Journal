var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var sentiment = require('sentiment');
var router = require('./routes/router');
var nunjucks = require('nunjucks');

var env = nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.use('/', router);

app.listen(3000, function () {
  console.log('Server is listening on port 3000!');
});

module.exports = app;
