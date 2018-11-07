const express = require('express');
const services = require('../services');
const { cors, corsOptions } = require('./cors');

const router = express.Router();
const { settingsService } = services;

router.get('/settings', cors(corsOptions), (req, res) => {
  settingsService.getSettings(req, res);
});

module.exports = router;
