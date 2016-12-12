let env = process.env.NODE_ENV || 'development';
let knex = require('knex')(require('./knexfile')[env]);
let winston = require('winston');
let fs = require('fs-extra');
let config = require('./config/config.json')[env];

require('winston-papertrail').Papertrail;
require('pretty-error').start();

import postgraphql from 'postgraphql'
import Koa from 'koa';
let app = new Koa();



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




// app.use(async(ctx, next) => {

  // the object syntax for this might be wrong

//   postgraphql(postgraphql({
//     pgConfig: 'postgres://blah@blah:blah',
//     schemaName: 'public',
//     options: {
//       graphiql: true,
//       enableCors: true
//     }
//   });

//   winston.log('debug', 'PostGraphQL connection established');
//   await next();
// });


//app.use(async (ctx, next) => {
  //winston.log('debug', 'inside 2nd middleware');
  // //eventually put this in a function and move out of index.js
  // knex.migrate.latest()
  //   .then(function() {
  //     if (fs.existsSync(__dirname + `/db/seeds/${env}`)) {
  //       winston.log('info', `seeding ${env} db`);
  //       winston.log('info', 'ran migrations from index.js. DB should be up to date.');
  //       return knex.seed.run();
  //     } else {
  //       winston.log('info', `${env} seed directory does not exist. seeding will not occur`);
  //     }
  //   })
  //   .catch(function(err) {
  //     winston.log('debug', err);
  //     console.log(err);
  //   })
  //   .finally(function() {
  //     process.exit();
  //   });


  //await next();
//});



// app.listen(3000, () => winston.log('debug', 'server running on localhost:3000'););



