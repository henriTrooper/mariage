const User = require('../../../../models/user');
const jwt = require('jsonwebtoken');

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

   await User.findOne({
        email
    }, async function (err, user) {
        if (err) {
            return res.status(400).json({
                success: false,
                message:'Echec Login'
            });
        }
        if (!user) {
            return res.status(400).json({
                success: false,
                message:'Invalid User'
            });
        }
        if (user.hasSamePassword(password)) {
            try {
               const json_token = jwt.sign({
                    userId: user._id,
                    username: user.username
                },
                process.env.JWT_KEY, {
                    expiresIn: '1h'
                })
                return res.status(200).json({
                    success: true,
                    token: json_token
                });
            } catch (error) {
                return res.status(400).json({
                    success: false,
                    message:'Echec generated TOKEN'
                });
            }
        } else {
            return res.status(400).json({
                success: false,
                message: 'Wrong email or password'
            })
        }
    })
}