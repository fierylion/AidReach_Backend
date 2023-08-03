const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  fromAddress: { type: String, required: true },
  toAddress: { type: String, required: true },
  amount: { type: Number, required: true },
  transactionHash: { type: String, required: true },
  blockNumber: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
