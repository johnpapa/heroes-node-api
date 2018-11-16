const express = require('express');
const services = require('../services');
const { cors, corsOptions } = require('./cors');

const router = express.Router();
const { heroService } = services;

router.options('/heroes', cors()); // enable pre-flight request
router.options('/heroes/:id', cors()); // enable pre-flight request

router.get('/heroes', cors(corsOptions), (req, res) => {
  heroService.getHeroes(req, res);
});

router.post('/heroes', cors(corsOptions), (req, res) => {
  // TODO: temporarily disabled
  // heroService.postHero(req, res);
  res.status(201).json(req.body);
});

router.put('/heroes/:id', cors(corsOptions), (req, res) => {
  // TODO: temporarily disabled
  // heroService.putHero(req, res);
  res.status(200).json(req.body);
});

router.delete('/heroes/:id', cors(corsOptions), (req, res) => {
  // TODO: temporarily disabled
  // heroService.deleteHero(req, res);
  res.status(200).json(req.body);
});

// TODO: example of SQL query
// Learn more here: https://www.documentdb.com/sql/demo
// router.get('/hero/querybyname/:name', cors(corsOptions), (req, res) => {
//   heroService.queryHeroesNyName(req, res);
// });

module.exports = router;
