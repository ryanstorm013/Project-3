const router = require("express").Router();

const { newTransaction, getAllByID } = require("../controllers/transaction");

router.post("/", newTransaction);

router.get("/:id", getAllByID);

module.exports = router;