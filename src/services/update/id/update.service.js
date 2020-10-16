const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../../models/Regiments');
const Logger = require('../../../utils/logger');

const { urlencoded, json } = bodyParser;

router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

/** Function called in the router on the way PUT "/user/:userId"
 *
 * @param {*} req
 * @param {*} res
 */
async function updateById(req, res) {
  const id = req.params.userId;
  await Regiments.findOneAndUpdate({ _id: id }, req.body, { useFindAndModify: false }, (err, user) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: 'Update Echec',
      });
    } else {
      res.status(200).json({
        success: true,
        user,
      });
    }
  });
}

module.exports = {
  updateById,
};
