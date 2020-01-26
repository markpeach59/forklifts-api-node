const mongoose = require("mongoose");

const Quote = mongoose.model(
  "Quotes",
  new mongoose.Schema(
    {
      model: String,
      price: Number,
      masttype: String,
      mastsize: Number,
      closedheight: Number,
      forks: Number,

      sideshift: String,
      tyre: String,
      coldstoreprot: Boolean,
      seat: String,
      cabin: String,

      aircon: Boolean,
      heater: Boolean,
      reargrab: Boolean,
      sideleverhydraulic: Boolean,
      battery: String,
      charger: String,
      sideextractionbattery: Boolean,
      armguard: Boolean,
      platform: Boolean,

      loadbackrest: Boolean,
      steering: Boolean,

      fork2d: String,
      bfs: Boolean,
      manualtrolley: Boolean,
      blinkey: Boolean
    },
    { timestamps: true }
  )
);

exports.Quote = Quote;
