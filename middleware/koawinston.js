let koawinston = require('winston');
let env = process.env.NODE_ENV || 'development';

require('winston-papertrail').Papertrail;

// move to koa middleware
koawinston.configure({
  transports: [
      new(koawinston.transports.Console)({
        level: 'debug',
        colorize: true,
        prettyPrint: true
      }),
      new(koawinston.transports.File)({
        filename: 'logs/postgresIndexjs.log',
        level: 'info'
      })
    ]
});
if (env == 'production') {
  koawinston.add(koawinston.transports.Papertrail, {
    host: 'logs5.papertrailapp.com',
    port: 47865,
    level: 'debug',
    colorize: true,
    prettyPrint: true
  });
}


export default koawinston;