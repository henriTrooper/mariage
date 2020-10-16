const jwt = require('jsonwebtoken');
const User = require('../models/user');

function parseToken(token) {
  return jwt.verify(token.split(' ')[1], process.env.JWT_KEY);
}

/* Auth middleware will protect the private route.
 If the user is not authenticated,
 then the auth middleware will prevent accessing the private route; otherwise,
 it will grant access.
 */
async function authMiddleware(req, res, next) {
  try {
    const jsonToken = req.headers.authorization;
    if (jsonToken) {
      const token = parseToken(jsonToken);
      await User.findById(token.userId, (err, user) => {
        if (err) {
          res.status(400).json({
            success: false,
            message: 'authMiddleware Echec',
          });
        }
        if (user) {
          res.locals.user = user;
          next();
        } else {
          res.status(400).json({
            success: false,
            message: 'Not authorized user',
          });
        }
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Not authorized user',
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'authMiddleware Echec',
      error: err,
    });
  }
}

module.exports = {
  authMiddleware,
};
