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

/** Function called in the router on the way DELETE "/user/:userId"
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function deleteById(req, res) {
  const { id } = req.headers;
  await Regiments.findByIdAndRemove(id, {
    useFindAndModify: false,
  }, (err, user) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: 'Delete Echec',
      });
    } else if (!user) {
      res.status(400).json({
        success: false,
        message: 'No user find',
      });
    } else if (user) {
      res.status(200).json({
        success: true,
        usser: user,
      });
    }
  });
}

module.exports = {
  deleteById,
};
