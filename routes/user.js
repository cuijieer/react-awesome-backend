const router = require('koa-router')();
const user = require('./../service/user');

router.get('/user/fan', user.greeting);

module.exports = [router.routes(), router.allowedMethods()];