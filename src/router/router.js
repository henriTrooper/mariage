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
  urlencoded,
  json,
} = bodyParser;

//Middlaware Auth
const user = require('../Auth/UserController')
const { authMiddleware } = require('../Auth/UserController')

router.use(json());
router.use(urlencoded({
  extended: true,
}));

router.logger = Logger;

                                                  /*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                                  * * * * * * * * * * * ROUTAGE * * * * * * * * * * ** * * * * * * *
                                                  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * ROUTAGE GET  * * * * * * * * * * ** * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.get('/', async (req, res) => {
  try {
    const getAll = await getFindAllStarted();
    res.status(200).json({
      success: 'true',
      message: 'Find All User',
      users: getAll,
    });
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
    const getAll = await getFindAllUser();
    res.status(200).json({
      success: 'true',
      message: 'Find All User',
      users: getAll,
    });
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
      res.status(400).send({
        success: 'false',
        message: 'Name is required',
      });
    } else if (!req.body.isPublic) {
      res.status(400).send({
        success: 'false',
        message: 'isPublic is required',
      });
    }
    const newUser = await save(req);
    res.status(200).json({
      success: 'true',
      message: 'User added successfully',
      user: newUser,
    });
  } catch (e) {
    res.status(400).json({
      success: 'false',
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
    const updatedUser = await updateById(req);
    res.status(200).json({
      success: 'true',
      message: 'User upadted successfully',
      user: updatedUser.value,
    });
  } catch (e) {
    res.status(404).send({
      success: 'false',
      message: 'error in update',
    });
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * ROUTAGE DELETE  * * * * * * * * * * ** * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.delete('/user/:userId', async (req, res) => {
  try {
    await deleteById(req);
    res.status(200).json({
      success: 'true',
      message: 'Deleted success',
    });
  } catch (e) {
    res.status(400).json({
      success: 'false',
      message: 'Echec de la requete /delete',
      error: e,
    });
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * ROUTAGE AUTHENTIFICATION  * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.post('/register', user.register)

router.post('/login', user.login)

// the user is not logged in, then it won’t be able to access the route and redirect to the login page in clientside based on the response.
router.get('/profile', authMiddleware, function (req, res) {
  res.json({ 'access': true })
})

module.exports = router;
