const router = require('express').Router();

const bodyParser = require('body-parser');
const Logger = require('../utils/logger');
const {
  getFindAll
} = require('../services/get/{started}/get.service');
const {
  save
} = require('../services/post/post.service');

const {
  deleteById
} = require('../services/delete/id/delete.service');

const {
  updateById
} = require('../services/update/id/update.service');

const {
  urlencoded,
  json
} = bodyParser;

router.use(json());
router.use(urlencoded({
  extended: true
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
     const getAll = await getFindAll();
     res.status(200).json({
      success: "true",
      message: "Find All User",
      users: getAll
    });
  } catch (e) {
    res.status(400).json({
      success: "false",
      message : 'Echec de la requete /',
      error: e,
    });
  }
});

router.get('/users', async (req, res) => {
  try {
    const getAll = await getFindAll();
    res.status(200).json({
      success: "true",
      message: "Find All User",
      users: getAll
    });
  } catch (e) {
    res.status(400).json({
      success: "false",
      message: "Echec de la requete /users",
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
        success: "false",
        message: "Name is required",
      });
    } else if (!req.body.companies) {
      res.status(400).send({
        success: "false",
        message: "Companies is required",
      });
    }
    const newUser = await save(req);
    res.status(200).json({
      success: "true",
      message: "User added successfully",
      user: newUser
    });
  } catch (e) {
    res.status(400).json({
      success: "false",
      message: "Echec de la requete /addUser",
      error: e,
    });
  }
});

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * ROUTAGE UPDATE  * * * * * * * * * * ** * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


router.put("/user/:userId", async (req, res) => {
  try {
    const updatedUser = await updateById(req)
    res.status(200).json({
      success: "true",
      message: "User added successfully",
      user: updatedUser
    });
  } catch(e){
    return  res.status(404).send({
      success: 'true',
      message: 'error in update'
  });
  }
 
  
})

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * ROUTAGE DELETE  * * * * * * * * * * ** * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

router.delete("/user/:userId", async (req, res) => {
  try {
    await deleteById(req)
    res.status(200).json({
      success: "true",
      message: "Deleted success",
    });
  } catch (e) {
    res.status(400).json({
      success: "false",
      message: "Echec de la requete /delete",
      error: e,
    });
  }
});


module.exports = router;