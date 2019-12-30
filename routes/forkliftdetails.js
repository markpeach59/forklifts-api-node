const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Forkliftdetail } = require("../models/forkliftdetail");

router.get("/", async (req, res) => {
  const forklifts = await Forkliftdetail.find().select("-__v");

  res.send(forklifts);
});

router.get("/:id", async (req, res) => {
  const forklift = await Forkliftdetail.findById(req.params.id).select("-__v");

  if (!forklift)
    return res.status(404).send("The forklift the given ID was not found.");

  res.send(forklift);
});

module.exports = router;
