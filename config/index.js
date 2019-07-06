const path = require('path');
let env = process.env.NODE_ENV || 'dev';
env = env.toLowerCase();
const config = require(path.resolve(__dirname, env));
module.exports = config;