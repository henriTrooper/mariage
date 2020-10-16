const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../../models/Regiments');
const Logger = require('../../../utils/logger');

const { urlencoded, json } = bodyParser;

router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

/** Function called in the router on the way GET "/"
 *
 * @returns
 */
async function getFindAllStarted(req, res) {
  return await Regiments.find({}, function (err, user) {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Started Echec"
      })
    }
    if (user) {
      return res.status(200).json({
        success: true,
        user: user
      })
    } else {
      return res.status(400).json({
        success: false,
        message: "Missing parameters"
      })
    }
  });
}

module.exports = {
  getFindAllStarted,
};
