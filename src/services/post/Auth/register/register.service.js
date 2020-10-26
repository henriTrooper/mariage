const User = require('../../../../Database/models/user');
const
  MongoClient = require('mongodb').MongoClient;
const Logger = require('../../../../utils/logger');

const bcrypt = require('bcryptjs');


const uri = 'mongodb+srv://henri:interdit@config-base.lboaa.mongodb.net/config_Base?retryWrites=true&w=majority';

/**
 * In this code, first, we have extracted username, email, Password, and passwordConfirmation from req.body.
 * Then we checked validation for if email or Password is empty or not. And also,
 * check if Password and passwordConfirmation are the same or not.
 * If any of the conditions do not meet, then it will return an error to the client. Otherwise, it will proceed further.
 * Then we are checking for the email if the email already exists in the Database.
 * If so, then it will return with 422 code saying the User already exists.
 * Otherwise, we will create a new User and pass the username, email, and Password.
 *
 * @param {*} req
 * @param {*} res
 */
async function register(req, res) {
  const {
    username,
    email,
    password,
  } = req.body;

  const client = new MongoClient(uri, {
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
    let db = client.db('config_Base');
     db.collection("users").findOne({"email": email})
     .then(data => {
      if (data !== null) {
        res.status(400).json({
          success: false,
          message: 'User already exists',
        });
      } else if (!data) {
        const user =  new User({
          username,
          email,
          password,
        });
        //Encrypting password
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            res.status(400).json({
            success: false,
            message: 'There is an error while password hash',
          });
          } else {
            bcrypt.hash(user.password, salt, (error, hash) => {
              if (error) {
                res.status(400).json({
                  success: false,
                  message: 'There is an error while password hash',
                });
              } else {
                 user.password = hash;
                 db.collection("users").insertOne(user, (error, profilsave) => {
                  if (error) {
                    res.status(400).json({
                      success: false,
                      message: 'Echec Save new User',
                    });
                  } else {
                    res.status(200).json({
                      sucess: true,
                      profil:  profilsave.ops[0],
                    });
                  }
                });
              }
            });
          }
        });
      }
    }).catch(err => {
      Logger.warn(`Failed to find documents: ${err}`);
      res.status(400).json({
        success: false,
        message: 'Echec register',
      });
    })
  });
  client.close();
}



module.exports = {
  register,
};