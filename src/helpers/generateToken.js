/**
 * @module generateToken
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Utility for generating JWT for user authentication.
 */

const jwt = require('jsonwebtoken');

const {
  JWT_SECRET_KEY,
  JWT_ALGORITHM = 'HS512',
  JWT_EXPIRATION = '8h',
} = process.env;

/**
 * Generates a JWT for a user based on their ID.
 *
 * @function
 * @param {Number} userId - Unique identifier for the user.
 * @return {Object} A JWT string.
 */
const generateToken = (userId) => {
  return jwt.sign(
    {
      id: userId,
    },
    JWT_SECRET_KEY,
    {
      algorithm: JWT_ALGORITHM,
      expiresIn: JWT_EXPIRATION,
    },
  );
};

module.exports = generateToken;
