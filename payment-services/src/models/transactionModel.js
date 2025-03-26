const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  senderName: { type: String, required: true },  
  receiverName: { type: String, required: true },  
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", transactionSchema);
