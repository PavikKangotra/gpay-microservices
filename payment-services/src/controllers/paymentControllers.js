const Transaction = require("../models/transactionModel");


exports.createTransaction = async (req, res) => {
  try {
    const { senderName, receiverName, amount } = req.body;
    const transaction = await Transaction.create({ senderName, receiverName, amount });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllTransaction = async (req, res) => {
    try {
    const transaction = await Transaction.find();
    res.json({ success: true, transaction });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId);
    if (!transaction) return res.status(404).json({ error: "Transaction not found" });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.transactionId, req.body, { new: true });
    if (!transaction) return res.status(404).json({ error: "Transaction not found" });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.transactionId);
    if (!transaction) return res.status(404).json({ error: "Transaction not found" });
    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
