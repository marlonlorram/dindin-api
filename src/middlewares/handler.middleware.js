/**
 * @module handler.middleware
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Middleware handler for standardized error and response management.
 */

const { HTTP_STATUS } = require('../utils/status_code');

/**
 * Creates an Express middleware to handle responses and errors.
 *
 * @function
 * @param {Function} fun - The asynchronous function processing the request.
 * @return {Function} An Express middleware.
 */
const handler = (fun) => {
  return (req, res, next) => {
    Promise.resolve(fun(req, res, next))
      .then((data) => res.status(HTTP_STATUS.OK).json(data))
      .catch(next);
  };
};

module.exports = handler;
