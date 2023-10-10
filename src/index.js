require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.json());

const host = process.env.SERVER_HOST || 'localhost';
const port = process.env.SERVER_PORT || 5000;

app.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`);
});
