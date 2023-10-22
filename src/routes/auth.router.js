/**
 * @module auth.router
 * @author Marlon Lorram (https://github.com/marlonlorram)
 *
 * @description Routes for auth-related.
 */

const { Router } = require('express');

const { register } = require('../controllers/auth.controller');

const router = new Router();

router.post('/register', register);

module.exports = router;
