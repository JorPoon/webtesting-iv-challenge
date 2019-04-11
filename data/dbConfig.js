const knex = require('knex');
const config = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development';

//config[dbEnv] >>>> error says client is undefined
module.exports = knex(config.development);
