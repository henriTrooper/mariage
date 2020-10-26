const jwt = require('jsonwebtoken');
const User = require('../Database/models/user');

let authorization = {};

async function tokenDecrypt(token, res) {
  const onlyToken = token.split(' ')[1];
  jwt.verify(onlyToken.replace(/^JWT\s/, ''), process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      // If status = expired, prompt user to login again.
      if (err.name === 'TokenExpiredError') {
        return res.status(422).json({
          success: false,
          expireTime: true,
          message: 'JWT has expired. Please login again, this is for your security!',
        });
      }
      // If this can't be done return error message.
      return res.status(422).json({
        success: false,
        message: 'JWT Verification Issue.',
      });
    }
    if (decoded.authorization === 'true' && decoded.name === 'admin' && decoded.email === 'mersch.henri@icloud.com') {
      // eslint-disable-next-line
      return authorization = {
        profilConnect: 'admin',
        token: decoded,
      };
    }
    // eslint-disable-next-line
    return authorization = {
      profilConnect: 'user',
      token: decoded,
    };
  });
}

/* Auth middleware will protect the private route.
 If the user is not authenticated,
 then the auth middleware will prevent accessing the private route; otherwise,
 it will grant access.
 */
async function authMiddleware(req, res, next) {
  const jsonToken = req.headers.authorization;
  if (jsonToken) {
    authorization.profilConnect = await tokenDecrypt(jsonToken, res);
    if (authorization.profilConnect && authorization.profilConnect === 'admin') {
      next();
    } else if (authorization.profilConnect === 'user') {
      await User.findById(authorization.token.userId, (err, user) => {
        if (err) {
          res.status(400).json({
            success: false,
            message: 'authMiddleware Echec',
          });
        } else if (!user) {
          res.status(400).json({
            success: false,
            message: 'Not authorized user',
          });
        } else if (user) {
          res.locals.user = user;
          next();
        }
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: 'Not authorized user',
    });
  }
}

module.exports = {
  authMiddleware,
};
