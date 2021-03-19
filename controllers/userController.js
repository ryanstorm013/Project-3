const User = require("../models/userModel");

module.exports = {
  newUser: async (req, res) => {
    try {
      const userObj = new User({
        email: req.body.email,
        password: req.body.password,
        displayName: req.body.displayName,
      });
      const successSave = await userObj.save();
      res.json({
        email: successSave.email,
        displayName: successSave.displayName,
        _id: successSave._id,
      });
    } catch (err) {
      res.send(err);
    }
  },
  getOne: async (req, res) => {
    try {
      const oneUser = await User.findOne({ _id: req.params.id });
      res.json(oneUser);
    } catch (err) {
      res.send(err);
    }
  },
  updateOne: async (req, res) => {
    try {
      const updateUser = await User.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.json(updateUser);
    } catch (err) {
      res.send(err);
    }
  },
  deleteOne: async (req, res) => {
    try {
      res.json(await User.findByIdAndDelete(req.params.id));
    } catch (err) {
      res.send(err);
    }
  },
};
