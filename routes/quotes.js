const _ = require("lodash");
const express = require("express");
const router = express.Router();

const { Quote } = require("../models/quote");

router.get("/", async (req, res) => {
  const quotes = await Quote.find().select("-__v");

  res.send(quotes);
});

router.get("/:id", async (req, res) => {
  const quote = await Quote.findById(req.params.id).select("-__v");

  if (!quote)
    return res.status(404).send("The quote with the given ID was not found.");

  res.send(quote);
});

router.post("/", async (req, res) => {
  quote = new Quote(_.pick(req.body, ["model", "price"]));

  quote = await quote.save();

  res.send(_.pick(quote, ["_id", "model", "price"]));
});

module.exports = router;
