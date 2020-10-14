const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../../models/Regiments');
const Logger = require('../../../utils/logger');

const { urlencoded, json } = bodyParser;

router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

const error = {};

/** Function called in the router on the way DELETE "/user/:userId"
 *
 * @param {*} req
 * @returns
 */
async function deleteById(req) {
  try {
    const id = req.params.userId;
    return await Regiments.findByIdAndDelete(id);
  } catch (e) {
    return error({
      status: 400,
      success: 'false',
      message: 'Echec dans le service get/{started}',
      error: e,
    });
  }
}

module.exports = {
  deleteById,
};
