/**
 * @module auth.service
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Service for auth-related business logic.
 */

const bcrypt = require('bcrypt');

const { badRequest, conflict, unauthorized } = require('../utils/errors');

const userRepository = require('../repositories/user.repository');
const generateToken = require('../helpers/generateToken');

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

/**
 * Authenticates a user based on email and password.
 *
 * @param {Object} userData - User details.
 * @param {string} userData.email - User's email.
 * @param {string} userData.password - User's password.
 * @return {Object} An object containing the user's details and JWT token.
 */
const login = async ({ email, password }) => {
  if (!email || !password) {
    throw badRequest('Email and password are required.');
  }

  const user = await userRepository.findUserByEmail(email);

  if (!user) {
    throw unauthorized('Invalid email or password.');
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw unauthorized('Invalid email or password.');
  }

  const token = generateToken(user.id);

  const { password: _, ...userWithoutPassword } = user;
  const userLoggedIn = {
    user: userWithoutPassword,
    token,
  };

  return userLoggedIn;
};

module.exports = {
  register,
  login,
};
