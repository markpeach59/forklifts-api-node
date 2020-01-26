const mongoose = require("mongoose");

const dealerSchema = new mongoose.Schema({
  dealername: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255
  },
  dealermarkup: Number
});

const Dealer = mongoose.model("Dealers", dealerSchema);

exports.Dealer = Dealer;
