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

// Middlaware Auth
const {
  authMiddleware,
} = require('../Middlewares/userController');

const {
  urlencoded,
  json,
} = bodyParser;

router.use(json());
router.use(urlencoded({
  extended: true,
}));

router.logger = Logger;

const {
  validateEmail,
} = require('../utils/utils');

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE * * * * * * * * * * ** * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE GET  * * * * * * * * * * ** * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.get('/', authMiddleware, async (req, res) => {
  await getFindAllStarted(req, res);
});

router.get('/users', authMiddleware, async (req, res) => {
  await getFindAllUser(req, res);
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE POST  * * * * * * * * * * ** * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.post('/addUser', authMiddleware, async (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      success: false,
      message: 'Name is required',
    });
  } else if (typeof (req.body.isPublic) !== 'boolean') {
    res.status(400).send({
      success: false,
      message: 'isPublic is required or syntaxe incorrect',
    });
  } else {
    await save(req, res);
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE UPDATE  * * * * * * * * * * ** * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.put('/user/:userId', authMiddleware, async (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      success: false,
      message: 'Name is required',
    });
  } else if (typeof (req.body.isPublic) !== 'boolean') {
    res.status(400).send({
      success: false,
      message: 'isPublic is required',
    });
  } else {
    await updateById(req, res);
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE DELETE  * * * * * * * * * * ** * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.delete('/user/:userId', authMiddleware, async (req, res) => {
  if (!req.headers.id) {
    res.status(400).send({
      success: false,
      message: 'No ID find',
    });
  } else {
    await deleteById(req, res);
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE AUTHENTIFICATION  * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.post('/register', async (req, res) => {
  if (validateEmail(req.body.email) === false) {
    res.status(400).send({
      success: false,
      message: 'Email is not valid',
    });
  } else if (!req.body.password) {
    res.status(400).send({
      success: false,
      message: 'Password is required',
    });
  } else if (req.body.password !== req.body.passwordConfirmation) {
    res.status(400).send({
      success: false,
      message: 'Password does not match',
    });
  } else {
    await register(req, res);
  }
});

router.post('/login', async (req, res) => {
  if (!req.body.password) {
    res.status(400).send({
      success: false,
      message: 'Password not find',
    });
  } else if (!req.body.email || validateEmail(req.body.email) === false) {
    res.status(400).send({
      success: false,
      message: 'Email is not valid',
    });
  } else {
    await login(req, res);
  }
});

// the user is not logged in, then it won’t be able to access the route and redirect to the login page in clientside based on the response.
router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    access: true,
  });
});

module.exports = router;
