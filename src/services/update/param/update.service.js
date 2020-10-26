const MongoClient = require('../../../Database/mongoClient')
var ObjectId = require('mongodb').ObjectID;

/** Function called in the router on the way PUT "/user/:userId"
 *
 * @param {*} req
 * @param {*} res
 */
async function updateByParam(req, res) {
  const { name } = req.headers;
  const param = { "name" : name }
  await MongoClient.findParamAndUpdate(param, req.body, res)
}

module.exports = {
  updateByParam,
};
