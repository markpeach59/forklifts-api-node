const mongoose = require("mongoose");

const Forkliftdetail = mongoose.model(
  "Forkliftdetails",
  new mongoose.Schema({
    model: String,
    capacity: Number,
    engType: String,
    basePrice: Number,

    masts: [
      {
        masttype: String,
        mastsizes: [
          {
            mastlength: Number,
            price: Number
          }
        ]
      }
    ],
    forks: [{ forklength: Number, price: Number }],
    valves: [{ valvetype: String, price: Number }],
    tyres: [{ tyretype: String, price: Number }],
    sideshift: [{ sideshifttype: String, price: Number }],
    cabin: [{ cabinoption: String, price: Number }]
  })
);

exports.Forkliftdetail = Forkliftdetail;
