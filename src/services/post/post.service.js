const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../models/Regiments');
const Logger = require('../../utils/logger');

const { urlencoded, json } = bodyParser;

router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

const error = {};

/** Function called in the router on the way POST "/addUsers"
 *
 * @param {*} req
 * @returns
 */
async function save(req) {
  try {
    
    const regiment = await new Regiments({
      isPublic: req.body.isPublic,
      name: req.body.name,
      description: req.body.description,
      carriere: req.body.carriere,
      collegues: req.body.collegues,
    });
    return await regiment.save();
  } catch (e) {
    return error({
      status: 400,
      success: 'false',
      message: 'Echec dans le service post',
      error: e,
    });
  }
}

module.exports = {
  save,
};
