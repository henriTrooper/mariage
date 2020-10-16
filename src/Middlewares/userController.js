const User = require('../models/user');
const jwt = require('jsonwebtoken');

/* Auth middleware will protect the private route.
 If the user is not authenticated,
 then the auth middleware will prevent accessing the private route; otherwise,
 it will grant access.
 */
exports.authMiddleware =  async function (req, res, next) {
    const json_token = req.headers.authorization
    try {
      if (json_token) {
        const user = parseToken(json_token)
       await User.findById(user.userId, function (err, user) {
          if (err) {
            return res.status(422).json({
              'error': 'Oops! Something went wrong'
            })
          }
          if (user) {
            res.locals.user = user
            next()
          }
          else {
            return res.status(422).json({ 'error': 'Not authorized user' })
          }
        })
      }
      else {
        return res.status(422).json({ 'error': 'Not authorized user' })
      }
    } catch (err) {
      res.status(403).json({
        success: false,
        message: err
      })
    }
  }
  
  function parseToken(token) {
    return jwt.verify(token.split(' ')[1], env.secret)
  }