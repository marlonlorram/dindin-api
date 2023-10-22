/**
 * @module auth.router
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Routes for auth-related.
 */

const { Router } = require('express');

const { register, login } = require('../controllers/auth.controller');

const router = new Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
