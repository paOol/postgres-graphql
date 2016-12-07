const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const winston = require('winston');
const Sequelize = require('sequelize');

winston.configure({

   transports: [
     new (winston.transports.Console)({ level: 'debug', json: true }),
     new (winston.transports.File)({ filename: 'logs/postgresIndexjs.log' , level: 'info' })
   ]

   // move this to ./config/config eventually
});


winston.log('debug', process.env);

let sequelize = new Sequelize(`${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/${config.POSTGRES_DBNAME}`);


sequelize
  .authenticate()
  .then(function(err) {
    winston.log('debug', 'Connection has been established successfully.');
  })
  .catch(function (err) {
    winston.log('error', 'Unable to connect to the database:');
  });


// winston.log('debug', process.env);

// var User = sequelize.define('user', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
// });


// sequelize.sync().then(function() {
//   return User.create({
//     username: 'paul doe',
//     birthday: new Date(1989, 1, 12)
//   });
// }).then(function(jane) {

//   console.log(jane.get({
//     plain: true
//   }));
// });

