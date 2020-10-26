const MongoClient = require('../../../Database/mongoClient')

/** Function called in the router on the way GET "/users"
 *
 * @param {*} req
 * @param {*} res
 */
async function getFindAllUser(req, res) {
  await MongoClient.findAll(res)
}

module.exports = {
  getFindAllUser,
};
