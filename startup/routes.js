const express = require("express");
const forklifts = require("../routes/forklifts");
const forkliftdetails = require("../routes/forkliftdetails");
const users = require("../routes/users");
const auth = require("../routes/auth");

//const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/forklifts", forklifts);
  app.use("/api/forkliftdetails", forkliftdetails);
  app.use("/api/users", users);
  app.use("/api/auth", auth);

  //app.use(error);
};
