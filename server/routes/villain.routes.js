const express = require('express');
const services = require('../services');
const { cors, corsOptions } = require('./cors');

const router = express.Router();
const { villainService } = services;

router.options('/villains', cors()) // enable pre-flight request
router.options('/villains/:id', cors()) // enable pre-flight request

router.get('/villains', cors(corsOptions), (req, res) => {
  villainService.getVillains(req, res);
});

router.post('/villains', cors(corsOptions), (req, res) => {
  villainService.postVillain(req, res);
});

router.put('/villains/:id', cors(corsOptions), (req, res) => {
  villainService.putVillain(req, res);
});

router.delete('/villains/:id', cors(corsOptions), (req, res) => {
  villainService.deleteVillain(req, res);
});

module.exports = router;
