const router = require('express').Router();

const bodyParser = require('body-parser');
const Logger = require('../utils/logger');
const {
  getFindAllStarted,
} = require('../services/get/{started}/get.service');

const {
  getFindAllUser,
} = require('../services/get/{user}/get.service');

const {
  save,
} = require('../services/post/post.service');

const {
  deleteById,
} = require('../services/delete/id/delete.service');

const {
  updateById,
} = require('../services/update/id/update.service');

const {
  register,
} = require('../services/post/Auth/register/register.service');

const {
  login,
} = require('../services/post/Auth/login/login.service');

//Middlaware Auth
const {
  authMiddleware
} = require('../Middlewares/userController')

const {
  urlencoded,
  json,
} = bodyParser;

router.use(json());
router.use(urlencoded({
  extended: true,
}));

router.logger = Logger;

const { validateEmail } = require('../utils/utils') 

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE * * * * * * * * * * ** * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE GET  * * * * * * * * * * ** * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.get('/', async (req, res) => {
  try {
    await getFindAllStarted(req, res);
  } catch (e) {
     res.status(400).json({
      success: 'false',
      message: 'Echec de la requete /',
      error: e,
    });
  }
});

router.get('/users', async (req, res) => {
  try {
    await getFindAllUser(req, res);
  } catch (e) {
     res.status(400).json({
      success: 'false',
      message: 'Echec de la requete /users',
      error: e,
    });
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE POST  * * * * * * * * * * ** * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.post('/addUser', async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({
        success: false,
        message: 'Name is required',
      });
    } else if (!req.body.isPublic) {
      return res.status(400).send({
        success: false,
        message: 'isPublic is required',
      });
    }
    await save(req, res);
  } catch (e) {
     res.status(400).json({
      success: false,
      message: 'Echec de la requete /addUser',
      error: e,
    });
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE UPDATE  * * * * * * * * * * ** * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.put('/user/:userId', async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({
        success: false,
        message: 'Name is required',
      });
    } else if (!req.body.isPublic) {
      return res.status(400).send({
        success: false,
        message: 'isPublic is required',
      });
    }
    await updateById(req, res);
  } catch (e) {
     res.status(404).send({
      success: 'false',
      message: 'Echec de la requete UPDATE /user/:userId',
    });
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE DELETE  * * * * * * * * * * ** * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.delete('/user/:userId', async (req, res) => {
  try {
    if (req.params.userId) {
      await deleteById(req, res);
    } else {
      return res.status(400).json({
        success: false,
        message: 'No param ID find',
      });
    }
  } catch (e) {
     res.status(400).json({
      success: false,
      message: 'Echec de la requete DELETE /user/:userId',
      error: e,
    });
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE AUTHENTIFICATION  * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.post('/register', async (req, res) => {
  try {
    if ( validateEmail(req.body.email) === false ) {
      return res.status(400).send({
        success: false,
        message: 'Email is not valid',
      });
    }
    if (!req.body.password) {
      return res.status(400).send({
        success: false,
        message: 'Password is required',
      });
    }
    if (req.body.password != req.body.passwordConfirmation) {
      return res.status(400).send({
        success: false,
        message: 'Password does not match'
      })
    }
    await register(req, res)
  } catch (e) {
    res.status(400).json({
      success: false,
      message: 'Echec de la requete /register',
      error: e,
    });
  }
})

router.post('/login', async (req, res) => {
  try {
    if (!req.body.password) {
      return res.status(400).send({
        success: false,
        message: 'Password not find'
      })
  }
  if (!req.body.email || validateEmail(req.body.email) === false ) {
    return res.status(400).send({
      success: false,
      message: 'Email is not valid',
    })
}
    await login(req, res)
  } catch (e) {
    res.status(400).json({
      success: 'false',
      message: 'Echec de la requete /login',
      error: e,
    });
  }
})

// the user is not logged in, then it won’t be able to access the route and redirect to the login page in clientside based on the response.
router.get('/profile', authMiddleware, function (req, res) {
  console.log('eeeeeeeeee')
  res.json({
    'access': true
  })
})

module.exports = router;