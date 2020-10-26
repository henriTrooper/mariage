const MongoClient = require('../../../Database/mongoClient')
var ObjectId = require('mongodb').ObjectID;

/** Function called in the router on the way DELETE "/user/:userId"
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function deleteById(req, res) {
  const { id } = req.headers;
  const idObject = { "_id" : ObjectId(id) }
  await MongoClient.findIDAndDelete(idObject, res);
}

module.exports = {
  deleteById,
};
