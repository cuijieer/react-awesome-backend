const Koa = require('koa');
const app = new Koa();
const router = require('./routes');
const logger = require('koa-logger');
const json = require('koa-json');
const session = require('koa-session');

app.context.name = 'pangpang';
// session
app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess', 
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true, 
  rolling: false,
  renew: false
};
app.use(session(CONFIG, app));
// logger
app.use(logger());
// json
app.use(json());
// router
app.use(router);
// error
app.on('error', err => {
    console.error('server error', err)
});

app.listen(3001);