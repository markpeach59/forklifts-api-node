const _ = require("lodash");
const express = require("express");
const router = express.Router();

const { Dealer } = require("../models/dealer");

router.get("/", async (req, res) => {
  const dealers = await Quote.find().select("-__v");

  if (!dealers) return res.status(404).send("No Dealers found");

  res.send(dealers);
});

router.get("/:id", async (req, res) => {
  const dealer = await Quote.findById(req.params.id).select("-__v");

  if (!dealer)
    return res.status(404).send("The dealer with the given ID was not found.");

  res.send(dealer);
});

router.post("/", async (req, res) => {
  dealer = new Dealer(_.pick(req.body, ["dealername", "dealermarkup"]));

  dealer = await dealer.save();

  res.send(_.pick(dealer, ["_id", "dealername", "dealermarkup"]));
});

module.exports = router;
