const MongoClient = require('../../../Database/mongoClient')
var ObjectId = require('mongodb').ObjectID;

/** Function called in the router on the way PUT "/user/:userId"
 *
 * @param {*} req
 * @param {*} res
 */
async function updateById(req, res) {
  const { id } = req.headers;
  const idObject = { "_id" : ObjectId(id) }
  await MongoClient.findIDAndUpdate(idObject, req.body, res)
}

module.exports = {
  updateById,
};
