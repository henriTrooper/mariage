const User = require('../models/User');
const env = require('../DB_config');
const jwt = require('jsonwebtoken');

/* In this code, first, we have extracted username, email, Password, and passwordConfirmation from req.body.
Then we checked validation for if email or Password is empty or not. And also, check if Password and passwordConfirmation are the same or not.
If any of the conditions do not meet, then it will return an error to the client. Otherwise, it will proceed further.
Then we are checking for the email if the email already exists in the Database.
 If so, then it will return with 422 code saying the User already exists.
Otherwise, we will create a new User and pass the username, email, and Password. */
exports.register = async function (req, res) {
    const {
        username,
        email,
        password,
        passwordConfirmation
    } = req.body
    if (!email || !password) {
        return res.status(422).json({
            'error': 'Please provide email or password'
        })
    }

    if (password != passwordConfirmation) {
        return res.status(422).json({
            'error': 'Password does not match'
        })
    }
    await User.findOne({
        email
    }, async function (err, existingUser) {
        if (err) {
            return res.status(422).json({
                'error': 'Oops! Something went Wrong'
            })
        }
        if (existingUser) {
            return res.status(422).json({
                'error': 'User already exists'
            })
        } else {
            const user = await new User({
                username,
                email,
                password
            })
            await user.save(function (err) {
                if (err) {
                    return res.status(422).json({
                        'error': 'Oops! Something went Wrong'
                    })
                }
                return res.status(200).json({
                    'registered': true
                })
            })
        }
    })
}

/*  Here, you can see that we have imported the jwt package. It will help us to generate a JWT token.
First, we are extracting the email and Password from the request.
Then we are checking if email or Password is empty.
If empty, then we will send an error response.
Then we are checking for email, and if the email is not found in the Database, then we will send a 422 response saying that Invalid User.
Because if the email is not found, then there is no need to check the Password because it does not make any sense.
If the User does exist, then now we will check for the Password.
You can see that we have used hasSamePassword() method on the User model, but we have not defined a function in the User model.
So let’s do that first.
Switch to the User.js model and define the hasSamePassword() function. We can do that by defining userSchema.methods object.
It will return a boolean value saying if the incoming Password is valid or not. */
exports.login = async function (req, res) {
    const {
        email,
        password
    } = req.body

    if (!email || !password) {
        return res.status(422).json({
            'error': 'Please provide email or password'
        })
    }
   await User.findOne({
        email
    }, async function (err, user) {
        if (err) {
            return res.status(422).json({
                'error': 'Oops! Something went wrong'
            })
        }

        if (!user) {
            return res.status(422).json({
                'error': 'Invalid user'
            })
        }
        if (user.hasSamePassword(password)) {
            json_token = jwt.sign({
                    userId: user._id,
                    username: user.username
                },
                'henriJWT', {
                    expiresIn: '1h'
                })
            return res.json(json_token)
        } else {
            return res.status(422).json({
                'error': 'Wrong email or password'
            })
        }
    })
}

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