const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../../models/Regiments');
const Logger = require('../../../utils/logger');

const {
  urlencoded,
  json,
} = bodyParser;

router.use(json());
router.use(urlencoded({
  extended: true,
}));
router.logger = Logger;

/** Function called in the router on the way GET "/users"
 *
 * @param {*} req
 * @param {*} res
 */
async function getFindAllUser(req, res) {
  await Regiments.find({}, (err, user) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: 'Find User Echec',
      });
    } else if (!user) {
      res.status(400).json({
        success: false,
        message: 'No user find',
      });
    } else if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    }
  });
}

module.exports = {
  getFindAllUser,
};
