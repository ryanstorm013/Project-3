const Bike = require("../models/bikeModel");

module.exports = {
  getAll: async (req, res) => {
    try {
      const allBikes = await Bike.find({});
      res.json(allBikes);
    } catch (err) {
      res.send(err);
    }
  },
  getOne: async (req, res) => {
    try {
    } catch (err) {}
  },
  updateOne: async (req, res) => {},
  postOne: async (req, res) => {
    try {
      const newBike = new Bike({
        model: req.body.model,
        zip: req.body.zip,
        price: req.body.price,
        color: req.body.color,
        wheels: req.body.wheels,
        ownerId: req.body.ownerId,
      });
      const successSave = await newBike.save();
      res.json(successSave);
    } catch (err) {
      res.send(err);
    }
  },
  deleteOne: async (req, res) => {},
};
