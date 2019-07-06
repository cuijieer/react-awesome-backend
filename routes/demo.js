const router = require('koa-router')();
const demo = require('./../service/demo');

router.get('/', demo.home);

module.exports = [router.routes(), router.allowedMethods()];