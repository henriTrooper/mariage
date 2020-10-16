const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../../models/Regiments');
const Logger = require('../../../utils/logger');

const { urlencoded, json } = bodyParser;

router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

/** Function called in the router on the way PPUT "/user/:userId"
 *
 *
 * @param {*} req
 * @returns
 */
async function updateById(req, res) {
    const id = req.params.userId;
    
    return await Regiments.findOneAndUpdate({ _id: id }, req.body, {useFindAndModify: false}, function (err, user) {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Update Echec"
        })
      }
      if (user) {
        return res.status(200).json({
          success: true,
          user: user
        })
      }
      else {
       return res.status(400).json({
          success: false,
          message: "Missing parameters"
        })
      }
    });
}

module.exports = {
  updateById,
};
