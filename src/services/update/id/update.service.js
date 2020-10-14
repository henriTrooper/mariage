const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../../models/Regiments');
const Logger = require('../../../utils/logger');
const { urlencoded, json } = bodyParser;

router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

const error = {};

/** Function called in the router on the way PPUT "/user/:userId"
 *
 *
 * @param {*} req
 * @returns
 */
async function updateById(req) {
  try {
    const id = req.params.userId;
    return await Regiments.findOneAndUpdate({ _id: id} , req.body, {
      new: true, // You should set the new option to true to return the document after update was applied.
      upsert: true, // Make this update into an upsert
      rawResult: true // Return the raw result from the MongoDB driver
    });
  } catch (e) {
    return error({
      status: 400,
      success: 'false',
      message: 'Echec dans le service /update{id}',
      error: e,
    });
  }
}

module.exports = {
  updateById,
};
