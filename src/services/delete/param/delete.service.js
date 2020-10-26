const MongoClient = require('../../../Database/mongoClient')
var ObjectId = require('mongodb').ObjectID;



/** Function called in the router on the way DELETE "/user/:userId"
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function deleteByParam(req, res) {
  const { name } = req.body;
  const param = { "name" : name }
  await MongoClient.findParamAndDelete(param, res);
}

module.exports = {
  deleteByParam,
};
