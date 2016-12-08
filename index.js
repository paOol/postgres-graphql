let env = process.env.NODE_ENV || 'development';
let knex = require('knex')(require('./knexfile')[env]);
let winston = require('winston');
let fs = require('fs-extra');

winston.configure({
  transports: [
      new(winston.transports.Console)({ level: 'debug', json: true }),
      new(winston.transports.File)({ filename: 'logs/postgresIndexjs.log', level: 'info' })
    ]
    // move this to ./config/config eventually
});

knex.migrate.latest()
  .then(function() {
    if (fs.existsSync(__dirname + `/db/seeds/${env}`)) {
      winston.log('info', `seeding ${env} db`);
      return knex.seed.run();
    }
    else{
      winston.log('info', `${env} seed directory does not exist. seeding will not occur`);
    }
  })
  .then(function() {
    winston.log('info', 'ran migrations from index.js. DB should be up to date.');
    process.exit();
  });
