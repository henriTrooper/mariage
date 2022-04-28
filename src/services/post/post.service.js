const Data = require('../../Database/models/data');
const MongoClient = require('../../Database/mongoClient')

/**
 *Function called in the router on the way POST "/addUsers"
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function insertOne(req, res) {
  const data = await new Data(req.body);
  await MongoClient.insertOne(data, res)
}
module.exports = {
  insertOne,
};
