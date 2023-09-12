var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gastosRouter = require('./routes/gastosRouter');
var sessionRouter = require('./routes/sessionRouter');
const { log } = require('console');


var app = express();


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

/**Setting */
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

/**Middlewares */


/**Routes */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gastos', gastosRouter);
app.use('/sesion', sessionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
