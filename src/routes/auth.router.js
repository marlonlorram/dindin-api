/**
 * @module auth.router
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Routes for auth-related.
 */

const { Router } = require('express');

const { register, login } = require('../controllers/auth.controller');

const router = new Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a new user
 *     description: Endpoint to register a user with email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name.
 *                 example: Your Name
 *               email:
 *                 type: string
 *                 description: User's email.
 *                 example: example@email.com
 *               password:
 *                 type: string
 *                 description: User's password.
 *                 example: password123
 *     responses:
 *       200:
 *         description: User registered successfully. Returns an object containing the user's details.
 *       400:
 *         description: Bad request due to missing or invalid parameters.
 *       409:
 *         description: Conflict due to email already being registered.
 *       500:
 *         description: Internal server error.
 */
router.post('/register', register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Authenticate a user
 *     description: Endpoint to authenticate a user using their email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email.
 *                 example: example@email.com
 *               password:
 *                 type: string
 *                 description: User's password.
 *                 example: password123
 *     responses:
 *       200:
 *         description: User authenticated successfully. Returns an object containing the user's details and JWT token.
 *       400:
 *         description: Bad request due to missing or invalid parameters.
 *       401:
 *         description: Unauthorized invalid email or password.
 *       500:
 *         description: Internal server error.
 */
router.post('/login', login);

module.exports = router;
