/**
 * @module migrate
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Responsible for executing database migrations for the application.
 */

require('dotenv').config();

const fs = require('fs');
const path = require('path');

const Pool = require('../src/config/database');

/**
 * Wraps the database operation in a transaction.
 *
 * @param {Function} cb - The callback function containing database operations.
 */
const tx = async (cb) => {
  try {
    await Pool.query('BEGIN');
    await cb(Pool);
    await Pool.query('COMMIT');
  } catch (err) {
    await Pool.query('ROLLBACK');
    throw err;
  }
};

/**
 * Executes a specific migration.
 *
 * @param {string} file - Migration file name.
 */
const execute = async (file) => {
  const filePath = path.join(__dirname, '..', 'migrations', file);
  const sql = fs.readFileSync(filePath, 'utf-8');

  await tx(async (client) => {
    try {
      await client.query(sql);
      console.log(`Executed migration: ${file}`);
    } catch (err) {
      console.error(`Error executing migration ${file}:`, err.message);
      throw err;
    }
  });
};

/**
 * Runs all migrations in sequence.
 */
const run = async () => {
  const migrationFiles = fs
    .readdirSync(path.join(__dirname, '..', 'migrations'))
    .sort();

  for (const file of migrationFiles) {
    await execute(file);
  }

  await Pool.end();
};

run();
