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
      res.json(successSave);
    } catch (err) {
      res.send(err);
    }
  },
  getOne: async (req, res) => {},
  updateOne: async (req, res) => {},
  deleteOne: async (req, res) => {},
};
