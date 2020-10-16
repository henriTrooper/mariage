const User = require('../../../../models/user');

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
  await User.findOne({
    email,
  }, async (err, existingUser) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: 'Echec Register',
      });
    } else if (existingUser) {
      res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    } else {
      const user = await new User({
        username,
        email,
        password,
      });
      await user.save({}, (error, profilsave) => {
        if (error) {
          res.status(400).json({
            success: false,
            message: 'Echec Save new User',
          });
        } else {
          res.status(200).json({
            sucess: true,
            profil: profilsave,
          });
        }
      });
    }
  });
}

module.exports = {
  register,
};
