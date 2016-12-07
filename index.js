const config = require('./config/config');
const winston = require('winston');
const Sequelize = require('sequelize');

winston.configure({

   transports: [
     new (winston.transports.Console)({ level: 'debug' }),
     new (winston.transports.File)({ filename: 'logs/postgresIndexjs.log' , level: 'info' })
   ]

   // move this to ./config/config eventually
});

let sequelize = new Sequelize(`postgres://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.dbname}`);



sequelize
  .authenticate()
  .then(function(err) {
    winston.log('debug', 'Connection has been established successfully.');
  })
  .catch(function (err) {
    winston.log('error', 'Unable to connect to the database:');
  });


var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});


sequelize.sync().then(function() {
  return User.create({
    username: 'paul doe',
    birthday: new Date(1989, 1, 12)
  });
}).then(function(jane) {

  console.log(jane.get({
    plain: true
  }));
});


winston.log('debug', 'test pull request');