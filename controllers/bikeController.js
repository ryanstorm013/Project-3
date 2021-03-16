const { updateOne } = require("../models/bikeModel");
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
      //const oneBike = await Bike.findOne({ _id: req.params.id });
      const oneBike = await Bike.find({ model: req.params.id });
      res.json(oneBike);
    } catch (err) {
      res.send(err);
    }
  },
  getByColor: async (req, res) => {
    try {
      //const oneBike = await Bike.findOne({ _id: req.params.id });
      const oneBike = await Bike.find({ color: req.params.id });
      res.json(oneBike);
    } catch (err) {
      res.send(err);
    }
  },
  updateOne: async (req, res) => {
    try {
      const updateBike = await Bike.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.json(updateBike);
    } catch (err) {
      res.send(err);
    }
  },
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
  deleteOne: async (req, res) => {
    try {
      res.json(await Bike.findByIdAndDelete(req.params.id));
    } catch (err) {
      res.send(err);
    }
  },
};
