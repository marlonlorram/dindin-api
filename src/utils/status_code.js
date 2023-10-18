/**
 * @module status_code
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * This module provides an enumeration of the most common HTTP status codes,
 * categorized by response type.
 */

const HTTP_STATUS = {
  // Successful response status codes
  OK: 200,
  CREATED: 201,

  // Client error response status codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,

  // Server error response status codes
  INTERNAL_SERVER_ERROR: 500,
};

module.exports = { HTTP_STATUS };
