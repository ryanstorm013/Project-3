const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  wheels: {
    type: Number,
    required: false,
  },
  owner: {
    type: String, //this might be an ID in the future
    required: true,
  },
});

module.exports = Bike = mongoose.model("bike", bikeSchema);
