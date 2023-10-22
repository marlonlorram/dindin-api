/**
 * @module user.queries
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description SQL queries related to user operations in the database.
 */

const userQueries = {
  /**
   * Checks if a user with the given email exists.
   */
  checkIfEmailExists: `
    SELECT
      email
    FROM
      users
    WHERE
      email = $1
    AND
      (
        $2::INTEGER IS NULL
        OR id != $2
      )
    LIMIT 1;
  `,

  /**
   * Creates a new user.
   */
  createUser: `
    INSERT INTO users
      (
          name,
          email,
          password
      )
    VALUES
      (
          $1,      -- name
          $2,      -- email
          $3       -- password
      )
    RETURNING
      id,
      name,
      email;
  `,
};

module.exports = userQueries;
