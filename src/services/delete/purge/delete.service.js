const MongoClient = require('../../../Database/mongoClient')


/** Function called in the router on the way DELETE "/user/:userId"
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function purgeDB(req, res) {
  await MongoClient.purgeDatabase(res);
}

module.exports = {
  purgeDB,
};
