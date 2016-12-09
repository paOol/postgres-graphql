let env = process.env.NODE_ENV || 'development';
let knex = require('knex')(require('./knexfile')[env]);
let winston = require('winston');
let fs = require('fs-extra');
require('winston-papertrail').Papertrail;

winston.configure({
  transports: [
      new(winston.transports.Console)({
        level: 'debug',
        colorize: true,
        prettyPrint: true
      }),
      new(winston.transports.File)({
        filename: 'logs/postgresIndexjs.log',
        level: 'info'
      })
    ]
    // move this to ./config/config eventually
});
if (env == 'production') {
  winston.add(winston.transports.Papertrail, {
    host: 'logs5.papertrailapp.com',
    port: 47865,
    level: 'debug',
    colorize: true,
    prettyPrint: true
  });
}

//eventually put this in a function and move out of index.js
knex.migrate.latest()
  .then(function() {
    if (fs.existsSync(__dirname + `/db/seeds/${env}`)) {
      winston.log('info', `seeding ${env} db`);
      winston.log('info', 'ran migrations from index.js. DB should be up to date.');
      return knex.seed.run();
    } else {
      winston.log('info', `${env} seed directory does not exist. seeding will not occur`);
    }
  })
  .finally(function() {
    process.exit();
  });
