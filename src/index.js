require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const authRoutes = require('./routes/auth.router');

const errorHandler = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Dindin API',
      description: 'API for personal finance management',
      version: '1.0.0',
      license: {
        name: 'MIT',
        url: 'https://github.com/marlonlorram/dindin-api/blob/main/LICENSE',
      },
    },
  },

  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);

app.use(errorHandler);

const host = process.env.SERVER_HOST || 'localhost';
const port = process.env.SERVER_PORT || 5000;

app.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`);
});
