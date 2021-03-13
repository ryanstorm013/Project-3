const router = require("express").Router();
const {
  getAll,
  postOne,
  getOne,
  updateOne,
  deleteOne,
} = require("../controllers/bikeController");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", postOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;
