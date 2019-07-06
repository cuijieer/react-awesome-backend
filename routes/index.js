const compose = require('koa-compose');

const demo = require('./demo');
const user = require('./user');

module.exports = compose([
    ...demo,
    ...user
]);