const router = require('express').Router();
const bodyParser = require('body-parser');
const Data = require('../../../models/data');
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

/** Function called in the router on the way GET "/"
 *
 * @param {*} req
 * @param {*} res
 */
async function getFindAllStarted(req, res) {
  await Data.find({}, (err, users) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: 'Started Echec',
      });
    } else if (!users) {
      res.status(400).json({
        success: false,
        message: 'No user find',
      });
    } else if (users) {
      res.status(200).json(users);
    }
  });
}

module.exports = {
  getFindAllStarted,
};
