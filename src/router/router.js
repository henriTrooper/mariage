const router = require('express').Router();
/* const mongoose = require('mongoose'); */
const bodyParser = require('body-parser');
const Logger = require('../utils/logger');
const { save } = require('../services/post/post.service');
const { getFindAll } = require('../services/get/get.services');

const { urlencoded, json } = bodyParser;

router.use(json());
router.use(urlencoded({ extended: true }));

router.logger = Logger;

// ------------------------------------Routages-------------------------------------------------------------------

router.get('/', async (req, res) => {
  router.logger.info('dans le get /');
  try {
    const getAll = await getFindAll();
    res.status(201).json(getAll);
    router.logger.info('Succes de la requete /');
  } catch (e) {
    router.logger.warn('Echec de la requete /', e);
    res.status(400).json('Echec request /get');
  }
});

router.post('/save', async (req, res) => {
  router.logger.info('post /save', req.body);
  try {
    const newRegiment = await save(req.body);
    res.status(200).json(newRegiment);
  } catch (e) {
    router.logger.warn('Echec de la requete /save', e);
    res.status(400).json('Echec request /save');
  }
});

module.exports = router;
