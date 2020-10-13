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

/** Function called in the router on the way DELETE "/user/:userId"
 *
 * @param {*} req
 * @returns
 */
async function deleteById(req) {
  try {
    console.log(req.params)
    const id = parseInt(req.params.userId, 10);
    for(let i = 0; i < userList.length; i++){
        if(userList[i].id === id){
             userList.splice(i,1);
             return id
        }
    }
  } catch (e) {
    return status(400).json({
      success: "false",
      message: 'Echec dans le service /delete{id}',
      error: e,
    });
  }
}

module.exports = {
  deleteById,
};
