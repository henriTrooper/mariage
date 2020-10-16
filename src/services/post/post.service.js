const router = require('express').Router();
const bodyParser = require('body-parser');

const Regiments = require('../../models/Regiments');
const Logger = require('../../utils/logger');

const {
  urlencoded,
  json,
} = bodyParser;

router.use(json());
router.use(urlencoded({
  extended: true,
}));
router.logger = Logger;

/**
 *Function called in the router on the way POST "/addUsers"
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function save(req, res) {
  const regiment = await new Regiments(req.body);
  await regiment.save({}, (err, user) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: 'Create Echec',
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
  save,
};
