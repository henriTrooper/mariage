const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../../models/Regiments');
const Logger = require('../../../utils/logger');
const { urlencoded, json } = bodyParser;

router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

const error = {};

/** Function called in the router on the way GET "/users"
 *
 * @returns
 */
async function getFindAllUser() {
  try {
    return await Regiments.find({});
  } catch (e) {
    return error({
      status: 400,
      success: 'false',
      message: 'Echec dans le service get/{user}',
      error: e,
    });
  }
}

module.exports = {
  getFindAllUser,
};
