
const MongoClient = require('../../../Database/mongoClient')

/** Function called in the router on the way GET "/"
 *
 * @param {*} req
 * @param {*} res
 */
async function getStarted(req, res) {
  await MongoClient.started(res)
}

module.exports = {
  getStarted,
};
