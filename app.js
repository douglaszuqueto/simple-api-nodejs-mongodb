/**
 * Modules
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/**
 * MongoDB
 */
const db = require('./config/db.js');

/**
 * Express App
 */
const app = express();

/**
 * Middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

/**
 * Routes
 */
require('./routes')(app);


module.exports = app;
