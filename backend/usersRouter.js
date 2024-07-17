const express = require("express");
const userRouter = express.Router();
const panelAdminDB = require('./db/projectDB.js');

userRouter.get("/", (req, res) => {
    const queryUsers = "SELECT * FROM users";
    panelAdminDB.query(queryUsers, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.send(result);
      }
    });
  });

  module.exports = userRouter
