const _ = require("lodash");
const auth = require("../middleware/auth");

const express = require("express");
const router = express.Router();

const { Quote } = require("../models/quote");

/*
router.get("/", async (req, res) => {
  const quotes = await Quote.find()
    .select("-__v")
    .sort("-updatedAt");

  res.send(quotes);
});
*/

router.get("/", auth, async (req, res) => {
  const quotes = await Quote.find({ userid: req.user._id })
    .select("-__v")
    .sort("-updatedAt");

  res.send(quotes);
});

router.get("/:id", async (req, res) => {
  const quote = await Quote.findById(req.params.id).select("-__v");

  if (!quote)
    return res.status(404).send("The quote with the given ID was not found.");

  res.send(quote);
});

router.post("/", async (req, res) => {
  quote = new Quote(
    _.pick(req.body, [
      "userid",
      "model",
      "price",
      "imgname",
      "masttype",
      "mastsize",
      "forks",
      "sideshift",
      "tyre",
      "coldstoreprot",
      "seat",
      "cabin",
      "aircon",
      "heater",
      "reargrab",
      "sideleverhydraulic",
      "battery",
      "charger",
      "armguard",
      "platform",
      "loadbackrest",
      "steering",
      "fork2d",
      "bfs",
      "manualtrolley",
      "blinkey",
      "sideextractionbattery",
      "order"
    ])
  );

  quote = await quote.save();

  res.send(
    _.pick(quote, [
      "_id",
      "userid",
      "model",
      "imgname",
      "price",
      "masttype",
      "mastsize",
      "forks",
      "sideshift",
      "tyre",
      "coldstoreprot",
      "seat",
      "cabin",
      "aircon",
      "heater",
      "reargrab",
      "sideleverhydraulic",
      "battery",
      "charger",
      "armguard",
      "platform",
      "loadbackrest",
      "steering",
      "fork2d",
      "bfs",
      "manualtrolley",
      "blinkey",
      "sideextractionbattery",
      "order"
    ])
  );
});

module.exports = router;
