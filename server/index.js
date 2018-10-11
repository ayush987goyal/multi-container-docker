const keys = require('./keys');

// Express App Setup
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Postgres Client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  port: keys.pgPort,
  database: keys.pgDatabase,
  password: keys.pgPassword
});
pgClient.on('error', () => console.log('Lost PG connection'));

pgClient.query('CREATE TABLE IF NOT EXISTS values (number INT)').catch(err => console.log(err));
