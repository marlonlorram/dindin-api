/**
 * @module errors
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Custom error utilities for response handling.
 */

const { HTTP_STATUS } = require('./status_code');

/**
 * Creates a standardized error object.
 *
 * @function
 * @private
 * @param {string} message - Descriptive error message.
 * @param {number} statusCode - Associated HTTP status code.
 * @return {Object} An error object with message and status code properties.
 */
const createError = (message, statusCode) => {
  return { message, statusCode };
};

/**
 * Constructs a BadRequest error.
 *
 * @function
 * @param {string} [message='Invalid request'] - Optional custom error message.
 * @return {Object} BadRequest error object.
 */
const badRequest = (message = 'Invalid request') =>
  createError(message, HTTP_STATUS.BAD_REQUEST);

/**
 * Constructs an Unauthorized error.
 *
 * @function
 * @param {string} [message='Unauthorized'] - Optional custom error message.
 * @return {Object} Unauthorized error object.
 */
const unauthorized = (message = 'Unauthorized') =>
  createError(message, HTTP_STATUS.UNAUTHORIZED);

/**
 * Constructs a NotFound error.
 *
 * @function
 * @param {string} [message='Resource not found'] - Optional custom error message.
 * @return {Object} NotFound error object.
 */
const notFound = (message = 'Resource not found') =>
  createError(message, HTTP_STATUS.NOT_FOUND);

/**
 * Constructs a Forbidden error.
 *
 * @function
 * @param {string} [message='Forbidden'] - Optional custom error message.
 * @return {Object} Forbidden error object.
 */
const forbidden = (message = 'Forbidden') =>
  createError(message, HTTP_STATUS.FORBIDDEN);

/**
 * Constructs a Conflict error.
 *
 * @function
 * @param {string} [message='Conflict'] - Optional custom error message.
 * @return {Object} Conflict error object.
 */
const conflict = (message = 'Conflict') =>
  createError(message, HTTP_STATUS.CONFLICT);

module.exports = {
  notFound,
  unauthorized,
  badRequest,
  forbidden,
  conflict,
};
