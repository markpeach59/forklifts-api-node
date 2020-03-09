const mongoose = require("mongoose");

const Quote = mongoose.model(
  "Quotes",
  new mongoose.Schema(
    {
      userid: mongoose.Schema.Types.ObjectId,
      model: String,
      imgname: String,
      price: Number,
      masttype: String,
      mastsize: Number,
      closedheight: Number,

      valve: String,

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
      blinkey: Boolean,
      order: { type: Boolean, default: false }
    },
    { timestamps: true }
  )
);

exports.Quote = Quote;
