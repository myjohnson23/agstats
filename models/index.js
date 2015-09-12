

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");

// var sequelize = new Sequelize('mysql://127.0.0.1:3307/lahman_baseball_stats', 'username=baseball', 'password=baseball123');
var sequelize = new Sequelize('lahman_baseball_stats', 'baseball', 'baseball123', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3307,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

var db = {};

fs.readdirSync(__dirname).filter(function(file) {
 return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function(file) {
 var model = sequelize["import"](path.join(__dirname, file));
 db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
 if ("associate" in db[modelName]) {
 db[modelName].associate(db);
 }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
