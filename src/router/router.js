const router = require('express').Router();

const bodyParser = require('body-parser');
const Logger = require('../utils/logger');
const {
  getStarted,
} = require('../services/get/{started}/get.service');

const {
  getFindAllUser,
} = require('../services/get/{user}/get.service');

const {
  insertOne,
} = require('../services/post/post.service');

const {
  deleteById,
} = require('../services/delete/id/delete.service');

const {
  deleteByParam,
} = require('../services/delete/param/delete.service');

const {
  purgeDB,
} = require('../services/delete/purge/delete.service');


const {
  updateById,
} = require('../services/update/id/update.service');

const {
  updateByParam,
} = require('../services/update/param/update.service');


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

const path = require('path')


/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE * * * * * * * * * * ** * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE GET  * * * * * * * * * * ** * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.get('/', async (req, res) => {
  //await getStarted(req, res);
  res.sendFile(path.relative(process.cwd(),"../public/dist/regiment/index.html"))
});

router.get('/users', async (req, res) => {
  await getFindAllUser(req, res);
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE POST  * * * * * * * * * * ** * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.post('/addUser', async (req, res) => {
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
    await insertOne(req, res);
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE UPDATE  * * * * * * * * * * ** * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.put('/user/id/:userId', async (req, res) => {
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

router.put('/user/param/:param', async (req, res) => {
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
    await updateByParam(req, res);
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * ROUTAGE DELETE  * * * * * * * * * * ** * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.delete('/user/id/:userId', async (req, res) => {
  if (!req.headers.id) {
    res.status(400).send({
      success: false,
      message: 'No ID find',
    });
  } else {
    await deleteById(req, res);
  }
});

router.delete('/user/param/:param', async (req, res) => {
    if (!req.body.name) {
    res.status(400).send({
      success: false,
      message: 'No Param find',
    });
  } else {
    await deleteByParam(req, res);
  }
});

router.delete('/user/purgeDB', async (req, res) => {
  await purgeDB(req, res);
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
