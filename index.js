let env = process.env.NODE_ENV || 'development';
let knex = require('knex')(require('./knexfile')[env]);
let fs = require('fs-extra');
let config = require('./config/config.json')[env];

require('pretty-error').start();

import postgraphql from 'postgraphql';
import winston from './middleware/koawinston';
import Koa from 'koa';
let app = new Koa();


app.use(
  postgraphql(
    `postgres:${config.USER}:${config.PASSWORD}@${config.HOST}:${config.PORT}/${config.DBNAME}`, //concat to shorten later
    'public', //schema
    { graphiql: true } //options
  )
);

winston.log('debug', 'PostGraphQL connection established');


// move this to middleware as well
//
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



app.listen(3000, () => winston.log('debug', 'server running on localhost:3000'));
