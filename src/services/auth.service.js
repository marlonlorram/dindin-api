/**
 * @module auth.service
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Service for auth-related business logic.
 */

const bcrypt = require('bcrypt');

const { badRequest, conflict } = require('../utils/errors');

const userRepository = require('../repositories/user.repository');

/**
 * Registers a new user.
 *
 * @function
 * @param {Object} userData - User details.
 * @param {string} userData.name - User's name.
 * @param {string} userData.email - User's email.
 * @param {string} userData.password - User's password.
 * @return {Object} Registered user.
 */
const register = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw badRequest('Name, email, and password are required.');
  }

  const emailExists = await userRepository.checkEmailExists(email);

  if (emailExists) {
    throw conflict('Email already registered.');
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const userCreated = await userRepository.createUser(
    name,
    email,
    hashedPassword,
  );

  return userCreated;
};

module.exports = {
  register,
};
