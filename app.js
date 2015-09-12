var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var Sequelize = require('sequelize');

var controllers = require('./controllers/index');

var app = express();

// MySQL Database connection
// var sequelize = new Sequelize('mysql://localhost:3307/lahman_baseball_stats', 'username=baseball', 'password=baseball123');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// model setup
// var models = require('sequelize-import')('./models');
var models = require('./models');
models.sequelize.sync();



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', controllers);

// Temp Data for Testing
// var tempData = {
//   "name": "temp",
//   "title": "you know it"
// }

// API Commented out for testing
// app.get('/api', function(req, res) {
//   var masters = models.Batting.findAll().then(function(masters) {
//     // JSON.stringify(masters);
//     res.json(masters);
//     res.end;
//   });
// });

// TEST API CALL
app.get('/api', function(req, res) {
  var testData = models.Batting.findAll({
    include: [{
      model: models.Master,
      where: { playerID: "abadj101"}
    }]
  }).then(function(masters) {
    // JSON.stringify(masters);
    res.json(masters);
    res.end;
  });
});

app.get('/api/:id', function(req, res) {
  var master = models.Master.findById();
  res.send("get by id");
  res.end
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
