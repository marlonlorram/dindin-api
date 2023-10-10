/**
 * @module database
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * Establishes and manages the connection to the PostgreSQL database.
 */

const { Pool } = require('pg');

const {
  DATABASE_USER: user,
  DATABASE_NAME: database,
  DATABASE_PORT: port,
  DATABASE_HOST: host,
  DATABASE_PASS: password,
} = process.env;

/**
 * Establishes a pool connection with the PostgreSQL database
 * using the settings specified by the environment variables.
 */
const pool = new Pool({
  user,
  database,
  port,
  host,
  password,
});

module.exports = pool;
