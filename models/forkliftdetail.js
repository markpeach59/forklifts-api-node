const mongoose = require("mongoose");

const Forkliftdetail = mongoose.model(
  "Forkliftdetails",
  new mongoose.Schema({
    model: String,
    capacity: Number,
    engType: String,
    basePrice: Number
  })
);

exports.Forkliftdetail = Forkliftdetail;
