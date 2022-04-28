const 
    MongoClient
 = require('mongodb').MongoClient;
 const Logger = require('../utils/logger');

   /*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * * * * * * * * * * * ROUTAGE GET  * * * * * * * * * * ** * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Fonction de started - Pour l'instant tous les utilisateurs
 *
 * @param {*} req
 * @param {*} res
 */
async function started(res) {
    const client = new MongoClient(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect(err => {
        if (err) {
            res.status(400).json({
                success: false,
                message: 'Fail Connected...',
            });
        }
        let db = client.db(process.env.DATABASE);

        db.collection(process.env.COLLECTION_DATA).find({}).sort({ name: 1 })
        .toArray()
        .then(data => {
          Logger.info(`Successfully found ${data.length} documents.`)
          res.status(200).json(data);
        }).catch(err => Logger.warn(`Failed to find documents: ${err}`))

    });
  client.close();
}

/**
 * Permet de récupérer tous les utilisateurs en base
 *
 * @param {*} req
 * @param {*} res
 */
async function findAll(res) {
    const client = new MongoClient(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await client.connect(err => {
        if (err) {
            res.status(400).json({
                success: false,
                message: 'Fail Connected...',
            });
        }
        let db = client.db(process.env.DATABASE);

        db.collection(process.env.COLLECTION_DATA).find({}).sort({ name: 1 })
        .toArray()
        .then(data => {
          Logger.info(`Successfully found ${data.length} documents.`)
          res.status(200).json(data);
        }).catch(err => Logger.warn(`Failed to find documents: ${err}`))

    });
    client.close();
}

                                                                                /*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                                                                * * * * * * * * * * * ROUTAGE POST  * * * * * * * * * * ** * * * *
                                                                                * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Permet d'inserer 1 nouvelle data
 *
 * @param {*} req
 * @param {*} res
 */
async function insertOne(data, res) {
    const client = new MongoClient(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await client.connect(err => {
        if (err) {
            res.status(400).json({
                success: false,
                message: 'Fail Connected...',
            });
        }
        let db = client.db(process.env.DATABASE);

        db.collection(process.env.COLLECTION_DATA).insertOne(data, (err, data) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: 'Insert One Echec',
                });
            } else if (!data) {
                res.status(400).json({
                    success: false,
                    message: 'Insert One Echec',
                });
            } else if (data) {
                res.status(200).json({
                    success: true,
                    user: data.ops[0]
                });
            }
        });
    });
    client.close();
}


                                                                        /*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                                                        * * * * * * * * * * * ROUTAGE UPDATE  * * * * * * * * * * ** * * *
                                                                        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */



/**
 * Permet d'inserer 1 nouvelle data par ID
 *
 * @param {*} req
 * @param {*} res
 */
async function findIDAndUpdate(id, body, res) {
    const client = new MongoClient(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await client.connect(err => {
        if (err) {
            res.status(400).json({
                success: false,
                message: 'Fail Connected...',
            });
        }
        let db = client.db(process.env.DATABASE);
        db.collection(process.env.COLLECTION_DATA).findOneAndUpdate(id, { $set:body}, { upsert: true, returnOriginal: false} , (err, data) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: 'Find User Echec by ID',
                });
            } else if (!data) {
                res.status(400).json({
                    success: false,
                    message: 'No user find',
                });
            } else if (data) {
                res.status(200).json({
                    success: true,
                    user: data.value,
                  });
            }
        });
    });
    client.close();
}

/**
 * Permet d'inserer 1 data par parametre
 *
 * @param {*} req
 * @param {*} res
 */
async function findParamAndUpdate(param, body, res) {
    const client = new MongoClient(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await client.connect(err => {
        if (err) {
            res.status(400).json({
                success: false,
                message: 'Fail Connected...',
            });
        }
        let db = client.db(process.env.DATABASE);
        db.collection(process.env.COLLECTION_DATA).findOneAndUpdate(param, { $set:body}, { upsert: true, returnOriginal: false} , (err, data) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: 'Find User Echec by Param',
                });
            } else if (!data) {
                res.status(400).json({
                    success: false,
                    message: 'No user find',
                });
            } else if (data) {
                res.status(200).json({
                    success: true,
                    user: data.value,
                  });
            }
        });
    });
    client.close();
}






                                                                                    /*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                                                                    * * * * * * * * * * * ROUTAGE DELETE  * * * * * * * * * * ** * * *
                                                                                    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Permet de delete 1 data par ID
 *
 * @param {*} req
 * @param {*} res
 */
async function findIDAndDelete(data, res) {
    const client = new MongoClient(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await client.connect(err => {
        if (err) {
            res.status(400).json({
                success: false,
                message: 'Fail Connected...',
            });
        }
        let db = client.db(process.env.DATABASE);
        db.collection(process.env.COLLECTION_DATA).findOneAndDelete(data, (err, data) => {
            if (err) {
                res.status(400).json({
                  success: false,
                  message: 'Delete Echec by ID',
                });
              } else if (!data) {
                res.status(400).json({
                  success: false,
                  message: 'No user find',
                });
              } else if (data) {
                res.status(200).json({
                  success: true,
                  user: data.value,
                });
              }
        });
    });
    client.close();
}

/**
* Permet de delete 1 data PAR PARAMETRE
*
* @param {*} req
* @param {*} res
*/
async function findParamAndDelete(data, res) {
   const client = new MongoClient(process.env.URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true
   });
   await client.connect(err => {
       if (err) {
           res.status(400).json({
               success: false,
               message: 'Fail Connected...',
           });
       }
       let db = client.db(process.env.DATABASE);
       db.collection(process.env.COLLECTION_DATA).findOneAndDelete(data, (err, data) => {
           if (err) {
               res.status(400).json({
                 success: false,
                 message: 'Delete Echec by Param',
               });
             } else if (!data) {
               res.status(400).json({
                 success: false,
                 message: 'No user find',
               });
             } else if (data) {
               res.status(200).json({
                 success: true,
                 user: data.value,
               });
             }
       });
   });
   client.close();
}

/**
* Permet de Purger la database
*
* @param {*} req
* @param {*} res
*/
async function purgeDatabase(res) {
   const client = new MongoClient(process.env.URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true
   });
   await client.connect(err => {
       if (err) {
           res.status(400).json({
               success: false,
               message: 'Fail Connected...',
           });
       }
       let db = client.db(process.env.DATABASE);
       db.collection(process.env.COLLECTION_DATA).deleteMany({}, (err, data) => {
           if (err) {
               res.status(400).json({
                 success: false,
                 message: 'Echec Purged',
               });
             } else if (!data) {
               res.status(400).json({
                 success: false,
                 message: 'Echec Purged',
               });
             } else if (data) {
                res.status(200).json({
                    success: true,
                    message: `Document(s) deleted: ${data.deletedCount}`,
                  });
             }
       });
   });
   client.close();
}


module.exports = {
    started,
    findAll,
    insertOne,
    findIDAndUpdate,
    findParamAndUpdate,
    findIDAndDelete,
    findParamAndDelete,
    purgeDatabase,
};