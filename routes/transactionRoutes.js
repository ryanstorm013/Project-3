const router = require("express").Router();

const {newTransaction, getAllByID} = require("../controllers/transaction");

router.post("/", newTransaction);

router.get("/", getAllByID);

module.exports = router;