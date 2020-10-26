/**
 * Fonction qui permet de valider un email
 */
function validateEmail(email) {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

async function encryptPassword(user, res) {
  bcrypt.genSalt(10, async (err, salt) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: 'There is an error while gensalt hash',
      });
    } else {
      bcrypt.hash(user.password, salt, async (error, hash) => {
        if (error) {
          res.status(400).json({
            success: false,
            message: 'There is an error while password hash',
          });
        } else {
           user.password = hash;
           return user
        }
      });
    }
  });
};

module.exports = {
  validateEmail,
  encryptPassword
};
