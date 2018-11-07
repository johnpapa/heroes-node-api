const express = require('express');
const services = require('../services');
const { cors, corsOptions } = require('./cors');

const router = express.Router();
const { heroService } = services;

router.options('/heroes', cors()) // enable pre-flight request
router.options('/heroes/:id', cors()) // enable pre-flight request

router.get('/heroes', cors(corsOptions), (req, res) => {
  heroService.getHeroes(req, res);
});

router.post('/heroes', cors(corsOptions), (req, res) => {
  heroService.postHero(req, res);
});

router.put('/heroes/:id', cors(corsOptions), (req, res) => {
  heroService.putHero(req, res);
});

router.delete('/heroes/:id', cors(corsOptions), (req, res) => {
  heroService.deleteHero(req, res);
});

// TODO: example of SQL query
// Learn more here: https://www.documentdb.com/sql/demo
// router.get('/hero/querybyname/:name', cors(corsOptions), (req, res) => {
//   heroService.queryHeroesNyName(req, res);
// });

module.exports = router;
