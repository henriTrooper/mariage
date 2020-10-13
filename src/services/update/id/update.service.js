const router = require('express').Router();
const bodyParser = require('body-parser');
const Regiments = require('../../../models/Regiments');
const Logger = require('../../../utils/logger');

const { findUserById, getUserList } = require('../../../../user');
const userList = getUserList(); // assume for now this is your database

const { urlencoded, json } = bodyParser;
router.use(json());
router.use(urlencoded({ extended: true }));
router.logger = Logger;


async function updateById(req) {
    try {
        console.log(req.params)
        const id = parseInt(req.params.userId, 10);
        const userFound=findUserById(id)
      
        if (!userFound) {
          return status(404).send({
            success: 'false',
            message: 'user not found',
          });
        }
      
        const updatedUser= {
            id: id,
            isPublic: req.body.isPublic || userFound.body.isPublic,
            name:req.body.name || userFound.body.name,
            companies: req.body.companies || userFound.body.companies,
            books: req.body.books || userFound.body.books
        };
      
        if (!updatedUser.name) {
          return status(400).send({
            success: "false",
            message: "name is required",
          });
        } else if (!updatedUser.companies) {
          return status(400).send({
            success: "false",
            message: "companies is required",
          });
        }
      
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].id === id) {
                userList[i] = updatedUser;
                return updatedUser
            }
        }
    } catch (e) {
      return status(400).json({
        success: "false",
        message: 'Echec dans le service /update{id}',
        error: e,
      });
    }
  }

  module.exports = {
    updateById,
  };
  