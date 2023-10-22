/**
 * @module auth.controller
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Controller for auth-related operations.
 */

const handler = require('../middlewares/handler.middleware');

const authService = require('../services/auth.service');

/**
 * Handles the request to register a new user.
 *
 * @function
 * @param {Express.Request} req - Request object.
 * @return {Object} The registered user.
 */
const register = handler(async (req) => await authService.register(req.body));

/**
 * Handles the request to authenticate a user.
 *
 * @param {Express.Request} req - Request object.
 * @returns {Object} The authenticated user.
 */
const login = handler(async (req) => await authService.login(req.body));

module.exports = {
  register,
  login,
};
