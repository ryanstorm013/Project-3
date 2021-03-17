const router = require("express").Router();
const {
  getAll,
  postOne,
  getOne,
  getByColor,
  getByZip,
  updateOne,
  deleteOne,
} = require("../controllers/bikeController");

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/color/:id", getByColor);
router.get("/zip/:id", getByZip);
router.post("/", postOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;
