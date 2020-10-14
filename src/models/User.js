const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

/* Then we instantiate the userSchema bypassing the fields in the constructor.
The user schema consists of four fields.
username
email
password
passwordConfirmation
We have defined each field’s data type and its validation rules. */
const userSchema = new Schema({
  username: {
    type: String,
    min: [4, 'Too short, min 4 characters are required'],
    max: [32, 'Too long, max 16 characters are required']
  },
  email: {
    type: String,
    min: [4, 'Too short, min 4 characters are required'],
    max: [32, 'Too long, max 16 characters are required'],
    lowercase: true,
    unique: true,
    required: 'Email is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    min: [4, 'Too short, min 4 characters are required'],
    max: [32, 'Too long, max 16 characters are required'],
    required: 'password is required'
  },
  passwordConfirmation: {
    type: String,
    min: [4, 'Too short, min 4 characters are required'],
    max: [32, 'Too long, max 16 characters are required']
  }
});

/* This pre() function hash our Password while registering a user.
The pre() function will automatically get called while the User is saving in the Database, and we are using the bcrypt library to create a password hash.
And then, the flow gets back to register() function, and if everything is fine, then the User will be registered in our application.
In short, the Password of a user is now hashed using the bcryptjs library.
Only the hashed Password is stored in the Database. On success, the server responds with 200 status with message ‘registered: true’.
Once a user is registered, they need to be able to log on. This can be done in a separate route /users/login.
This is where you will start using JSON Web Tokens. */
userSchema.pre('save', function (next) {
  const user = this
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return res.status(422).json({
        'error': 'There is an error while gensalt hash'
      })
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return res.status(422).json({
          'error': 'There is an error while password hash'
        })
      }
      user.password = hash
      next()
    })
  })
})

/*The compareSync() function is provided by the bcrypt library,
 which will return true based on the stored database password and Password that comes with user requests.
If it returns true, then that means email and Password are valid, and User is authenticated. */
userSchema.methods.hasSamePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)