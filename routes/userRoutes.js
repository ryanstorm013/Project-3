const router = require("express").Router();
const { newUser } = require("../controllers/userController");

router.post("/", newUser);

module.exports = router;
