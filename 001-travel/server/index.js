const express = require('express');

let api = express.Router();

api.use('/qunaer', require('./gowhere'));

module.exports = api;
