const router = require('express').Router();
const bodyParser = require('body-parser');

const Regiments = require('../../models/Regiments');
const Logger = require('../../utils/logger');

const { urlencoded, json } = bodyParser;
router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

async function save(req) {
  try {
    const regiment = await new Regiments({
      nom: req.body.nom || 'Rpima',
      numero: req.body.numero || 9,
      description: req.body.description || 'parachutistes',
      types: req.body.types || [],
    });
    const newRegiment = await regiment.save();
    return newRegiment;
  } catch (e) {
    router.logger.warn('Echec de la requete /save', e);
    return e;
  }
}

module.exports = {
  save,
};
