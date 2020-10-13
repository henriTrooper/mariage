const router = require('express').Router();
const bodyParser = require('body-parser');

const Regiments = require('../../models/Regiments');
const Logger = require('../../utils/logger');

const { getUserList } = require('../../../user');
const userList = getUserList(); // assume for now this is your database

const { urlencoded, json } = bodyParser;
router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;

/** Function called in the router on the way POST "/addUsers"
 *
 * @param {*} req
 * @returns
 */
async function save(req) {
  try {
    const user = {
      id: userList.length + 1,
      isPublic: req.body.isPublic,
      name:  req.body.name,
      companies: req.body.companies,
      books:  req.body.books
    };
    /* await regiment.save(); */
     userList.push(user)
    return user;
  } catch (e) {
    return status(400).json({
      success: "false",
      message: 'Echec dans le service post',
      error: e,
    });
  }
}

module.exports = {
  save,
};
