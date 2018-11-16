const express = require('express');
const services = require('../services');
const { cors, corsOptions } = require('./cors');

const router = express.Router();
const { villainService } = services;

router.options('/villains', cors()); // enable pre-flight request
router.options('/villains/:id', cors()); // enable pre-flight request

router.get('/villains', cors(corsOptions), (req, res) => {
  villainService.getVillains(req, res);
});

router.post('/villains', cors(corsOptions), (req, res) => {
  // TODO: temporarily disabled
  // villainService.postVillain(req, res);
  res.status(201).json(req.body);
});

router.put('/villains/:id', cors(corsOptions), (req, res) => {
  // TODO: temporarily disabled
  // villainService.putVillain(req, res);
  res.status(200).json(req.body);
});

router.delete('/villains/:id', cors(corsOptions), (req, res) => {
  // TODO: temporarily disabled
  // villainService.deleteVillain(req, res);
  res.status(200).json(req.body);
});

module.exports = router;
