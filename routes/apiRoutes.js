const router = require("express").Router();
const { getAll, postOne } = require("../controllers/bikeController");

router.get("/", getAll);
router.post("/", postOne);

module.exports = router;
