const express = require("express");
const forklifts = require("../routes/forklifts");
const forkliftdetails = require("../routes/forkliftdetails");

//const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/forklifts", forklifts);
  app.use("/api/forkliftdetails", forkliftdetails);
  //app.use(error);
};
