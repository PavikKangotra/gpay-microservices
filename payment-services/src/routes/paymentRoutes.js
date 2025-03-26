const express = require("express");
const {
  createTransaction,
  getAllTransaction,  
  getTransactionById,
  updateTransaction,
  deleteTransaction
} = require("../controllers/paymentControllers");

const router = express.Router();

router.post("/transaction", createTransaction);
router.get("/transactions", getAllTransaction);  
router.get("/transaction/:transactionId", getTransactionById); 
router.put("/transaction/:transactionId", updateTransaction);
router.delete("/transaction/:transactionId", deleteTransaction);

module.exports = router;
