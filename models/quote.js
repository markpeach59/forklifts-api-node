const mongoose = require("mongoose");

const Quote = mongoose.model(
  "Quotes",
  new mongoose.Schema(
    {
      model: String,
      price: Number
    },
    { timestamps: true }
  )
);

exports.Quote = Quote;
