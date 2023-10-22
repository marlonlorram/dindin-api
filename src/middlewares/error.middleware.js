/**
 * @module error.middleware
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Middleware to capture errors that occur during the processing of a request.
 */

const { HTTP_STATUS } = require('../utils/status_code');

/**
 * Responds to requests with appropriate information about the occurred error.
 *
 * @function
 * @param {Object} err - Error object.
 * @param {Express.Request} req - The current request. (Not used directly.)
 * @param {Express.Response} res - The response to be sent.
 * @param {Function} next - The next middleware. (Not used directly.)
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = err.statusCode
    ? err.message
    : `Internal server error: ${err.message}`;

  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
