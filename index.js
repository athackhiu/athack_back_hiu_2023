var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var userRouter = require('./routes/user');

var lilibotRouter = require('./routes/lilibot');

const cors = require('cors');
var app = express();
require('dotenv').config();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/chatbot', lilibotRouter);


app.use(function(req, res, next) { next(createError(404)); });
app.use(function(err, req, res, next) 
{
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

var port = 4000;
app.listen(port, () => console.log(` listening on port ${port}!`));

module.exports = app;
