const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../../models/Regiments');
const Logger = require('../../../utils/logger');

const { getUserList } = require('../../../../user');
const userList = getUserList(); // assume for now this is your database

const { urlencoded, json } = bodyParser;
router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

/** Function called in the router on the way GET "/"
 *
 * @returns
 */
async function getFindAll() {
  try {
    /* return await Regiments.find({}); */
    return userList
  } catch (e) {
    router.logger.warn('Echec Request', e);
    return status(400).json({
      success: "false",
      message: 'Echec dans le service get/{started}',
      error: e,
    });
  }
}

module.exports = {
  getFindAll,
};
