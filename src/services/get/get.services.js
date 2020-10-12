const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../models/Regiments');
const Logger = require('../../utils/logger');

const { urlencoded, json } = bodyParser;
router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

async function getFindAll() {
  try {
    const getAll = await Regiments.find({});
    return getAll
  } catch (e) {
    router.logger.warn('Echec Request', e);
    return e
    }
}

module.exports = {
  getFindAll
};
