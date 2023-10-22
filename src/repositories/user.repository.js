/**
 * @module user.repository
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Repository for user-related database operations.
 */

const Pool = require('../config/database');

const userQueries = require('./user.queries');

/**
 * Checks if a specific email already exists in the database.
 *
 * @function
 * @param {string} email - User's email.
 * @param {string} id - User's id.
 * @return {Promise<boolean>} True if the email exists, false otherwise.
 */
const checkEmailExists = async (email, id = null) => {
  const result = await Pool.query(userQueries.checkIfEmailExists, [email, id]);
  return result.rows.length > 0;
};

/**
 * Inserts a new user into the database.
 *
 * @function
 * @param {string} name - User's name.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @return {Promise<Object>} The inserted user.
 */
const createUser = async (name, email, password) => {
  const result = await Pool.query(userQueries.createUser, [
    name,
    email,
    password,
  ]);
  return result.rows[0];
};

/**
 * Retrieve a user based on the provided email.
 *
 * @function
 * @param {string} email - User's email.
 * @return {Promise<Object|null>} User object if found, null otherwise.
 */
const findUserByEmail = async (email) => {
  const result = await Pool.query(userQueries.findUserByEmail, [email]);
  return result.rows[0] || null;
};

module.exports = {
  checkEmailExists,
  createUser,
  findUserByEmail,
};
