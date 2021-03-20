const Transaction = require("../models/transactionModel");

module.exports = {
    newTransaction: async (req, res) => {
        try {
            const transaction = new Transaction({
                ownerId: req.body.ownerId,
                bikeId: req.body.bikeId,
                renterId: req.body.renterId,
            });
            const successSave = await transaction.save();
            res.json({
                ownerId: successSave.ownerId,
                bikeId: successSave.bikeId,
                renterId: successSave.renterId,
            })
        } catch (error) {
         res.send(error)   
        }
    }
}